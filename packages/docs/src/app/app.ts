import Navigo from "navigo";

import { ComponentHooks, html, register, nothing } from "gh-components-core";

import "./components/gh-appbar";
import "./components/gh-contentpage";
import { getTheme } from "./components/theme";
import "./components/icons/gh-icon-github";

const router = new Navigo(undefined, true, "#");

function App(_, { useEffect, useMemo, useState }: ComponentHooks) {
  const { palette } = getTheme();

  const [reload, setReload] = useState(0);
  const [route, setRoute] = useState(null);

  useEffect(() => {
    router
      .on("/", () => {
        import("./routes/gh-home");
        setRoute("home");
      })
      .on("try", () => {
        import("./routes/try/gh-try");
        setRoute("try");
      })
      .on("try/create", () => {
        import("./routes/try/gh-try-create");
        setRoute("try/create");
      })
      .on("try/properties", () => {
        import("./routes/try/gh-try-properties");
        setRoute("try/properties");
      })
      .on("try/state-events", () => {
        import("./routes/try/gh-try-state-events");
        setRoute("try/state-events");
      })
      .on("try/styles", () => {
        import("./routes/try/gh-try-styles");
        setRoute("try/styles");
      })
      .on("core", () => {
        import("./routes/gh-core");
        setRoute("core");
      })
      .on("components", () => {
        import("./routes/components/gh-components");
        setRoute("components");
      });

    router.notFound(() => setRoute("not-found"));

    router.resolve();
  }, [reload]);

  useEffect(() => {
    const event = () => {
      setReload(reload + 1);
    };

    window.addEventListener("beforeunload", event);
    window.addEventListener("hashchange", event);

    return () => {
      window.removeEventListener("beforeunload", event);
      window.removeEventListener("hashchange", event);
    };
  }, [reload]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  let content = useMemo(() => {
    switch (route) {
      case "home": return html`<gh-home></gh-home>`;
      case "try": return html`<gh-try></gh-try>`;
      case "try/create": return html`<gh-try-create></gh-try-create>`;
      case "try/properties": return html`<gh-try-properties></gh-try-properties>`;
      case "try/state-events": return html`<gh-try-state-events></gh-try-state-events>`;
      case "try/styles": return html`<gh-try-styles></gh-try-styles>`;
      case "core": return html`<gh-core></gh-core>`;
      case "components": return html`<gh-components></gh-components>`;
      default: return nothing;
    }
  }, [route]);

  return html`
    <gh-appbar
      label="@gh-components"
      label-href="#"
      has-items="true"
      theme="${route === "home" ? "primary" : "dark"}"
    >
      <gh-appbar-item href="#try">Try</gh-appbar-item>
      <gh-appbar-item href="#core">Core</gh-appbar-item>
      <gh-appbar-item href="#components">Components</gh-appbar-item>
      <gh-appbar-item href="https://github.com/jacob-ebey/gh-components"><gh-icon-github></gh-icon-github></gh-appbar-item>
    </gh-appbar>
    <main>
      <div class="content">
        ${content}
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
        background-color: ${palette.light};
        color: #999999;
        font-size: 0.9em;
      }
    </style>
  `;
}

register("gh-docs", App);
