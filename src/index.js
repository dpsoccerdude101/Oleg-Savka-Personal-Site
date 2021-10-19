import "./components/Main.js";

import { html, useEffect, component, useState } from "haunted";

const App = () => {
  return html` <main-component></main-component> `;
};
export default App;
customElements.define("app-page", component(App, { useShadowDOM: false }));
