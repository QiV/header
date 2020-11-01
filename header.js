import Logo from "./logo";
import Burger from "./burger";
import "./header.module.css";
export default (props, { results = [] }) => (
  <header class="header--root">
    <Burger />
    <Logo />
  </header>
);
