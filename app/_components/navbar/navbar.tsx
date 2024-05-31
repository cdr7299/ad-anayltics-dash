const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center px-4 py-2">
        <div className="flex-grow">
          <ul>
            <li>Home</li>
            <li>Analytics</li>
          </ul>
        </div>
        <div className="flex items-center"></div>
      </nav>
    </>
  );
};

export default Navbar;
