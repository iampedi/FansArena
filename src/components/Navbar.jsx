import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <ul className="flex gap-6 [&_li]:uppercase [&_li]:font-medium [&_a.active]:text-yellow-600 [&_a]:hover:text-yellow-600 [&_a]:hover:duration-300">
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/clubs"}>Clubs</NavLink>
      </li>
      <li>
        <NavLink to={"/nationals"}>Nationals</NavLink>
      </li>
      {/* <li>
        <NavLink to={"/players"}>Players</NavLink>
      </li>
      <li>
        <NavLink to={"/stadiums"}>Stadiums</NavLink>
      </li>
      <li>
        <NavLink to={"/trophies"}>Trophies</NavLink>
      </li> */}
    </ul>
  );
};

export default Navbar;
