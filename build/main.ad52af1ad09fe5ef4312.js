!function(e){function t(t){for(var o,l,i=t[0],a=t[1],c=t[2],h=0,u=[];h<i.length;h++)l=i[h],r[l]&&u.push(r[l][0]),r[l]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);for(p&&p(t);u.length;)u.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,i=1;i<n.length;i++){var a=n[i];0!==r[a]&&(o=!1)}o&&(s.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},r={0:0},s=[];function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var p=a;s.push([18,1]),n()}([,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let o={breakpoints:{phoneMaxWidth:"599px",tabletPortraitMinWidth:"600px",tabletPortraitAndBelowMaxWidth:"899px",tabletLandscapeMinWidth:"900px",desktopMinWidth:"1200px",bigDesktopMinWidth:"1800px"},palette:{black:"#000000",dark:"#2D2547",light:"#F2F2F2",primary:"#3C6E71",primaryHover:"#376568",warning:"#FFE14F",white:"#FFFFFF",error:"#993D3D"}};t.getTheme=function(){return o},t.updateTheme=function(e){o=Object.assign({},o,e,{breakpoints:Object.assign({},o.breakpoints,e.breakpoints),palette:Object.assign({},o.palette,e.palette)})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),r=n(1);o.register("gh-h1",function(){const{palette:e}=r.getTheme();return o.html`
    <h1><slot></slot></h1>

    <style>
      :host h1 {
      position: relative;
      color: ${e.primary};
      font-size: 36px;
      font-weight: 500;
    }

    :host h1::after {
      content: "";
      display: block;
      margin-top: 8px;
      bottom: 0;
      left: 0;
      width: 32px;
      height: 1px;
      background-color: ${e.black};
    }
    </style>
  `})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),r=n(1);o.register("gh-contentpage",function(){const{breakpoints:e}=r.getTheme();return o.html`
    <slot></slot>

    <style>
      :host {
        display: block;
        max-width: ${e.desktopMinWidth};
        margin: 0 auto;
        padding: 30px 60px;
      }

      @media (max-width: ${e.tabletPortraitAndBelowMaxWidth}) {
        :host {
          padding: 30px;
        }
      }
    </style>
  `})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),r=n(1);o.register("gh-button",function({outline:e,theme:t,big:n,padding:s,href:l},{useMemo:i}){const{palette:a}=r.getTheme(),c=i(()=>{switch(t){case"dark":return e?{fontHoverColor:"inherit"}:{bgColor:a.dark,fontColor:a.white};case"light":return e?{}:{bgColor:a.light,fontColor:a.primary};case"primary":return e?{bgColor:"transparent",bgHoverColor:"rgba(0, 0, 0, 0.05)",borderColor:a.primary}:{bgColor:a.primary,bgHoverColor:a.primaryHover,fontColor:a.white};default:return{bgColor:"transparent",bgHoverColor:"rgba(0, 0, 0, 0.05)",fontColor:a.primary}}},[e,t,a]),p=i(()=>c.bgHoverColor||c.fontHoverColor,[c.bgHoverColor,c.fontHoverColor]);return o.html`
    ${l?o.html`
      <a href="${l}"><slot></slot></a>
    `:o.html`
      <div><slot></slot></div>
    `}

    <style>
      :host, :host div, :host a {
        position: relative;
        color: ${c.fontColor||"inherit"};
        cursor: pointer;
      }

      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        ${c.borderColor?"border-style: solid;":""}

        ${c.bgColor?`background-color: ${c.bgColor};`:""}
        ${c.borderColor?`border-color: ${c.borderColor};border-width: 3px;`:""}
      }

      :host div, :host a {
        flex: 1;
        padding: ${s||(n?"1em":"0.75em")};
        user-select: none;
        border-radius: 3px;
      }

      :host a {
        font-size: inherit;
        color: inherit;
        text-decoration: none;
      }

      ${p?`:host div:hover, :host div:active, :host a:hover, :host a:active {\n        ${c.bgHoverColor?`background-color: ${c.bgHoverColor};`:""}\n        ${c.fontHoverColor?`color: ${c.fontHoverColor};`:""}\n      }`:""}
    </style>
  `},{big:{type:Boolean},href:{type:String},outline:{type:Boolean},padding:{type:String},theme:{type:String}})},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0);n(4),n(42);const r=n(1);o.register("gh-stackblitz",function({src:e},{useCallback:t,useState:n}){const{palette:s}=r.getTheme(),[l,i]=n(!1),[a,c]=n(!1),p=t(()=>i(!0),[]),h=t(()=>c(!a),[a]);return o.html`
    ${l?o.html`
      <iframe src="${e}"></iframe>
      <gh-button class="fullscreen-button" padding="5px 0.5em" @click=${h}>
        ${a?"Exit Fullscreen":"Fullscreen"}
      </gh-button>
    `:o.html`
      <gh-button big="true" theme="primary" outline="true" @click=${p}>
        Launch Code Editor &nbsp;<gh-icon-cogs size="1.25em"></gh-icon-cogs>
      </gh-button>
    `}

    <style>
      :host {
        position: relative;
        display: block;
        background-color: ${s.white};
      }

      :host iframe {
        min-width: 100%;
        min-height: 80vh;
      }

      :host .fullscreen-button {
        background-color: #F0F0F0;
        font-size: 0.75em;
        position: absolute;
        height: 25px;
        right: 5px;
        top: 9px;
        padding: 0;
      }

      .fullscreen-button:hover, .fullscreen-button:active {
        background-color: #DDDDDD;
      }

      ${a?"\n        :host {\n          z-index: 100;\n          position: fixed;\n          top: 5px;\n          left: 5px;\n          right: 10px;\n          bottom: 5px;\n        }\n        :host iframe {\n          min-width: 100%;\n          min-height: 100%;\n        }\n      ":""}
    </style>
  `},{src:{type:String}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0);n(3),n(2),n(14),n(15),n(8),n(9),n(16);const r=n(1);o.register("gh-try-page",function({route:e,header:t}){const{palette:n}=r.getTheme();return o.html`
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
  `},{route:{type:String},header:{type:String}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0);o.register("gh-col",function(){return o.html`
    <slot></slot>

    <style>
      :host {
        flex: 1;
        padding: 0 1em;
      }
    </style>
  `})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),r=n(1);o.register("gh-row",function({breakpoint:e}){const{breakpoints:t}=r.getTheme();return o.html`
    <slot></slot>

    <style>
      :host {
        position: relative;
        display: flex;
        flex-direction: row;
      }

      ${"portrait"===e?`\n        @media (max-width: ${t.tabletPortraitAndBelowMaxWidth}) {\n          :host {\n            flex-direction: column;\n          }\n        }\n      `:""}
    </style>
  `},{breakpoint:{type:String}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),r=n(1);n(28),o.register("gh-appbar-items",function({theme:e},{useMemo:t,useState:n}){const{breakpoints:s,palette:l}=r.getTheme(),[i,a]=n(!1),c=t(()=>{switch(e){case"dark":return{bgColor:l.dark,fontColor:l.white};case"light":return{bgColor:l.light,fontColor:l.black};case"primary":default:return{bgColor:l.primary,fontColor:l.white}}},[e]);return o.html`
    <div class="items ${i?"items--open":""}">
      <slot></slot>
    </div>
    
    <div class="button" @click=${()=>a(!i)}>
      <gh-icon-bars></gh-icon-bars>
    </div>

    <style>
      :host {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex: 1;
        height: 100%;
      }

      ${i?".items {\n        z-index: 100;\n      }":""}

      @media (max-width: ${s.tabletPortraitAndBelowMaxWidth}) {
        .button {
          content: "";
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          user-select: none;
          cursor: pointer;
        }

        .button:active, .button:hover {
          background-color: rgba(0, 0, 0, 0.25);
        }

        .items {
          display: none;
          position: absolute;
          top: 100%;
          right: 0;
          background-color: ${c.bgColor};
          color: ${c.fontColor};
          width: 100%;
          max-width: ${s.phoneMaxWidth};
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }

        .items--open {
          display: block;
        }
      }

      @media (min-width: ${s.tabletLandscapeMinWidth}) {
        .button {
          display: none;
        }

        .items {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          flex: 1;
          height: 100%;
        }
      }
    </style>
  `},{theme:{type:String}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0);o.register("gh-appbar-title",function(){return o.html`
    <slot></slot>

    <style>
      :host {
        display: block;
        margin: 0 1em;
        font-size: 1.5em;
        white-space: nowrap; 
        overflow: hidden;
        text-overflow: ellipsis;
      }
    </style>
  `})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(33),n(34),n(35)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),r=n(1);o.register("gh-h2",function(){const{palette:e}=r.getTheme();return o.html`
    <h2><slot></slot></h2>

    <style>
      :host h2 {
        color: ${e.primary};
        font-size: 28px;
        font-weight: 500;
      }
    </style>
  `})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(37),n(41)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),r=n(1);n(16),o.register("gh-warningcard",function(){const{palette:e}=r.getTheme();return o.html`
    <gh-card class="warning-container">
      <gh-icon-alert class="warning"></gh-icon-alert>
      <div>
        <slot></slot>
      </div>
    </gh-card>

    <style>
      :host .warning-container {
        display: flex;
      }

      :host .warning {
        color: ${e.primary};
        margin-right: 1em;
      }
    </style>
  `})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0);o.register("gh-icon-alert",function({size:e="1.75em"}){return o.html`
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-exclamation-circle fa-w-16 fa-3x"><path fill="currentColor" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" class=""></path></svg>

    <style>
      :host {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        user-select: none;
      }

      :host svg {
        width: ${e};
      }
    </style>
  `})},,function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const s=o(n(19)),l=n(0);n(26),n(3);const i=n(1);n(30);const a=new s.default(void 0,!0,"#");l.register("gh-docs",function(e,{useEffect:t,useMemo:o,useState:s}){const{palette:c}=i.getTheme(),[p,h]=s(0),[u,m]=s(null);t(()=>{a.on("/",()=>{Promise.resolve().then(()=>r(n(31))),m("home")}).on("try",()=>{Promise.resolve().then(()=>r(n(36))),m("try")}).on("try/create",()=>{Promise.resolve().then(()=>r(n(43))),m("try/create")}).on("try/properties",()=>{Promise.resolve().then(()=>r(n(44))),m("try/properties")}).on("try/state-events",()=>{Promise.resolve().then(()=>r(n(45))),m("try/state-events")}).on("try/styles",()=>{Promise.resolve().then(()=>r(n(46))),m("try/styles")}).on("core",()=>{Promise.resolve().then(()=>r(n(47))),m("core")}).on("components",()=>{Promise.resolve().then(()=>r(n(50))),m("components")}),a.notFound(()=>m("not-found")),a.resolve()},[p]),t(()=>{const e=()=>{h(p+1)};return window.addEventListener("beforeunload",e),window.addEventListener("hashchange",e),()=>{window.removeEventListener("beforeunload",e),window.removeEventListener("hashchange",e)}},[p]),t(()=>{window.scrollTo(0,0)},[u]);let g=o(()=>{switch(u){case"home":return l.html`<gh-home></gh-home>`;case"try":return l.html`<gh-try></gh-try>`;case"try/create":return l.html`<gh-try-create></gh-try-create>`;case"try/properties":return l.html`<gh-try-properties></gh-try-properties>`;case"try/state-events":return l.html`<gh-try-state-events></gh-try-state-events>`;case"try/styles":return l.html`<gh-try-styles></gh-try-styles>`;case"core":return l.html`<gh-core></gh-core>`;case"components":return l.html`<gh-components></gh-components>`;default:return l.nothing}},[u]);return l.html`
    <gh-appbar
      label="@gh-components"
      label-href="#"
      has-items="true"
      theme="${"home"===u?"primary":"dark"}"
    >
      <gh-appbar-item href="#try">Try</gh-appbar-item>
      <gh-appbar-item href="#core">Core</gh-appbar-item>
      <gh-appbar-item href="#components">Components</gh-appbar-item>
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
        background-color: ${c.light};
        color: #999999;
        font-size: 0.9em;
      }
    </style>
  `})},,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(27),n(10),n(11),n(29)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),r=n(1);o.register("gh-appbar-item",function({href:e}){const{breakpoints:t}=r.getTheme();return o.html`
    ${e?o.html`
      <a href=${e}><slot></slot></a>
    `:o.html`
      <div><slot></slot></div>
    `}

    <style>
      :host {
        position: relative;
        display: flex;
        align-items: center;
        height: 100%;
      }

      :host div, :host a {
        position: relative;
        display: flex;
        align-items: center;
        height: 100%;
        margin: 0;
        padding: 0;
      }

      :host div, :host a {
        padding: 0 1em;
        color: inherit;
        text-decoration: none;
      }

      :host a:active, :host a:hover {
        background-color: rgba(0,0,0,0.2);
      }

      @media (max-width: ${t.tabletPortraitAndBelowMaxWidth}) {
        :host div, :host a {
          flex: 1;
          height: 40px;
          justify-content: flex-end;
        }
      }
    </style>
  `},{href:{type:String}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0);o.register("gh-icon-bars",function({size:e="1.75em"}){return o.html`
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-bars fa-w-14 fa-2x"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" class=""></path></svg>

    <style>
      :host {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        user-select: none;
      }

      :host svg {
        width: ${e};
      }
    </style>
  `})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),r=n(1);n(10),n(11),o.register("gh-appbar",function({label:e="",labelHref:t,hasItems:n,theme:s="dark"},{useMemo:l}){const{palette:i}=r.getTheme(),a=l(()=>{switch(s){case"dark":return{bgColor:i.dark,fontColor:i.white};case"light":return{bgColor:i.light,fontColor:i.primary};case"primary":default:return{bgColor:i.primary,fontColor:i.white}}},[s,i]);return o.html`
    <slot name="label">
      ${t?o.html`
        <gh-appbar-title><a href=${t}>${e}</a></gh-appbar-title>
      `:o.html`
        <gh-appbar-title>${e}</gh-appbar-title>
      `}
    </slot>

    ${n&&o.html`
      <gh-appbar-items theme=${s}>
        <slot></slot>
      </gh-appbar-items>
    `}

    <style>
      :host {
        position: relative;
        display: flex;
        align-items: center;

        background-color: ${a.bgColor};
        color: ${a.fontColor};
        height: 64px;
        min-height: 64px;
        max-height: 64px;
      }

      :host a {
        color: ${a.fontColor};
        text-decoration: none;
      }
    </style>
  `},{hasItems:{type:Boolean},label:{type:String},labelHref:{type:String},theme:{type:String}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0);o.register("gh-icon-github",function({size:e="1.75em"}){return o.html`
    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="svg-inline--fa fa-github fa-w-16 fa-3x"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" class=""></path></svg>

    <style>
      :host {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        user-select: none;
      }

      :host svg {
        width: ${e};
      }
    </style>
  `})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0);n(5),n(3),n(12),n(2),n(13),n(8),n(9);const r=n(1);o.register("my-hello",function({name:e}){return o.html`
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
            ${'\nimport { html, register } from "gh-components-core";\n\nfunction Hello({ name }) {\n  return html`\n    Hello, ${name}!\n\n    /* Styles are isolated via the shadow-dom :) */\n    <style>\n      :host {\n        color: pink;\n        font-size: 26px;\n      }\n    </style>\n  `;\n}\n\n// Register the component and declare the properties that can change\nregister("my-hello", Hello, ["name"]);\n            '}
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
  `})},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0);n(3);const r=n(1);o.register("gh-hero",function({theme:e},{useMemo:t}){const{palette:n}=r.getTheme(),s=t(()=>{switch(e){case"dark":return{bgColor:n.dark,fontColor:n.white};case"light":return{bgColor:n.light,fontColor:n.primary};case"primary":default:return{bgColor:n.primary,fontColor:n.white}}},[e,n]);return o.html`
    <gh-contentpage>
      <slot></slot>
    </gh-contentpage>

    <style>
      :host {
        display: block;
        background-color: ${s.bgColor};
        padding-top: 21vh;
        padding-bottom: 24vh;
      }

      :host * {
        color: ${s.fontColor};
      }

      :host h1 {
        font-size: 50px;
        margin: 0 0 0.25em 0;
      }
      
      :host h2 {
        margin: 0;
        font-weight: 500;
      }
    </style>
  `},{theme:{type:String}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0);o.register("gh-hero-h1",function(){return o.html`
    <h1><slot></slot></h1>

    <style>
      :host h1 {
        font-size: 50px;
        margin: 0 0 0.25em 0;
      }

      :host h2 {
        margin: 0;
        font-weight: 500;
      }
    </style>
  `})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0);o.register("gh-hero-h2",function(){return o.html`
    <h2><slot></slot></h2>

    <style>
      :host h2 {
        margin: 0;
        font-weight: 500;
      }
    </style>
  `})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0);n(4),n(14),n(6),n(15),n(7),o.register("gh-try",function(){return o.html`
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
  `})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0);n(38);const r=n(1);n(39),n(40),o.register("gh-listmenu",function({breakpoint:e},{useCallback:t,useState:n}){const{breakpoints:s,palette:l}=r.getTheme(),[i,a]=n(!1),c=t(()=>a(!i),[i]);return o.html`
    <div class="wrapper ${i?"wrapper--open":""}">
      <slot></slot>
    </div>

    <gh-card class="toggle">
      ${i?o.html`<gh-icon-angle-up @click=${c}></gh-icon-angle-up>`:o.html`<gh-icon-angle-down @click=${c}></gh-icon-angle-down>`}
      <span>Menu</span>
    </gh-card>
    <style>
      :host {
        position: relative;
        display: block;
      }

      :host .wrapper {
        position: relative;
        display: block;
        min-width: 240px;
        padding: 32px 0;
      }

      :host .toggle {
        display: none;
        align-items: center;
        border: 1px solid ${l.light};
        padding: 0.5em;
        user-select: none;
      }

      :host .toggle span {
        margin: 0 0 0 1em;
      }

      ${"portrait"===e?`\n        @media (max-width: ${s.tabletPortraitAndBelowMaxWidth}) {\n          :host .wrapper {\n            display: none;\n          }\n\n          :host .wrapper--open {\n            z-index: 101;\n            position: absolute;\n            display: block;\n            top: 100%;\n            left: 0;\n            right: 0;\n            background-color: ${l.white};\n            padding: 1em;\n            border: 1px solid ${l.light};\n            border-top: none;\n            box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.2);\n          }\n\n          :host .toggle {\n            display: flex;\n          }\n        }\n      `:""}
    </style>
  `},{breakpoint:{type:String}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),r=n(1);o.register("gh-card",function(){const{palette:e}=r.getTheme();return o.html`
    <slot></slot>

    <style>
      :host {
        display: block;
        padding: 0.75em;
        border: 1px solid ${e.light};
        border-radius: 3px;
        box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.2);
      }
    </style>
  `})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0);o.register("gh-icon-angle-down",function({size:e="1.75em"}){return o.html`
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-angle-down fa-w-10 fa-3x"><path fill="currentColor" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" class=""></path></svg>

    <style>
      :host {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        user-select: none;
      }

      :host svg {
        width: ${e};
      }
    </style>
  `})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0);o.register("gh-icon-angle-up",function({size:e="1.75em"}){return o.html`
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-angle-up fa-w-10 fa-3x"><path fill="currentColor" d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z" class=""></path></svg>

    <style>
      :host {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        user-select: none;
      }

      :host svg {
        width: ${e};
      }
    </style>
  `})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),r=n(1);o.register("gh-listmenu-item",function({href:e,selected:t}){const{palette:n}=r.getTheme();return o.html`
    ${e?o.html`
      <a href="${e}" class="${t?"selected":""}">
        <slot></slot>
      </a>
    `:o.html`
      <div class="${t?"selected":""}">
        <slot></slot>
      </div>
    `}

    <style>
      :host {
        display: block;
        font-size: 16px;
        margin: 1em 0;
      }

      :host a {
        text-decoration: none;
        color: inherit;
      }

      :host .selected {
        color: ${n.primary};
      }
    </style>
  `},{href:{type:String},selected:{type:Boolean}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0);o.register("gh-icon-cogs",function({size:e="1.75em"}){return o.html`
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cogs" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-cogs fa-w-20 fa-3x"><path fill="currentColor" d="M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8zM386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7zm243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z" class=""></path></svg>

    <style>
      :host {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        user-select: none;
      }

      :host svg {
        width: ${e};
      }
    </style>
  `})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0);n(5),n(4),n(2),n(6),n(7),o.register("gh-try-create",function(){return o.html`
    <gh-try-page header="Create a component" route="try/create">
      <p>In this step, you’ll fill in the gaps in the starting code to create an element class with a basic HTML template.</p>

      <p><strong>Starting code</strong></p>

      <code-sample type="js">
        <template preserve-content>
          ${'\n// TODO: Import html helper function and register\nimport {} from "gh-components-core";\n\n// TODO: Return content from your functional component\nfunction MyElement() {\n}\n\n// TODO: Register the new component with the browser\nregister("my-element", );\n          '}
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
              ${'\nimport { html, register } from "gh-components-core";\n              '}
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
          ${'\nimport { html, register } from "gh-components-core";\n\nfunction MyElement() {\n  return html`\n    <p>Hello world! From my-element</p>\n  `;\n}\n\nregister("my-element", MyElement);\n          '}
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
  `})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0);n(5),n(4),n(2),n(6),n(7),o.register("gh-try-properties",function(){return o.html`
    <gh-try-page header="Use properties" route="try/properties">
      <p>In this step, you’ll declare a property for your component, initialize the property, and use the value in the component’s template.</p>

      <p><strong>Starting code</strong></p>

      <code-sample type="ts">
        <template preserve-content>
          ${'\nimport { html, register } from "gh-components-core";\n\ninterface MyElementProps {\n  // TODO: Define props\n}\n\n// TODO: Initialize props\nfunction MyElement() {\n  // TODO: Use property\n  return html`\n    <p>Hello world! From my-element</p>\n  `;\n}\n\nregister("my-element", MyElement, {\n  // TODO: Register props\n});\n          '}
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
          ${'\nimport { html, register } from "gh-components-core";\n\ninterface MyElementProps {\n  person?: string;\n}\n\nfunction MyElement({ person = "world" }: MyElementProps) {\n  return html`\n    <p>Hello ${person}! From my-element</p>\n  `;\n}\n\nregister("my-element", MyElement, {\n  person: {\n    type: String\n  }\n});\n          '}
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
  `})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0);n(5),n(4),n(2),n(6),n(7),o.register("gh-try-state-events",function(){return o.html`
    <gh-try-page header="Use state and events" route="try/state-events">
      <p>
        In this step, you’ll use lit-html’s @event annotation to add an event listener to an element inside your template.
        You’ll also add a callback function with the hook useCallback.
      </p>

      <p><strong>Starting code</strong></p>

      <code-sample type="js">
        <template preserve-content>
          ${'\n// TODO: Import ComponentHooks interface\nimport { html, register } from "gh-components-core";\n\ninterface MyElementProps {\n  person?: string;\n}\n\n// TODO: Get the useState and useCallback hooks\nfunction MyElement({ person = "world" }: MyElementProps) {\n  // TODO: Create a local state\n\n  // TODO: Create a local callback\n\n  // TODO: Use the callback\n  return html`\n    <button>Hello ${person} ${count}! From my-element</button>\n  `;\n}\n\nregister("my-element", MyElement, {\n  person: {\n    type: String\n  }\n});\n          '}
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
              ${'\nimport { ComponentHooks, html, register } from "gh-components-core";\n              '}
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
          ${'\nimport { ComponentHooks, html, register } from "gh-components-core";\n\ninterface MyElementProps {\n  person?: string;\n}\n\nfunction MyElement(\n  { person = "world" }: MyElementProps,\n  { useState, useCallback }: ComponentHooks\n) {\n  const [count, setCount] = useState(0);\n\n  const incrementCallback = useCallback(() => {\n    setCount(count + 1);\n  }, [count]); // Only create a new callback when count changes\n\n  return html`\n    <button @click=${incrementCallback}>Hello ${person} ${count}! From my-element</button>\n  `;\n}\n\nregister("my-element", MyElement, {\n  person: {\n    type: String\n  }\n});\n          '}
        </template>
      </code-sample>

      <p>Your code sample should be working now.</p>

      <gh-button big="true" href="#try/styles">Next: 4. Use styles</gh-button>
    </gh-try-page>
  `})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0);n(5),n(4),n(2),n(6),n(7),o.register("gh-try-styles",function(){return o.html`
    <gh-try-page header="Use styles" route="try/styles">
      <p>In this step, you’ll style your component with CSS by defining a style tag.</p>

      <p><strong>Starting code</strong></p>

      <code-sample type="js">
        <template preserve-content>
          ${'\nimport { ComponentHooks, html, register } from "gh-components-core";\n\ninterface MyElementProps {\n  person?: string;\n}\n\nfunction MyElement(\n  { person = "world" }: MyElementProps,\n  { useState, useCallback }: ComponentHooks\n) {\n  const [count, setCount] = useState(0);\n\n  const incrementCallback = useCallback(() => {\n    setCount(count + 1);\n  }, [count]);\n\n  // TODO: Add responsive styles\n  return html`\n    <button @click=${incrementCallback}>Hello ${person} ${count}! From my-element</button>\n  `;\n}\n\nregister("my-element", MyElement, {\n  person: {\n    type: String\n  }\n});\n          '}
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
          ${'\nimport { ComponentHooks, html, register } from "gh-components-core";\n\ninterface MyElementProps {\n  person?: string;\n}\n\nfunction MyElement(\n  { person = "world" }: MyElementProps,\n  { useState, useCallback }: ComponentHooks\n) {\n  const [count, setCount] = useState(0);\n\n  const incrementCallback = useCallback(() => {\n    setCount(count + 1);\n  }, [count]);\n\n  // TODO: Add responsive styles\n  return html`\n    <button @click=${incrementCallback}>Hello ${person} ${count}! From my-element</button>\n\n    <style>\n      :host button {\n        height: 30px;\n        background-color: ${count > 1 ? "pink" : "initial"};\n      }\n    </style>\n  `;\n}\n\nregister("my-element", MyElement, {\n  person: {\n    type: String\n  }\n});\n          '}
        </template>
      </code-sample>

      <p>Your code sample should be working now.</p>
    </gh-try-page>
  `})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0);n(5),n(48),n(3),n(12),n(2),n(13),n(49),n(8),n(9),o.register("my-counter",function(e,{useState:t}){const[n,r]=t(0);return o.html`
    <button @click=${()=>r(n+1)}>Count: ${n}</button>
  `}),o.register("my-counter-usecallback",function(e,{useCallback:t,useState:n}){const[r,s]=n(0),l=t(()=>s(r+1),[r]);return o.html`
    <button @click=${l}>Count: ${r}</button>
  `}),o.register("my-autocounter",function(e,{useEffect:t,useState:n}){const[r,s]=n(0);return t(()=>{let e=0;const t=setInterval(()=>{s(++e)},1e3);return()=>clearInterval(t)},[]),o.html`
    <p>Count: ${r}</p>
  `}),o.register("my-expensive-compute",function(e,{useMemo:t}){const n=t(()=>Array(8).join(NaN)+" Batman!",[]);return o.html`
    <p>${n}</p>
  `}),o.register("gh-core",function(){return o.html`
    <gh-hero theme="dark">
      <gh-hero-h1>GrowHub Core</gh-hero-h1>
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
            Never have to worry about bloat with lit-html weighing in at a respectable 3.3 kB minified + gzipped and GrowHub Components
            weighing in at a respectable 0.8 kB minified + gzipped for a total of 4.1 kB.
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
  `})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0);o.register("custom-dataviewer",function({url:e},{useState:t,useEffect:n}){const[r,s]=t(null),[l,i]=t(!!e);return n(()=>{let t=!1;return e&&(i(!0),fetch(e).then(e=>e.json()).then(e=>{t||s(JSON.stringify(e,null,2))}).catch(e=>{t||s(e.toString())}).then(()=>{t||i(!1)})),()=>t=!0},[e]),l?o.html`
    <p>Loading...</p>
  `:o.html`
    <pre><code>${r}</code></pre>
  `},{url:{type:String}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),r=n(1);o.register("gh-h3",function(){const{palette:e}=r.getTheme();return o.html`
    <h3><slot></slot></h3>

    <style>
      :host h3 {
        color: ${e.primary};
        font-size: 24px;
        font-weight: 500;
      }
    </style>
  `})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0);n(3),n(2),o.register("gh-components",function(){return o.html`
    <gh-contentpage>
      <gh-h1>Coming Soon!</gh-h1>
    </gh-contentpage>
  `})}]);
//# sourceMappingURL=main.ad52af1ad09fe5ef4312.js.map