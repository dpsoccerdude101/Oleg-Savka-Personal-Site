/**
 * Fetches a Markdown File from the Web and returns
 * it as string
 * @param {URLSearchParams} url The Url to Markdown Rescource
 * @returns {String}  The Markdown String
 */
export const getMarkdown = async (url) => {
  const markdownPromise = await fetch(url);
  const markdownText = await markdownPromise.text();
  return markdownText;
};

/**
 * Convert a template string into HTML DOM nodes
 * @param  {String} str The template string
 * @return {Node}       The template HTML
 */
 export const stringToHTML = (str) => {
	const parser = new DOMParser();
	const doc = parser.parseFromString(str, 'text/html');
	return doc.body;
};
