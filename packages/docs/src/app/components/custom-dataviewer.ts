import { ComponentHooks, html, register } from "@gh-components/core";

function DataViewer({ url }, { useState, useEffect }: ComponentHooks) {
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

  if (loading) return html`
    <p>Loading...</p>
  `;

  return html`
    <pre><code>${data}</code></pre>
  `;
}

register("custom-dataviewer", DataViewer, {
  url: {
    type: String
  }
});
