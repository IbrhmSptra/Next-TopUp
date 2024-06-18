"use client";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

interface Props {
  size: number;
  classname?: string;
}
const MenuIcon = ({ size, classname }: Props) => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <button
      onClick={() => {
        setSidebar(!sidebar);
      }}
      aria-label="menu-btn"
    >
      {sidebar ? (
        <IoClose size={size} className={classname} aria-label="close-icon" />
      ) : (
        <IoMenu size={size} className={classname} aria-label="menu-icon" />
      )}
    </button>
  );
};

export default MenuIcon;
