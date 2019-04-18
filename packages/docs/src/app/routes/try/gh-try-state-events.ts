import { html, register } from "gh-components-core";
import "@kuscamara/code-sample";

import "../../components/gh-button";
import "../../components/gh-h1";
import "../../components/gh-stackblitz";
import "./gh-try-page";

function TryStateEvents() {
  return html`
    <gh-try-page header="Use state and events" route="try/state-events">
      <p>
        In this step, you’ll use lit-html’s @event annotation to add an event listener to an element inside your template.
        You’ll also add a callback function with the hook useCallback.
      </p>

      <p><strong>Starting code</strong></p>

      <code-sample type="js">
        <template preserve-content>
          ${`
// TODO: Import ComponentHooks interface
import { html, register } from "gh-components-core";

interface MyElementProps {
  person?: string;
}

// TODO: Get the useState and useCallback hooks
function MyElement({ person = "world" }: MyElementProps) {
  // TODO: Create a local state

  // TODO: Create a local callback

  // TODO: Use the callback
  return html\`
    <button>Hello \${person} \${count}! From my-element</button>
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

      <gh-stackblitz src="https://stackblitz.com/edit/gh-components-core-state-events?file=index.ts&embed=1&view=editor"></gh-stackblitz>

      <ol>
        <li>
          <p><strong>Import ComponentHooks interface</strong></p>

          <p>In index.ts, replace the existing import with the following code:</p>

          <code-sample type="js">
            <template preserve-content>
              ${`
import { ComponentHooks, html, register } from "gh-components-core";
              `}
            </template>
          </code-sample>
        </li>

        <li>
          <p><strong>Get the useState and useCallback hooks</strong></p>

          <p>In index.ts, replace the existing functional component definition with the following code:</p>

          <code-sample type="js">
            <template preserve-content>
              ${`
function MyElement({ person = "world" }: MyElementProps, { useState, useCallback }: ComponentHooks) {
              `}
            </template>
          </code-sample>
        </li>

        <li>
          <p><strong>Create a local state</strong></p>

          <p>In index.ts, add a state to the component:</p>

          <code-sample type="js">
            <template preserve-content>
              ${`
const [count, setCount] = useState(0);
              `}
            </template>
          </code-sample>
        </li>

        <li>
          <p><strong>Create a local callback</strong></p>

          <p>In index.ts, add a new callback to the component:</p>

          <code-sample type="js">
            <template preserve-content>
              ${`
const incrementCallback = useCallback(() => {
  setCount(count + 1);
}, [count]); // Only create a new callback when count changes
              `}
            </template>
          </code-sample>
        </li>

        <li>
          <p><strong>Use the callback</strong></p>

          <p>In index.ts, replace the html with the following code:</p>

          <code-sample type="js">
            <template preserve-content>
              ${`
return html\`
  <button @click=\${incrementCallback}>Hello \${person} \${count}! From my-element</button>
\`;
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
  }, [count]); // Only create a new callback when count changes

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

      <p>Your code sample should be working now.</p>

      <gh-button big="true" href="#try/styles">Next: 4. Use styles</gh-button>
    </gh-try-page>
  `;
}

register("gh-try-state-events", TryStateEvents);
