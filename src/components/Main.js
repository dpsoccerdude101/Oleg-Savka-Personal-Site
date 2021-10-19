import { component, useState, html, useEffect } from "haunted";
import { getText, stringToHTML } from "../tools/utils.js";
import marked from "marked";
// ALLOWS LINE BREAKS WITH RETURN BUTTON
marked.setOptions({
  breaks: true,
});

const Main = () => {
  const [markdownText, setMarkdownText] = useState();
  const [markupText, setMarkupText] = useState();
  const markdownLink =
    "https://raw.githubusercontent.com/dpsoccerdude101/dpsoccerdude101.github.io/master/index.md";

  useEffect(async () => setMarkdownText(await getText(markdownLink)), []);
  useEffect(() => {
    if (markdownText) {
      const markupStr = marked(markdownText);
      const markup = stringToHTML(markupStr);
      setMarkupText(markup);
    }
  }, [markdownText]);
  //console.dir(markupText? markupText.innerHTML : '');
  return html`<main>${markupText ? markupText : ``}</main>`;
};

customElements.define(
  "main-component",
  component(Main, { useShadowDOM: false })
);
