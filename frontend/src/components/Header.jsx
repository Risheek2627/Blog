export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Blog</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="text-white hover:text-gray-200">
                Home
              </a>
            </li>
            <li>
              <a href="/blog" className="text-white hover:text-gray-200">
                Blog
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
