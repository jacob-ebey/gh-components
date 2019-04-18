import { html, register } from "gh-components-core";
import "@kuscamara/code-sample";

import "../components/gh-contentpage";
import "../components/gh-hero";
import "../components/gh-h1";
import "../components/gh-h2";
import "../components/layout/gh-col";
import "../components/layout/gh-row";
import { getTheme } from "../components/theme";

function Hello({ name }) {
  return html`
    Hello, ${name}!

    <style>
      :host {
        color: pink;
        font-size: 26px;
      }
    </style>
  `;
}

register("my-hello", Hello, {
  name: {
    type: String
  }
});

function Home() {
  const { palette } = getTheme();

  return html`
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
            ${`
import { html, register } from "gh-components-core";

function Hello({ name }) {
  return html\`
    Hello, \${name}!

    /* Styles are isolated via the shadow-dom :) */
    <style>
      :host {
        color: pink;
        font-size: 26px;
      }
    </style>
  \`;
}

// Register the component and declare the properties that can change
register("my-hello", Hello, ["name"]);
            `}
          </template>
        </code-sample>

        <p>Component usage:</p>
        <code-sample type="html">
          <template preserve-content>
            ${`
<my-hello name="World"></my-hello>
            `}
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
        color: ${palette.primary};
      }
    </style>
  `;
}

register("gh-home", Home);
