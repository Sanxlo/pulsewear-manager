import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="border-b">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          PulseWear
        </Link>

        <div className="flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/compare">Compare</Link>
          <Link to="/admin">Admin</Link>
        </div>
      </nav>
    </header>
  );
}