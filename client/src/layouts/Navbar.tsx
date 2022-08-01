import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="p-10 bg-gradient-to-tr from-lime-400 via-green-500 to-teal-600">
      <Link to={'/'}>
        <h1>Hacommerce</h1>
      </Link>
    </header>
  );
}
