import React from "react";
import scss from "./Header.module.scss";
import Link from "next/link";
import { SiNike } from "react-icons/si";
import { FaRegHeart } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";

const Header = () => {
  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.left}>
            <div className={scss.logo}>
              <Link href={"/"}>
                <SiNike className={scss.nike} />
              </Link>
            </div>
          </div>
          <div className={scss.right}>
          <Link href={'/'}>   
           <h1>HOME</h1>
          </Link>
      
          </div>
          <div className={scss.block}>
            <input type="text" placeholder="Search" />
            <FaRegHeart
              style={{ color: "black", fontSize: "23px", cursor: "pointer" }}
            />
            <Link href={"/admin"}>
              <RiAdminFill
                style={{ color: "black", fontSize: "23px", cursor: "pointer" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
