import { render } from "preact";
import App from "./header";

if (typeof window !== "undefined") {
  render(<App />, document.getElementById("root"));
}
