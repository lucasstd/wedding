import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles.css";
import { IconButton } from "@material-tailwind/react";
import { FaBars, FaTimes } from "react-icons/fa";
import { pages } from "../../helpers/linksHelper";

interface NavLinksProps {
  url: string;
  link_name: string;
  readonly?: boolean;
}

interface NavbarProps {
  forceBackground?: boolean;
}

function NavItem({ url, link_name, readonly }: NavLinksProps) {
  const commonClasses =
    "flex items-center gap-2 font-medium drop-shadow-lg transition-all duration-300";

  return (
    <li className="menu1">
      {readonly ? (
        <span className={`${commonClasses} text-gray-400 cursor-not-allowed`}>
          {link_name}
        </span>
      ) : (
        <Link
          to={url}
          className={`${commonClasses} text-white hover:text-teal-400 hover:scale-105`}
        >
          {link_name}
        </Link>
      )}
    </li>
  );
}

const Navbar: React.FC<NavbarProps> = ({ forceBackground = true }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (forceBackground) {
      setIsScrolling(true);
      return;
    }

    const handleScroll = () => setIsScrolling(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [forceBackground]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`fixed top-0 z-50 w-full text-white ${
        isScrolling ? "bg-gray-900/80 backdrop-blur-sm" : "bg-transparent"
      } transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        <Link
          to="/"
          className="text-lg font-bold text-white font-dancing-script drop-shadow-lg hover:text-teal-400 hover:scale-105 transition-all duration-300"
        >
          Anne & Lucas
        </Link>

        <ul className="hidden lg:flex items-center gap-6">
          {pages.map((item) => (
            <NavItem
              key={item.id}
              url={item.href}
              link_name={item.page}
              readonly={item.readonly}
            />
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-2">
          <Link
            to="/confirmacao-presenca"
            className="text-lg font-bold text-white font-dancing-script drop-shadow-lg hover:text-teal-400 hover:scale-105 transition-all duration-300"
          >
            Confirmação de presença
          </Link>
        </div>

        <IconButton
          variant="text"
          id="toggle-menu"
          onClick={handleToggle}
          className="ml-auto inline-block lg:hidden text-white drop-shadow-lg hover:text-teal-400 transition-all duration-300"
          title="Toggle menu"
          placeholder=""
        >
          {isOpen ? (
            <FaTimes className="h-5 w-5" />
          ) : (
            <FaBars className="h-5 w-5 relative" />
          )}
        </IconButton>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-gray-800/90 py-4 px-6 border-t border-gray-200">
          <ul className="flex flex-col items-center gap-4">
            {pages.map(({ id, page, href, readonly }) => (
              <NavItem
                key={id}
                url={href}
                link_name={page}
                readonly={readonly}
              />
            ))}
            <NavItem
              key={"confirmacao-presenca"}
              url={"/confirmacao-presenca"}
              link_name={"Confirmação de presença"}
            />
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
