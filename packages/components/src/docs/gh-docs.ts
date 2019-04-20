import { ComponentHooks, html, register, Json, nothing } from "@gh-components/core";

import "../gh-h1";
import "../gh-h2";
import "../layout/gh-col";
import "../layout/gh-row";

export interface GhDocsProps {
  docs: any[];
  element: string;
}

export function GhDocs({ docs, element }: GhDocsProps, { useMemo }: ComponentHooks) {
  const doc = useMemo(() => docs.find(e => e.elementName === element), [docs, element]);
  console.log(doc);

  if (!doc) {
    return html`
      <gh-h1>Element ${element} not found</gh-h1>
    `;
  }

  return html`
    <gh-h1>${doc.functionName} <span class="no-wrap"><${doc.elementName}></span></gh-h1>

    <p>${doc.doc}</p>


    ${doc.properties.length === 0 ? nothing : html`
      <gh-h2>${doc.interfaceName}</gh-h2>
      
      ${doc.properties.map(prop => html`      
        <gh-row breakpoint="portrait">
          <gh-col><strong>${prop.name}</strong>: ${prop.type}</gh-col>
          <gh-col class="doc-col">${prop.doc}</gh-col>
        </gh-row>
        <br />
      `)}
    `}

    <style>
      :host .doc-col {
        flex: none;
        width: 50%;
      }

      :host .no-wrap {
        white-space: nowrap;
      }
    </style>
  `;
}

register("gh-docs", GhDocs, {
  docs: {
    type: Json
  },
  element: {
    type: String
  }
});
