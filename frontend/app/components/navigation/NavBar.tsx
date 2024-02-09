const NavBar = () => {
  return (
    <nav className="flex justify-between p-2 text-lg mb-5">
      <div>Teithetsskalaen</div>
      <ul className="flex justify-between gap-5">
        <li>Home</li>
        <li>About</li>
      </ul>
      <div>Logg inn</div>
    </nav>
  );
};

export default NavBar;
