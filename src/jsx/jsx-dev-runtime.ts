import { createElement } from "./createElement";

export function jsxDEV(type: any, props: any, key?: any, isStaticChildren?: boolean, source?: any, self?: any) {
  return createElement(type, props, key);
}
