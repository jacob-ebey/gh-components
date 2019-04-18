!function(e){function t(t){for(var o,l,a=t[0],p=t[1],i=t[2],h=0,m=[];h<a.length;h++)l=a[h],r[l]&&m.push(r[l][0]),r[l]=0;for(o in p)Object.prototype.hasOwnProperty.call(p,o)&&(e[o]=p[o]);for(c&&c(t);m.length;)m.shift()();return s.push.apply(s,i||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,a=1;a<n.length;a++){var p=n[a];0!==r[p]&&(o=!1)}o&&(s.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},r={0:0},s=[];function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var a=window.webpackJsonp=window.webpackJsonp||[],p=a.push.bind(a);a.push=t,a=a.slice();for(var i=0;i<a.length;i++)t(a[i]);var c=p;s.push([18,1]),n()}({18:function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const s=o(n(19)),l=n(0);n(26),n(3),n(30);const a=n(1),p=o(n(31));console.log(p.default);const i=new s.default(void 0,!0,"#");l.register("gh-docs",function(e,{useEffect:t,useMemo:o,useState:s}){const{palette:p}=a.getTheme(),[c,h]=s(0),[m,u]=s(null);t(()=>{i.on("/",()=>{Promise.resolve().then(()=>r(n(32))),u("home")}).on("try",()=>{Promise.resolve().then(()=>r(n(37))),u("try")}).on("try/create",()=>{Promise.resolve().then(()=>r(n(44))),u("try/create")}).on("try/properties",()=>{Promise.resolve().then(()=>r(n(45))),u("try/properties")}).on("try/state-events",()=>{Promise.resolve().then(()=>r(n(46))),u("try/state-events")}).on("try/styles",()=>{Promise.resolve().then(()=>r(n(47))),u("try/styles")}).on("core",()=>{Promise.resolve().then(()=>r(n(48))),u("core")}).on("components",()=>{Promise.resolve().then(()=>r(n(51))),u("components")}),i.notFound(()=>u("not-found")),i.resolve()},[c]),t(()=>{const e=()=>{h(c+1)};return window.addEventListener("beforeunload",e),window.addEventListener("hashchange",e),()=>{window.removeEventListener("beforeunload",e),window.removeEventListener("hashchange",e)}},[c]),t(()=>{window.scrollTo(0,0)},[m]);let g=o(()=>{switch(m){case"home":return l.html`<gh-home></gh-home>`;case"try":return l.html`<gh-try></gh-try>`;case"try/create":return l.html`<gh-try-create></gh-try-create>`;case"try/properties":return l.html`<gh-try-properties></gh-try-properties>`;case"try/state-events":return l.html`<gh-try-state-events></gh-try-state-events>`;case"try/styles":return l.html`<gh-try-styles></gh-try-styles>`;case"core":return l.html`<gh-core></gh-core>`;case"components":return l.html`<gh-components></gh-components>`;default:return l.nothing}},[m]);return l.html`
    <gh-appbar
      label="@gh-components"
      label-href="#"
      has-items="true"
      theme="primary"
    >
      <gh-appbar-item href="#try">Try</gh-appbar-item>
      <gh-appbar-item href="#core">Core</gh-appbar-item>
      <!-- <gh-appbar-item href="#components">Components</gh-appbar-item> -->
      <gh-appbar-item href="https://github.com/jacob-ebey/gh-components"><gh-icon-github></gh-icon-github></gh-appbar-item>
    </gh-appbar>
    <main>
      <div class="content">
        ${g}
      </div>

      <footer>
        <gh-contentpage>
          <p>Brought to you by the GrowHub team.</p>
          <p>Copyright 2018 GrowHub.</p>
        </gh-contentpage>
      </footer>
    </main>

    <style>
      :host {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
      }

      main {
        display: flex;
        flex-direction: column;
        flex: 1;
        box-sizing: border-box;
      }

      .content {
        flex: 1;
        min-height: min-content;
        width: 100%;
        margin: 0;
        padding: 0;
        overflow-x: auto;
        overflow-y: hidden;
      }

      footer {
        min-height: fit-content;
        margin-top: 60px;
        overflow: auto;
        background-color: ${p.light};
        color: #999999;
        font-size: 0.9em;
      }
    </style>
  `})},32:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0);n(5),n(3),n(12),n(2),n(13),n(8),n(9);const r=n(1);o.register("my-hello",function({name:e}){return o.html`
    Hello, ${e}!

    <style>
      :host {
        color: pink;
        font-size: 26px;
      }
    </style>
  `},{name:{type:String}}),o.register("gh-home",function(){const{palette:e}=r.getTheme();return o.html`
      <gh-hero>
        <gh-hero-h1>GrowHub Components</gh-hero-h1>
        <gh-hero-h2>A set of web components and a core library for you to build your own</gh-hero-h2>
      </gh-hero>

      <gh-contentpage>  
        <gh-h1>Why GrowHub Components?</gh-h1>
        
        <gh-row breakpoint="portrait">
          <gh-col>
            <gh-h2>Seamlessly interoperable</gh-h2>

            <p>GitHub Components follows the Web Components standards, so your components will work with any framework.</p>

            <p>
              GitHub Components uses Custom Elements for easy inclusion in web pages, and Shadow DOM for encapsulation.
              There’s no new abstraction on top of the web platform.
            </p>
          </gh-col>

          <gh-col>
            <gh-h2>Delightfully declarative</gh-h2>

            <p>Developing functional components just makes sense. No inheritence or "this" to deal with.</p>

            <p>
              Express your UI declaratively, as a function of state. No need to learn a custom templating language
              – you can use the full power of JavaScript in your templates. Components can update automatically when their
              properties change.
            </p>
          </gh-col>

          <gh-col>
            <gh-h2>Hooks power</gh-h2>

            <p>Recently React has shown us some of the benefits of their Hooks API, so we have taken a similar approach.</p>

            <p>
              Components can have internal state with the <em>useState</em> hook, manage lifecycle and subscriptions with
              <em>useEffect</em> hook, and optimize their components with <em>useCallback</em> and <em>useMemo</em> hooks.
            </p>
          </gh-col>
        </gh-row>
      </gh-contentpage>

      <gh-contentpage>  
        <gh-h1>Hello, World</gh-h1>

        <p>Component definition:</p>
        <code-sample type="js">
          <template preserve-content>
            ${'\nimport { html, register } from "@gh-components/core";\n\nfunction Hello({ name }) {\n  return html`\n    Hello, ${name}!\n\n    /* Styles are isolated via the shadow-dom :) */\n    <style>\n      :host {\n        color: pink;\n        font-size: 26px;\n      }\n    </style>\n  `;\n}\n\n// Register the component and declare the properties that can change\nregister("my-hello", Hello, ["name"]);\n            '}
          </template>
        </code-sample>

        <p>Component usage:</p>
        <code-sample type="html">
          <template preserve-content>
            ${'\n<my-hello name="World"></my-hello>\n            '}
          </template>
        </code-sample>

        <p>Output:</p>
        <my-hello name="World"></my-hello>
      </gh-contentpage>

      <gh-contentpage>  
        <gh-h1>Next Steps</gh-h1>

        <gh-row breakpoint="portrait">
          <gh-col>
            <gh-h2>Try it online</gh-h2>
            <p><a href="#try">Try GrowHub Components</a> in our live tutorial, you don't need to install anything.</p>
          </gh-col>

          <gh-col>
            <gh-h2>Get setup</gh-h2>
            <p>When you’re ready to dive in, <a href="#">set up GrowHub Components</a> locally and start building components!</p>
          </gh-col>
        </gh-row>
      </gh-contentpage>

    <style>
      :host em {
        color: ${e.primary};
      }
    </style>
  `})},37:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0);n(4),n(14),n(6),n(15),n(7),o.register("gh-try",function(){return o.html`
    <gh-try-page header="Try Growhub Components" route="try">    
      <p>
        Try GrowHub Components in live-editable code without installing anything. Build your first component, use
        it in a web page, and add style with CSS.
      </p>
      <p>
        This tutorial has live code samples that you can edit, like this:
      </p>
      
      <gh-stackblitz src="https://stackblitz.com/edit/gh-components-core-counter?file=index.ts&embed=1&hideExplorer=1&hideNavigation=1"></gh-stackblitz>

      <p>
        Click <strong>Preview</strong> at any time to see your code in action. You can also go <strong>fullscreen</strong>
        on the top right of the editor.
      </p>

      <gh-warningcard>
        <p>
          <strong>
            If you’re doing the tutorial in your local development environment, you’ll need to make some changes to the code on this page.
          </strong>
          The code samples on this page are written for the live StackBlitz editor. To work locally, see the Getting Started page.
        </p>
      </gh-warningcard>

      <br />

      <gh-button big="true" href="#try/create">Next: 1. Create a component</gh-button>
    </gh-try-page>
  `})},44:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0);n(5),n(4),n(2),n(6),n(7),o.register("gh-try-create",function(){return o.html`
    <gh-try-page header="Create a component" route="try/create">
      <p>In this step, you’ll fill in the gaps in the starting code to create an element class with a basic HTML template.</p>

      <p><strong>Starting code</strong></p>

      <code-sample type="js">
        <template preserve-content>
          ${'\n// TODO: Import html helper function and register\nimport {} from "@gh-components/core";\n\n// TODO: Return content from your functional component\nfunction MyElement() {\n}\n\n// TODO: Register the new component with the browser\nregister("my-element", );\n          '}
        </template>
      </code-sample>

      <p>Click <strong>Launch Code Editor</strong> to edit the starting code. When you’re ready to see your code in action, click <strong>Preview</strong>.</p>

      <gh-stackblitz src="https://stackblitz.com/edit/gh-components-core-try-create?file=index.ts&embed=1&hideExplorer=1&hideNavigation=1"></gh-stackblitz>

      <ol>
        <li>
          <p><strong>Import the html helper function and the register function</strong></p>

          <p>In index.ts, replace the existing import statement with the following code:</p>

          <code-sample type="js">
            <template preserve-content>
              ${'\nimport { html, register } from "@gh-components/core";\n              '}
            </template>
          </code-sample>
        </li>

        <li>
          <p><strong>Return content from your functional component</strong></p>

          <p>In index.ts, replace the existing functional component with the following code:</p>

          <code-sample type="js">
            <template preserve-content>
              ${"\nfunction MyElement() {\n  return html`\n    <p>Hello world! From my-element</p>\n  `;\n}\n              "}
            </template>
          </code-sample>
        </li>

        <li>
          <p><strong>Register the new component with the browser</strong></p>

          <p>In index.ts, replace the existing call to register with the following code:</p>

          <code-sample type="js">
            <template preserve-content>
              ${'\nregister("my-element", MyElement);\n              '}
            </template>
          </code-sample>
        </li>
      </ol>

      <p>Here’s the completed code for this step:</p>

      <p><em>index.ts</em></p>

      <code-sample type="js">
        <template preserve-content>
          ${'\nimport { html, register } from "@gh-components/core";\n\nfunction MyElement() {\n  return html`\n    <p>Hello world! From my-element</p>\n  `;\n}\n\nregister("my-element", MyElement);\n          '}
        </template>
      </code-sample>

      <p>Your code sample should be working now. GrowHub Components are added to a page with simple HTML tags, like this:</p>

      <code-sample type="html">
        <template preserve-content>
          ${"\n<my-element></my-element>\n          "}
        </template>
      </code-sample>

      <br />
      <gh-button big="true" href="#try/properties">Next: 2. Use properties</gh-button>
    </gh-try-page>
  `})},45:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0);n(5),n(4),n(2),n(6),n(7),o.register("gh-try-properties",function(){return o.html`
    <gh-try-page header="Use properties" route="try/properties">
      <p>In this step, you’ll declare a property for your component, initialize the property, and use the value in the component’s template.</p>

      <p><strong>Starting code</strong></p>

      <code-sample type="ts">
        <template preserve-content>
          ${'\nimport { html, register } from "@gh-components/core";\n\ninterface MyElementProps {\n  // TODO: Define props\n}\n\n// TODO: Initialize props\nfunction MyElement() {\n  // TODO: Use property\n  return html`\n    <p>Hello world! From my-element</p>\n  `;\n}\n\nregister("my-element", MyElement, {\n  // TODO: Register props\n});\n          '}
        </template>
      </code-sample>

      <p>Click <strong>Launch Code Editor</strong> to edit the starting code. When you’re ready to see your code in action, click <strong>Preview</strong>.</p>

      <gh-stackblitz src="https://stackblitz.com/edit/gh-components-core-try-properties?file=index.ts&embed=1&view=editor"></gh-stackblitz>

      <ol>
        <li>
          <p><strong>Define your properties interface</strong></p>

          <p>In index.ts, replace the existing interface with the following code:</p>

          <code-sample type="js">
            <template preserve-content>
              ${"\ninterface MyElementProps {\n  person?: string;\n}\n              "}
            </template>
          </code-sample>
        </li>

        <li>
          <p><strong>Initialize your property value</strong></p>

          <p>In index.ts, replace the existing functional component definition with the following code:</p>

          <code-sample type="js">
            <template preserve-content>
              ${'\nfunction MyElement({ person = "world" }: MyElementProps) {\n              '}
            </template>
          </code-sample>
        </li>

        <li>
          <p><strong>Register the property</strong></p>

          <p>In index.ts, replace the existing call to register with the following code:</p>

          <code-sample type="js">
            <template preserve-content>
              ${'\nregister("my-element", MyElement, {\n  person: {\n    type: String\n  }\n});\n              '}
            </template>
          </code-sample>
        </li>

        <li>
          <p><strong>Use the property</strong></p>

          <p>In index.ts, replace the existing html with the following code:</p>

          <code-sample type="js">
            <template preserve-content>
              ${"\nreturn html`\n  <p>Hello ${person}! From my-element</p>\n`;\n              "}
            </template>
          </code-sample>
        </li>
      </ol>

      <p>Here’s the completed code for this step:</p>

      <p><em>index.ts</em></p>

      <code-sample type="js">
        <template preserve-content>
          ${'\nimport { html, register } from "@gh-components/core";\n\ninterface MyElementProps {\n  person?: string;\n}\n\nfunction MyElement({ person = "world" }: MyElementProps) {\n  return html`\n    <p>Hello ${person}! From my-element</p>\n  `;\n}\n\nregister("my-element", MyElement, {\n  person: {\n    type: String\n  }\n});\n          '}
        </template>
      </code-sample>

      <p>Your code sample should be working now. To pass your component a new value, open up index.html and replace the my-element with the following code:</p>

      <code-sample type="html">
        <template preserve-content>
          ${'\n<my-element person="outer space"></my-element>\n          '}
        </template>
      </code-sample>

      <br />
      <gh-button big="true" href="#try/state-events">Next: 3. Use state and events</gh-button>
    </gh-try-page>
  `})},46:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0);n(5),n(4),n(2),n(6),n(7),o.register("gh-try-state-events",function(){return o.html`
    <gh-try-page header="Use state and events" route="try/state-events">
      <p>
        In this step, you’ll use lit-html’s @event annotation to add an event listener to an element inside your template.
        You’ll also add a callback function with the hook useCallback.
      </p>

      <p><strong>Starting code</strong></p>

      <code-sample type="js">
        <template preserve-content>
          ${'\n// TODO: Import ComponentHooks interface\nimport { html, register } from "@gh-components/core";\n\ninterface MyElementProps {\n  person?: string;\n}\n\n// TODO: Get the useState and useCallback hooks\nfunction MyElement({ person = "world" }: MyElementProps) {\n  // TODO: Create a local state\n\n  // TODO: Create a local callback\n\n  // TODO: Use the callback\n  return html`\n    <button>Hello ${person} ${count}! From my-element</button>\n  `;\n}\n\nregister("my-element", MyElement, {\n  person: {\n    type: String\n  }\n});\n          '}
        </template>
      </code-sample>

      <p>Click <strong>Launch Code Editor</strong> to edit the starting code. When you’re ready to see your code in action, click <strong>Preview</strong>.</p>

      <gh-stackblitz src="https://stackblitz.com/edit/gh-components-core-try-state-events?file=index.ts&embed=1&view=editor"></gh-stackblitz>

      <ol>
        <li>
          <p><strong>Import ComponentHooks interface</strong></p>

          <p>In index.ts, replace the existing import with the following code:</p>

          <code-sample type="js">
            <template preserve-content>
              ${'\nimport { ComponentHooks, html, register } from "@gh-components/core";\n              '}
            </template>
          </code-sample>
        </li>

        <li>
          <p><strong>Get the useState and useCallback hooks</strong></p>

          <p>In index.ts, replace the existing functional component definition with the following code:</p>

          <code-sample type="js">
            <template preserve-content>
              ${'\nfunction MyElement({ person = "world" }: MyElementProps, { useState, useCallback }: ComponentHooks) {\n              '}
            </template>
          </code-sample>
        </li>

        <li>
          <p><strong>Create a local state</strong></p>

          <p>In index.ts, add a state to the component:</p>

          <code-sample type="js">
            <template preserve-content>
              ${"\nconst [count, setCount] = useState(0);\n              "}
            </template>
          </code-sample>
        </li>

        <li>
          <p><strong>Create a local callback</strong></p>

          <p>In index.ts, add a new callback to the component:</p>

          <code-sample type="js">
            <template preserve-content>
              ${"\nconst incrementCallback = useCallback(() => {\n  setCount(count + 1);\n}, [count]); // Only create a new callback when count changes\n              "}
            </template>
          </code-sample>
        </li>

        <li>
          <p><strong>Use the callback</strong></p>

          <p>In index.ts, replace the html with the following code:</p>

          <code-sample type="js">
            <template preserve-content>
              ${"\nreturn html`\n  <button @click=${incrementCallback}>Hello ${person} ${count}! From my-element</button>\n`;\n              "}
            </template>
          </code-sample>
        </li>
      </ol>

      <p>Here’s the completed code for this step:</p>

      <p><em>index.ts</em></p>

      <code-sample type="js">
        <template preserve-content>
          ${'\nimport { ComponentHooks, html, register } from "@gh-components/core";\n\ninterface MyElementProps {\n  person?: string;\n}\n\nfunction MyElement(\n  { person = "world" }: MyElementProps,\n  { useState, useCallback }: ComponentHooks\n) {\n  const [count, setCount] = useState(0);\n\n  const incrementCallback = useCallback(() => {\n    setCount(count + 1);\n  }, [count]); // Only create a new callback when count changes\n\n  return html`\n    <button @click=${incrementCallback}>Hello ${person} ${count}! From my-element</button>\n  `;\n}\n\nregister("my-element", MyElement, {\n  person: {\n    type: String\n  }\n});\n          '}
        </template>
      </code-sample>

      <p>Your code sample should be working now.</p>

      <gh-button big="true" href="#try/styles">Next: 4. Use styles</gh-button>
    </gh-try-page>
  `})},47:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0);n(5),n(4),n(2),n(6),n(7),o.register("gh-try-styles",function(){return o.html`
    <gh-try-page header="Use styles" route="try/styles">
      <p>In this step, you’ll style your component with CSS by defining a style tag.</p>

      <p><strong>Starting code</strong></p>

      <code-sample type="js">
        <template preserve-content>
          ${'\nimport { ComponentHooks, html, register } from "@gh-components/core";\n\ninterface MyElementProps {\n  person?: string;\n}\n\nfunction MyElement(\n  { person = "world" }: MyElementProps,\n  { useState, useCallback }: ComponentHooks\n) {\n  const [count, setCount] = useState(0);\n\n  const incrementCallback = useCallback(() => {\n    setCount(count + 1);\n  }, [count]);\n\n  // TODO: Add responsive styles\n  return html`\n    <button @click=${incrementCallback}>Hello ${person} ${count}! From my-element</button>\n  `;\n}\n\nregister("my-element", MyElement, {\n  person: {\n    type: String\n  }\n});\n          '}
        </template>
      </code-sample>

      <p>Click <strong>Launch Code Editor</strong> to edit the starting code. When you’re ready to see your code in action, click <strong>Preview</strong>.</p>

      <gh-stackblitz src="https://stackblitz.com/edit/gh-components-core-try-styles?file=index.ts&embed=1&hideExplorer=1&hideNavigation=1"></gh-stackblitz>

      <ol>
        <li>
          <p><strong>Add styles</strong></p>

          <p>In index.ts, add the following style tag to the end of the components html:</p>

          <code-sample type="html">
            <template preserve-content>
              ${"\n<style>\n  :host button {\n    height: 30px;\n  }\n</style>\n              "}
            </template>
          </code-sample>
        </li>

        <li>
          <p><strong>Make it responsive</strong></p>

          <p>In index.ts, add the new background-color attribute to the styles:</p>

          <code-sample type="html">
            <template preserve-content>
              ${'\n<style>\n  :host button {\n    height: 30px;\n    background-color: ${count > 1 ? "pink" : "initial"};\n  }\n</style>\n              '}
            </template>
          </code-sample>
        </li>
      </ol>

      <p>Here’s the completed code for this step:</p>

      <p><em>index.ts</em></p>

      <code-sample type="js">
        <template preserve-content>
          ${'\nimport { ComponentHooks, html, register } from "@gh-components/core";\n\ninterface MyElementProps {\n  person?: string;\n}\n\nfunction MyElement(\n  { person = "world" }: MyElementProps,\n  { useState, useCallback }: ComponentHooks\n) {\n  const [count, setCount] = useState(0);\n\n  const incrementCallback = useCallback(() => {\n    setCount(count + 1);\n  }, [count]);\n\n  // TODO: Add responsive styles\n  return html`\n    <button @click=${incrementCallback}>Hello ${person} ${count}! From my-element</button>\n\n    <style>\n      :host button {\n        height: 30px;\n        background-color: ${count > 1 ? "pink" : "initial"};\n      }\n    </style>\n  `;\n}\n\nregister("my-element", MyElement, {\n  person: {\n    type: String\n  }\n});\n          '}
        </template>
      </code-sample>

      <p>Your code sample should be working now.</p>
    </gh-try-page>
  `})},48:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0);n(5),n(3),n(12),n(2),n(13),n(49),n(8),n(9),n(50),o.register("my-counter",function(e,{useState:t}){const[n,r]=t(0);return o.html`
    <button @click=${()=>r(n+1)}>Count: ${n}</button>
  `}),o.register("my-counter-usecallback",function(e,{useCallback:t,useState:n}){const[r,s]=n(0),l=t(()=>s(r+1),[r]);return o.html`
    <button @click=${l}>Count: ${r}</button>
  `}),o.register("my-autocounter",function(e,{useEffect:t,useState:n}){const[r,s]=n(0);return t(()=>{let e=0;const t=setInterval(()=>{s(++e)},1e3);return()=>clearInterval(t)},[]),o.html`
    <p>Count: ${r}</p>
  `}),o.register("my-expensive-compute",function(e,{useMemo:t}){const n=t(()=>Array(8).join(NaN)+" Batman!",[]);return o.html`
    <p>${n}</p>
  `}),o.register("gh-core",function(){return o.html`
    <gh-hero theme="light">
      <gh-hero-h1>GrowHub Components Core</gh-hero-h1>
      <gh-hero-h2>A tiny wrapper around the Web Components standard allowing for dead simple component development</gh-hero-h2>
    </gh-hero>
    
    <gh-contentpage>
      <gh-h1>Why GrowHub Components?</gh-h1>
    
      <gh-row breakpoint="portrait">
        <gh-col>
          <gh-h2>Efficient</gh-h2>
          <p>
            GrowHub Components utilizes <a href="https://lit-html.polymer-project.org/">lit-html</a> for efficiently
            creating and updating the DOM.
          </p>
          <p>
            Never have to worry about bloat with GrowHub Components weighing in at a very tiny size:
            <object type="image/svg+xml" data="https://badgen.net/bundlephobia/min/gh-components-core" class="badge">
              15.6 kB
            </object>
            <object type="image/svg+xml" data="https://badgen.net/bundlephobia/minzip/gh-components-core" class="badge">
              5.2 kB
            </object>
          </p>
        </gh-col>
    
        <gh-col>
          <gh-h2>Seamlessly interoperable</gh-h2>
    
          <p>GitHub Components follows the Web Components standards, so your components will work with any framework.</p>
    
          <p>
            GitHub Components uses Custom Elements for easy inclusion in web pages, and Shadow DOM for encapsulation.
            There’s no new abstraction on top of the web platform.
          </p>
        </gh-col>
    
        <gh-col>
          <gh-h2>Delightfully declarative</gh-h2>
    
          <p>Developing functional components just makes sense. No inheritence or "this" to deal with.</p>
    
          <p>
            Express your UI declaratively, as a function of state. No need to learn a custom templating language
            – you can use the full power of JavaScript in your templates. Components can update automatically when their
            properties change.
          </p>
        </gh-col>
      </gh-row>
    </gh-contentpage>

    <gh-contentpage>
      <gh-h1>Hooks You Say?</gh-h1>

      <p>We provide four hooks to get you going that should cover most of your needs.</p>
    
      <gh-h2>useState</gh-h2>

      <p>
        React has recently shown us how efficient doing local state in function components can be, we decided that a similar
        apporach would be awesome in the world of web components.
      </p>

      <gh-h3>Counter example</gh-h3>

      <p>Component definition:</p>
      <code-sample type="js">
        <template preserve-content>
          ${"\nfunction Counter(_, { useState }) {\n  // Create a new state with an initial value of 0\n  const [count, setCount] = useState(0);\n\n  // Create an event to increment the count\n  const increment = () => setCount(count + 1);\n\n  return html`\n    <button @click=${increment}>Count: ${count}</button>\n  `;\n}\n          "}
        </template>
      </code-sample>

      <p>Output:</p>
      <my-counter></my-counter>

      <gh-h2>useCallback</gh-h2>

      <p>
        The above counter is nice and all, but if we want to prevent unnessesary DOM updates due to
        the increment event handler becoming a new instance every render, we can utilize useCallback
        wich only creates a new instance of the callback if the dependencies have changed.
      </p>

      <gh-h3>Counter example</gh-h3>

      <p>Component definition:</p>
      <code-sample type="js">
        <template preserve-content>
          ${"\nfunction CounterUseCallback(_, { useCallback, useState }) {\n  // Create a new state with an initial value of 0\n  const [count, setCount] = useState(0);\n\n  // Create an event to increment the count\n  const increment = useCallback(() => setCount(count + 1), [count]);\n\n  return html`\n    <button @click=${increment}>Count: ${count}</button>\n  `;\n}\n          "}
        </template>
      </code-sample>

      <p>Output:</p>
      <my-counter-usecallback></my-counter-usecallback>

      <gh-h2>useMemo</gh-h2>

      <p>
        Sometimes you have to do expensive computes in your components and would like to memorize a value.
        That is exactly what useMemo is here to help you with.
      </p>

      <gh-h3>Expensive compute</gh-h3>

      <p>Component definition:</p>
      <code-sample type="js">
        <template preserve-content>
          ${'\nfunction ExpensiveCompute(_, { useMemo }) {\n  // A memo that runs once and subsequently returns the same value\n  const computed = useMemo(() => {\n    return Array(16).join("wat" - 1) + " Batman!";\n  }, []);\n\n  return html`\n    <p>${computed}</p>\n  `;\n}\n          '}
        </template>
      </code-sample>

      <p>Output:</p>
      <my-expensive-compute></my-expensive-compute>

      <gh-h2>useEffect</gh-h2>

      <p>
        Effects run after render, and if a function is returned from the effect, it is ran before the next invocation
        of the effect, and on element disconnect from the dom. Effects are also only executed on render initial render,
        or when a parameter in the provided dependencies array changes.
      </p>

      <gh-h3>Auto counter example</gh-h3>

      <p>Component definition:</p>
      <code-sample type="js">
        <template preserve-content>
          ${"\nfunction AutoCounter(_, { useEffect, useState }) {\n  const [count, setCount] = useState(0);\n\n  // An effect that only runs once because it has no deps\n  useEffect(() => {\n    let localCount = 0;\n    const interval = setInterval(() => {\n      setCount(++localCount);\n    }, 1000);\n\n    // Clear the interval when the component is destroyed\n    return () => clearInterval(interval);\n  }, []);\n\n  return html`\n    <p>Count: ${count}</p>\n  `;\n}\n          "}
        </template>
      </code-sample>

      <p>Output:</p>
      <my-autocounter></my-autocounter>

      <gh-h3>Data loading example</gh-h3>

      <p>Component definition:</p>
      <code-sample type="js">
        <template preserve-content>
          ${'\nfunction DataViewer({ url }, { useState, useEffect }) {\n  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(!!url);\n\n  useEffect(() => {\n    let canceled = false;\n\n    if (url) {\n      setLoading(true);\n\n      fetch(url)\n        .then(r => r.json())\n        .then(json => {\n          // Only set the data if the url is the same\n          if (!canceled) setData(JSON.stringify(json, null, 2));\n        })\n        .catch((err) => {\n          if (!canceled) setData(err.toString())\n        })\n        .then(() => {\n          if (!canceled) setLoading(false)\n        });\n    }\n\n    // A new url was provided\n    return () => canceled = true;\n  }, [url]); // Re-run the effect when the URL changes\n\n  if (loading) return html`\n    <p>Loading...</p>\n  `;\n\n  return html`\n    <pre><code>${data}</code></pre>\n  `;\n}\n\nregister("custom-dataviewer", DataViewer, ["url"]);\n          '}
        </template>
      </code-sample>

      <p>Component usage:</p>
      <code-sample type="html">
        <template preserve-content>
          ${'\n<custom-dataviewer url="https://jsonplaceholder.typicode.com/todos/1"></custom-dataviewer>\n          '}
        </template>
      </code-sample>

      <p>Output:</p>
      <custom-dataviewer url="https://jsonplaceholder.typicode.com/todos/1"></custom-dataviewer>
    </gh-contentpage>

    <style>
      :host .badge {
        vertical-align: bottom;
      }
    </style>
  `})},50:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0);o.register("custom-dataviewer",function({url:e},{useState:t,useEffect:n}){const[r,s]=t(null),[l,a]=t(!!e);return n(()=>{let t=!1;return e&&(a(!0),fetch(e).then(e=>e.json()).then(e=>{t||s(JSON.stringify(e,null,2))}).catch(e=>{t||s(e.toString())}).then(()=>{t||a(!1)})),()=>t=!0},[e]),l?o.html`
    <p>Loading...</p>
  `:o.html`
    <pre><code>${r}</code></pre>
  `},{url:{type:String}})},51:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0);n(3),n(2),o.register("gh-components",function(){return o.html`
    <gh-contentpage>
      <gh-h1>Coming Soon!</gh-h1>
    </gh-contentpage>
  `})},7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0);n(3),n(2),n(14),n(15),n(8),n(9),n(16);const r=n(1);o.register("gh-try-page",function({route:e,header:t}){const{palette:n}=r.getTheme();return o.html`
    <gh-contentpage>
      <gh-row breakpoint="portrait">
        <gh-col>
          <gh-listmenu breakpoint="portrait">
            <gh-listmenu-item href="#try" selected=${"try"===e}>Try GrowHub Components</gh-listmenu-item>
            <gh-listmenu-item href="#try/create" selected=${"try/create"===e}>1. Create</gh-listmenu-item>
            <gh-listmenu-item href="#try/properties" selected=${"try/properties"===e}>2. Properties</gh-listmenu-item>
            <gh-listmenu-item href="#try/state-events" selected=${"try/state-events"===e}>3. State and Events</gh-listmenu-item>
            <gh-listmenu-item href="#try/styles" selected=${"try/styles"===e}>4. Style</gh-listmenu-item>
          </gh-listmenu>
        </gh-col>
        <gh-col class="auto-grow">
          <gh-h1>${t}</gh-h1>

          <gh-warningcard>
            <p>
              This documentation is a work in progress. It describes prerelease software, and is subject to change.
            </p>
          </gh-warningcard>

          <slot></slot>
        </gh-col>
      </gh-row>
    </gh-contentpage>

    <style>
      :host .auto-grow {
        flex: auto;
      }

      :host .warning-container {
        display: flex;
      }

      :host .warning {
        color: ${n.primary};
        margin-right: 1em;
      }
    </style>
  `},{route:{type:String},header:{type:String}})}});
//# sourceMappingURL=main.bd2b659e76c33a6486da.js.map