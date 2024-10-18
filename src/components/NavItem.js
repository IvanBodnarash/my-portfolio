import Link from "next/link";
const NavItem = ({ href, children }) => (
  <Link href={href}>
    <span className="hover:text-portfolio-color-5 transition-all duration-400">
      {children}
    </span>
  </Link>
);

export default NavItem;
