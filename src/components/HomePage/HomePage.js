import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | {" "}
        <Link to="/shoppingPage">Shop</Link>
      </nav>
    </div>
  );
}