import "./style";
import { Component, render } from "preact";

const SEARCH = "//api.github.com/search/repositories";

export default class App extends Component {
  componentDidMount() {
    fetch(`${SEARCH}?q=preact`)
      .then(r => r.json())
      .then(json => {
        this.setState({
          results: (json && json.items) || []
        });
      });
  }

  render(props, { results = [] }) {
    return (
      <div>
        <h1>Example Preact app on Now</h1>
        <div class="list">Look, it's server rendered!</div>
      </div>
    );
  }
}

if (typeof window !== "undefined") {
  render(<App />, document.getElementById("root"));
}
