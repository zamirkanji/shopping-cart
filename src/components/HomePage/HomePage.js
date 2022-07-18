import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="/">Home</Link> | {" "}
        <Link to="/shoppingPage">Shop</Link> | {" "}
      </nav>
    </div>
  );
}