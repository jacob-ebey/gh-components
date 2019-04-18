import { html, register } from "gh-components-core";
import "@kuscamara/code-sample";

import "../../components/gh-button";
import "../../components/gh-h1";
import "../../components/gh-stackblitz";
import "./gh-try-page";

function TryCreate() {
  return html`
    <gh-try-page header="Create a component" route="try/create">
      <p>In this step, you’ll fill in the gaps in the starting code to create an element class with a basic HTML template.</p>

      <p><strong>Starting code</strong></p>

      <code-sample type="js">
        <template preserve-content>
          ${`
// TODO: Import html helper function and register
import {} from "gh-components-core";

// TODO: Return content from your functional component
function MyElement() {
}

// TODO: Register the new component with the browser
register("my-element", );
          `}
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
              ${`
import { html, register } from "gh-components-core";
              `}
            </template>
          </code-sample>
        </li>

        <li>
          <p><strong>Return content from your functional component</strong></p>

          <p>In index.ts, replace the existing functional component with the following code:</p>

          <code-sample type="js">
            <template preserve-content>
              ${`
function MyElement() {
  return html\`
    <p>Hello world! From my-element</p>
  \`;
}
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
import { html, register } from "gh-components-core";

function MyElement() {
  return html\`
    <p>Hello world! From my-element</p>
  \`;
}

register("my-element", MyElement);
          `}
        </template>
      </code-sample>

      <p>Your code sample should be working now. GrowHub Components are added to a page with simple HTML tags, like this:</p>

      <code-sample type="html">
        <template preserve-content>
          ${`
<my-element></my-element>
          `}
        </template>
      </code-sample>

      <br />
      <gh-button big="true" href="#try/properties">Next: 2. Use properties</gh-button>
    </gh-try-page>
  `;
}

register("gh-try-create", TryCreate);
