/**
 * Fetches a Markdown File from the Web and returns
 * it as string
 * @param {URLSearchParams} url The Url to Markdown Rescource
 * @returns {String}  The Markdown String
 */
export const getText = async (url) => {
  const textPromise = await fetch(url);
  const text = await textPromise.text();
  return text;
};

/**
 * Convert a template string into HTML DOM nodes
 * @param  {String} str The template string
 * @return {Node}       The template HTML
 */
export const stringToHTML = (str) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(str, "text/html");
  return doc.body.childNodes;
};
