import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header id="header">
      <h2 id="site-name">
        <Link to="/">Trivia App!</Link>
      </h2>
    </header>
  );
}
