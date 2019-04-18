import { html, register } from "gh-components-core";
import "@kuscamara/code-sample";

import "../../components/gh-button";
import "../../components/gh-h1";
import "../../components/gh-stackblitz";
import "./gh-try-page";

function TryStyles() {
  return html`
    <gh-try-page header="Use styles" route="try/styles">
      <p>In this step, you’ll style your component with CSS by defining a style tag.</p>

      <p><strong>Starting code</strong></p>

      <code-sample type="js">
        <template preserve-content>
          ${`
import { ComponentHooks, html, register } from "gh-components-core";

interface MyElementProps {
  person?: string;
}

function MyElement(
  { person = "world" }: MyElementProps,
  { useState, useCallback }: ComponentHooks
) {
  const [count, setCount] = useState(0);

  const incrementCallback = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  // TODO: Add responsive styles
  return html\`
    <button @click=\${incrementCallback}>Hello \${person} \${count}! From my-element</button>
  \`;
}

register("my-element", MyElement, {
  person: {
    type: String
  }
});
          `}
        </template>
      </code-sample>

      <p>Click <strong>Launch Code Editor</strong> to edit the starting code. When you’re ready to see your code in action, click <strong>Preview</strong>.</p>

      <gh-stackblitz src="https://stackblitz.com/edit/gh-components-core-styles?file=index.ts&embed=1&hideExplorer=1&hideNavigation=1"></gh-stackblitz>

      <ol>
        <li>
          <p><strong>Add styles</strong></p>

          <p>In index.ts, add the following style tag to the end of the components html:</p>

          <code-sample type="html">
            <template preserve-content>
              ${`
<style>
  :host button {
    height: 30px;
  }
</style>
              `}
            </template>
          </code-sample>
        </li>

        <li>
          <p><strong>Make it responsive</strong></p>

          <p>In index.ts, add the new background-color attribute to the styles:</p>

          <code-sample type="html">
            <template preserve-content>
              ${`
<style>
  :host button {
    height: 30px;
    background-color: \${count > 1 ? "pink" : "initial"};
  }
</style>
              `}
            </template>
          </code-sample>
        </li>

        <li>
          <p><strong>Register the new component with the browser</strong></p>

          <p>In index.ts, replace the existing call to register with the following code:</p>

          <code-sample type="js">
            <template preserve-content>
              ${`
register("my-element", MyElement);
              `}
            </template>
          </code-sample>
        </li>
      </ol>

      <p>Here’s the completed code for this step:</p>

      <p><em>index.ts</em></p>

      <code-sample type="js">
        <template preserve-content>
          ${`
import { ComponentHooks, html, register } from "gh-components-core";

interface MyElementProps {
  person?: string;
}

function MyElement(
  { person = "world" }: MyElementProps,
  { useState, useCallback }: ComponentHooks
) {
  const [count, setCount] = useState(0);

  const incrementCallback = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  // TODO: Add responsive styles
  return html\`
    <button @click=\${incrementCallback}>Hello \${person} \${count}! From my-element</button>

    <style>
      :host button {
        height: 30px;
        background-color: \${count > 1 ? "pink" : "initial"};
      }
    </style>
  \`;
}

register("my-element", MyElement, {
  person: {
    type: String
  }
});
          `}
        </template>
      </code-sample>

      <p>Your code sample should be working now.</p>
    </gh-try-page>
  `;
}

register("gh-try-styles", TryStyles);
