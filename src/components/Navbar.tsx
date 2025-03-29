import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed top-5 right-8 bg-[#333]/90 text-white py-2 px-6 rounded-full z-50 shadow-md backdrop-blur-sm border border-[#555]">
      <ul className="flex gap-6 items-center">
        {[
          { to: "about-me", label: "About Me" },
          { to: "projects", label: "Projects" },
          { to: "tech-stack", label: "Tech Stack" },
          { to: "contact", label: "Contact" },
        ].map(({ to, label }) => (
          <li
            key={to}
            className="cursor-pointer text-sm font-medium transition-colors duration-300 hover:text-[#4CAF50]"
          >
            <Link to={to} smooth={true} duration={500}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
