import { html, register } from "gh-components-core";
import "@kuscamara/code-sample";

import "../components/custom-dataviewer";
import "../components/gh-contentpage";
import "../components/gh-hero";
import "../components/gh-h1";
import "../components/gh-h2";
import "../components/gh-h3";
import "../components/layout/gh-col";
import "../components/layout/gh-row";

function Counter(_, { useState }) {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return html`
    <button @click=${increment}>Count: ${count}</button>
  `;
}
register("my-counter", Counter);

function CounterUseCallback(_, { useCallback, useState }) {
  // Create a new state with an initial value of 0
  const [count, setCount] = useState(0);

  // Create an event to increment the count
  const increment = useCallback(() => setCount(count + 1), [count]);

  return html`
    <button @click=${increment}>Count: ${count}</button>
  `;
}

register("my-counter-usecallback", CounterUseCallback);

function AutoCounter(_, { useEffect, useState }) {
  const [count, setCount] = useState(0);

  // An effect that only runs once because it has no deps
  useEffect(() => {
    let localCount = 0;
    const interval = setInterval(() => {
      setCount(++localCount);
    }, 1000);
    
    // Clear the interval when the component is destroyed
    return () => clearInterval(interval);
  }, []);

  return html`
    <p>Count: ${count}</p>
  `;
}

register("my-autocounter", AutoCounter);

function ExpensiveCompute(_, { useMemo }) {
  
  const computed = useMemo(() => {
    return Array(8).join(("wat" as any) - 1 as any) + " Batman!";
  }, []);

  return html`
    <p>${computed}</p>
  `;
}

register("my-expensive-compute", ExpensiveCompute);

function Core() {
  return html`
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
          ${`
function Counter(_, { useState }) {
  // Create a new state with an initial value of 0
  const [count, setCount] = useState(0);

  // Create an event to increment the count
  const increment = () => setCount(count + 1);

  return html\`
    <button @click=\${increment}>Count: \${count}</button>
  \`;
}
          `}
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
          ${`
function CounterUseCallback(_, { useCallback, useState }) {
  // Create a new state with an initial value of 0
  const [count, setCount] = useState(0);

  // Create an event to increment the count
  const increment = useCallback(() => setCount(count + 1), [count]);

  return html\`
    <button @click=\${increment}>Count: \${count}</button>
  \`;
}
          `}
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
          ${`
function ExpensiveCompute(_, { useMemo }) {
  // A memo that runs once and subsequently returns the same value
  const computed = useMemo(() => {
    return Array(16).join("wat" - 1) + " Batman!";
  }, []);

  return html\`
    <p>\${computed}</p>
  \`;
}
          `}
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
          ${`
function AutoCounter(_, { useEffect, useState }) {
  const [count, setCount] = useState(0);

  // An effect that only runs once because it has no deps
  useEffect(() => {
    let localCount = 0;
    const interval = setInterval(() => {
      setCount(++localCount);
    }, 1000);

    // Clear the interval when the component is destroyed
    return () => clearInterval(interval);
  }, []);

  return html\`
    <p>Count: \${count}</p>
  \`;
}
          `}
        </template>
      </code-sample>

      <p>Output:</p>
      <my-autocounter></my-autocounter>

      <gh-h3>Data loading example</gh-h3>

      <p>Component definition:</p>
      <code-sample type="js">
        <template preserve-content>
          ${`
function DataViewer({ url }, { useState, useEffect }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(!!url);

  useEffect(() => {
    let canceled = false;

    if (url) {
      setLoading(true);

      fetch(url)
        .then(r => r.json())
        .then(json => {
          // Only set the data if the url is the same
          if (!canceled) setData(JSON.stringify(json, null, 2));
        })
        .catch((err) => {
          if (!canceled) setData(err.toString())
        })
        .then(() => {
          if (!canceled) setLoading(false)
        });
    }

    // A new url was provided
    return () => canceled = true;
  }, [url]); // Re-run the effect when the URL changes

  if (loading) return html\`
    <p>Loading...</p>
  \`;

  return html\`
    <pre><code>\${data}</code></pre>
  \`;
}

register("custom-dataviewer", DataViewer, ["url"]);
          `}
        </template>
      </code-sample>

      <p>Component usage:</p>
      <code-sample type="html">
        <template preserve-content>
          ${`
<custom-dataviewer url="https://jsonplaceholder.typicode.com/todos/1"></custom-dataviewer>
          `}
        </template>
      </code-sample>

      <p>Output:</p>
      <custom-dataviewer url="https://jsonplaceholder.typicode.com/todos/1"></custom-dataviewer>
    </gh-contentpage>
  `;
}

register("gh-core", Core);
