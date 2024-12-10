type Props = {
  [key: string]: any;
  children?: any[];
};

export function createElement(type: string, props: Props, ...children: any[]) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) => (typeof child === "string" ? createTextElement(child) : child)),
    },
  };
}

function createTextElement(text: string) {
  return {
    type: "TEXT_ELEMENT",
    props: { nodeValue: text, children: [] },
  };
}
