import App from "./App";
import { createElement } from "./jsx/createElement";

// 루트 요소 가져오기
const root = document.getElementById("root");

if (root) {
  // App 컴포넌트를 렌더링하고 루트에 추가
  const appElement = App();
  if (appElement) {
    root.appendChild(appElement);
  }
}
