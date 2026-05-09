import Link from "next/link";
const NavItem = ({ href, children, ...props }) => (
  <Link href={href}>
    <span
      {...props}
      className="hover:text-portfolio-color-5 transition-all duration-400"
    >
      {children}
    </span>
  </Link>
);

export default NavItem;
