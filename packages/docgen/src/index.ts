import * as fs from "fs";
import * as path from "path";
import * as readts from "readts";
import camelToKebabCase from "camel-to-kebab";

const outDir = path.join(process.cwd(), "dist/docs.json");
const configPath = path.join(process.cwd(), "tsconfig.json");

const parser = new readts.Parser()
// Read configuration used in the project we want to analyze.
const config = parser.parseConfig(configPath);

// Modify configuration as needed, for example to avoid writing compiler output to disk.
config.options.noEmit = true;

// Parse the project.
const tree = parser.parse(config);

const components: {
  function: readts.FunctionSpec,
  interface: readts.ClassSpec
}[] = [];

const mod = tree
  .reduce((p, c) => {
    c.functionList.forEach(f => p.functionList.push(f));
    c.interfaceList.forEach(i => p.interfaceList.push(i));

    return p;
  }, {
      functionList: [] as readts.FunctionSpec[],
      interfaceList: [] as readts.ClassSpec[]
    });

mod.functionList.map((c) => {
  if (c.name && c.name[0] === c.name[0].toUpperCase() && c.signatureList.length === 1) {
    const interfaceNames = [`${c.name}Props`, `I${c.name}Props`];

    const i = mod.interfaceList.findIndex(i => interfaceNames.some(n => n === i.name));
    if (i >= 0) {
      components.push({
        function: c,
        interface: mod.interfaceList[i]
      });
    }
  }
});

console.log(`Found ${components.length} potential component(s)...`);

let docs = [];

components.forEach(c => {
  let doc = c.function.signatureList[0].doc;
  let elementName;

  if (doc) {
    const match = doc.match(/^\[(\w+[\-\w+]+)\]/s);
    if (match && match.length > 1) {
      elementName = match[1];

      let newDoc = "";
      for (let i = 0; i < doc.length; i++) {
        if (i < match.index || i > match.index + match[0].length) {
          newDoc += doc[i];
        }
      }
      doc = newDoc;
    }
  }

  if (elementName) {
    const properties = c.interface.propertyList
      ? c.interface.propertyList.map(p => {
        let doc = p.doc;
        let name = camelToKebabCase(p.name);

        if (doc) {
          const match = doc.match(/^\[(\w+[\-\w+]+)\]/s);
          if (match && match.length > 1) {
            name = match[1];
      
            let newDoc = "";
            for (let i = 0; i < doc.length; i++) {
              if (i < match.index || i > match.index + match[0].length) {
                newDoc += doc[i];
              }
            }
            doc = newDoc;
          }
        }

        return {
          name,
          doc,
          type: p.type.name || (p.type.unionOf && p.type.unionOf.reduce((p2, c2, i) => p2 + (i > 0 ? " | " : "") + c2.name, ""))
        };
      })
      : [];

    docs.push({
      functionName: c.function.name,
      interfaceName: c.interface.name,
      elementName,
      properties,
      doc
    });
  }
});

const docNames = new Set();
docs = docs.filter(d => {
  const res = !docNames.has(d.elementName);
  docNames.add(d.elementName);
  return res;
})

if (docs.length < components.length) {
  console.log(`Did not generate docs for ${components.length - docs.length} potential component(s)`);
}

fs.writeFileSync(outDir, JSON.stringify(docs, null, 2));
