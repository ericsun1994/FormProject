// function App() {
//   return (
//     <div>
//       <h1>Hello, Custom JSX with Vite and Babel!</h1>
//       <button onClick={() => alert("Button clicked!")}>Click Me</button>
//     </div>
//   );
// }

// export default App;
import { createElement } from "./jsx/createElement";

function App() {
  return createElement(
    "div",
    { id: "app-root", className: "container" },
    createElement("h1", null, "Hello, Custom JSX with Vite and Babel!"),
    createElement("button", { onClick: () => alert("Button clicked!") }, "Click Me")
  );
}

export default App;
