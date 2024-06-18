import Link from "next/link";
import React from "react";

interface NavProp {
  links: string[];
}

const NavLink = ({ links }: NavProp) => {
  return (
    <ul className="flex font-nunito text-black font-semibold gap-x-4">
      {links.map((link, i) => (
        <li key={i}>
          <Link href={`/${link.toLowerCase().replace(/\s+/g, "")}`}>
            {link}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLink;
