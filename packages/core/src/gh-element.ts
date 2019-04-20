import { render } from "lit-html";
import css from "shadow-css";
import camelToKebabCase from "camel-to-kebab";
import camelCase from "camelcase";

import { schedule } from "./scheduler";

export const Json = (v) => {
  try {
    return JSON.parse(v);
  } catch (e) {
    return undefined;
  }
}

import { Component, PropertyDeclarations, UseEffectFunc, UseStateFunc, PropertyDeclaration, UseMemoFunc } from "./types";

interface DepsObj {
  deps: any[];
}

interface Effect extends DepsObj {
  cleanup?: () => void;
}

interface Memo<T = any> extends DepsObj {
  value: T;
}

export const register = <TProps = {}>(
  elementName: string,
  component: Component<TProps>,
  properties: PropertyDeclarations<TProps> = {} as TProps,
  ElementType: any = HTMLElement
) => {
  const propertyKeys = (properties ? Object.getOwnPropertyNames(properties) : []);

  class GhElement extends ElementType {
    private _afterRender: Array<() => void>;
    private _beforeRender: Array<() => void>;

    private _effects: Effect[];
    private _effectsIndex: number;

    private _states: any[];
    private _statesIndex: number;

    private _memos: Memo[];
    private _memosIndex: number;

    public _properties: any;

    private _needsUpdate: boolean;

    constructor(...args: any[]) {
      super(...args);

      this._afterRender = [];
      this._beforeRender = [];

      this._effects = [];
      this._effectsIndex = 0;

      this._states = [];
      this._statesIndex = 0;

      this._memos = [];
      this._memosIndex = 0;

      this._properties = {};

      this._needsUpdate = false;

      this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
      return (properties && Object.getOwnPropertyNames(properties).map(p => properties[p].attributeName || camelToKebabCase(p))) || [];
    }

    public connectedCallback() {
      this.invalidate(false);
    }

    public attributeChangedCallback(attributeName, oldValue, newValue) {
      if (oldValue === newValue) return;

      const propertyName = Object
        .getOwnPropertyNames(properties)
        .find(key => (properties[key] as PropertyDeclaration).attributeName === attributeName) || camelCase(attributeName);

      const parse = (newValue: any) => {
        const declaration = (properties[propertyName] as PropertyDeclaration);

        if (!declaration) return newValue;

        if (declaration.type === Boolean) {
          return newValue === "true";
        }

        return declaration.type(newValue)
      }

      this._beforeRender.push(() => {
        this._properties[propertyName] = parse(newValue);
      });

      this.invalidate();
    }

    public disconnectedCallback() {
      this._effects.forEach((e) => {
        e.cleanup && e.cleanup();
      })
    }

    protected beforeRender = () => {
      this._effectsIndex = 0;
      this._statesIndex = 0;

      this._beforeRender.forEach(f => f());
      this._beforeRender = [];
    }

    protected render = () => {
      const template = component(this._properties, {
        useCallback: ((s) => s) as any,
        useEffect: this.useEffect,
        useMemo: this.useMemo,
        useState: this.useState
      });

      render(template, this.shadowRoot);

      const style = this.shadowRoot.querySelector("style");
      if (style) {
        const newStyles = css(style.innerText)(this);
        (style as any).cssText = newStyles || "";
      }
    }

    protected afterRender = () => {
      this._afterRender.forEach(f => f());

      this._afterRender = [];
    }

    private useEffect: UseEffectFunc = (effect, deps = []) => {
      const index = this._effectsIndex++;
      const lastEffect = this._effects[index] || { deps: [] };

      if (index >= this._effects.length || this.diffDeps(this._effects[index].deps, deps)) {
        this._afterRender.push(() => {
          if (lastEffect.cleanup) {
            lastEffect.cleanup();
          }

          const cleanup: any = effect();
          this._effects[index] = {
            deps,
            cleanup
          };
        });
      }
    }

    private useState: UseStateFunc = <T = any>(initialValue) => {
      const index = this._statesIndex++;

      if (index >= this._states.length) {
        this._states.push(initialValue);
      }

      return [
        this._states[index],
        (newValue: T) => {
          if (this._states[index] !== newValue) {
            this._beforeRender.push(() => {
              this._states[index] = newValue;
            });
            this.invalidate();
          }
        }
      ];
    }

    private useMemo: UseMemoFunc = <T = any>(memo, deps = []) => {
      const index = this._memosIndex++;
      const first = index >= this._memos.length;

      if (first || this.diffDeps(this._memos[index].deps, deps)) {
        const value = memo();
        if (first) this._memos.push({ deps, value });
        else this._memos[index] = { deps, value }
      }

      return this._memos[index].value;
    }

    public invalidate = (async = true) => {
      if (this._needsUpdate === true) return;

      this._needsUpdate = true;

      const run = () => {
        this.beforeRender();
        if (this._needsUpdate) {
          this.render();
          this._needsUpdate = false;

          this.afterRender();
        }

        if (this._needsUpdate) {
          schedule(run);
        }
      };

      if (async) schedule(run);
      else run();
    }

    private diffDeps = (last: any[], current: any[]): boolean => {
      if (last.length !== current.length) {
        return true;
      }

      for (let i = 0; i < current.length; i++) {
        if (last[i] !== current[i]) {
          return true;
        }
      }

      return false;
    }
  }

  propertyKeys.forEach(propertyKey => {
    Object.defineProperty(GhElement.prototype, propertyKey, {
      get() {
        return this._properties[propertyKey];
      },
      set(this: GhElement, v: any) {
        this._properties[propertyKey] = v;
        this.invalidate();
      }
    });
  })

  try {
    customElements.define(elementName, GhElement);
  } catch (e) {
    console.error(`Failed to register element: ${elementName}`);
  }
}
