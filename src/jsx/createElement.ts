type ElementProps = {
  [key: string]: any;
};

export function createElement(type: string | Function, props: ElementProps | null, ...children: any[]) {
  console.log("Type passed to createElement:", type);
  console.log("Props passed to createElement:", props);
  console.log("Children passed to createElement:", children);

  if (typeof type === "function") {
    console.log("Rendering a functional component:", type.name || type);
    return type({ ...props, children });
  }

  // type이 Symbol인 경우 처리
  if (typeof type !== "string") {
    console.error("Invalid type passed to createElement:", type);
    throw new Error("Invalid type passed to createElement. Expected a string or function.");
  }

  console.log("Creating a DOM element of type:", type);
  const element = document.createElement(type);

  if (props) {
    Object.entries(props).forEach(([key, value]) => {
      console.log(`Setting attribute/event: ${key} =`, value);
      if (key.startsWith("on") && typeof value === "function") {
        const event = key.slice(2).toLowerCase();
        console.log(`Adding event listener for event: ${event}`);
        element.addEventListener(event, value);
      } else {
        element.setAttribute(key, String(value));
      }
    });
  }

  children.forEach((child) => {
    if (typeof child === "string" || typeof child === "number") {
      console.log("Appending text child:", child);
      element.appendChild(document.createTextNode(String(child)));
    } else if (child instanceof Node) {
      console.log("Appending Node child:", child);
      element.appendChild(child);
    } else {
      console.warn("Unexpected child type:", child);
    }
  });

  return element;
}
