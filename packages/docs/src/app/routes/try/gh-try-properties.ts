import { html, register } from "gh-components-core";
import "@kuscamara/code-sample";

import "../../components/gh-button";
import "../../components/gh-h1";
import "../../components/gh-stackblitz";
import "./gh-try-page";

function TryProperties() {
  return html`
    <gh-try-page header="Use properties" route="try/properties">
      <p>In this step, you’ll declare a property for your component, initialize the property, and use the value in the component’s template.</p>

      <p><strong>Starting code</strong></p>

      <code-sample type="ts">
        <template preserve-content>
          ${`
import { html, register } from "gh-components-core";

interface MyElementProps {
  // TODO: Define props
}

// TODO: Initialize props
function MyElement() {
  // TODO: Use property
  return html\`
    <p>Hello world! From my-element</p>
  \`;
}

register("my-element", MyElement, {
  // TODO: Register props
});
          `}
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
              ${`
interface MyElementProps {
  person?: string;
}
              `}
            </template>
          </code-sample>
        </li>

        <li>
          <p><strong>Initialize your property value</strong></p>

          <p>In index.ts, replace the existing functional component definition with the following code:</p>

          <code-sample type="js">
            <template preserve-content>
              ${`
function MyElement({ person = "world" }: MyElementProps) {
              `}
            </template>
          </code-sample>
        </li>

        <li>
          <p><strong>Register the property</strong></p>

          <p>In index.ts, replace the existing call to register with the following code:</p>

          <code-sample type="js">
            <template preserve-content>
              ${`
register("my-element", MyElement, {
  person: {
    type: String
  }
});
              `}
            </template>
          </code-sample>
        </li>

        <li>
          <p><strong>Use the property</strong></p>

          <p>In index.ts, replace the existing html with the following code:</p>

          <code-sample type="js">
            <template preserve-content>
              ${`
return html\`
  <p>Hello \${person\}! From my-element</p>
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
import { html, register } from "gh-components-core";

interface MyElementProps {
  person?: string;
}

function MyElement({ person = "world" }: MyElementProps) {
  return html\`
    <p>Hello \${person\}! From my-element</p>
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

      <p>Your code sample should be working now. To pass your component a new value, open up index.html and replace the my-element with the following code:</p>

      <code-sample type="html">
        <template preserve-content>
          ${`
<my-element person="outer space"></my-element>
          `}
        </template>
      </code-sample>

      <br />
      <gh-button big="true" href="#try/state-events">Next: 3. Use state and events</gh-button>
    </gh-try-page>
  `;
}

register("gh-try-properties", TryProperties);
