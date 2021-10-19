import { component, useState, html, useEffect } from "haunted";
import { getMarkdown, stringToHTML } from "../tools/utils.js";
import marked from "marked";
// ALLOWS LINE BREAKS WITH RETURN BUTTON
marked.setOptions({
  breaks: true,
});

const markdownLink =
  "https://raw.githubusercontent.com/dpsoccerdude101/dpsoccerdude101.github.io/master/index.md";

const Main = () => {
  const [markdownText, setMarkdownText] = useState();
  const [markupText, setMarkupText] = useState();

  useEffect(async () => setMarkdownText(await getMarkdown(markdownLink)), []);
  useEffect(() => {
    const markupStr = marked(markdownText);
    const markup = stringToHTML(markupStr);
    setMarkupText(markup);
  }, [markdownText]);

  return html`<main>${markupText ? html`${markupText}` : ``}</main>`;
};

customElements.define(
  "main-component",
  component(Main, { useShadowDOM: false })
);
