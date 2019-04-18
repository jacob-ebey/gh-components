import { html, register } from "@gh-components/core";

import "@gh-components/components/dist/gh-button";
import "@gh-components/components/dist/gh-listmenu";
import "@gh-components/components/dist/gh-stackblitz";
import "@gh-components/components/dist/gh-warningcard";

import "./gh-try-page";

function Try() {
  return html`
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
  `;
}

register("gh-try", Try);
