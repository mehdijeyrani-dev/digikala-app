import React from "react";
import digiImg from "@/assets/images/digikala-logo.svg";
import { Link } from "react-router-dom";
import { Bell, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full flex flex-col">
      <div className="flex w-full md:px-4">
        <div className="grow bg-amber-600 flex items-center ">
          <Link to="/" className="ml-5 shrink-0">
            <img
              src={digiImg}
              alt="لوگوی دیجیکالا"
              width={195}
              height={30}
              className="object-contain"
            />
          </Link>
          <div className="relative w-full md:max-w-xl">
            <div className="w-full bg-neutral-100 h-11 flex items-center px-4 gap-4 cursor-pointer rounded-sm">
              <Search className="text-neutral-400" size={20} />
              <span className="text-xs cursor-text text-ellipsis grow text-neutral-500">جستجو</span>
            </div>
          </div>
        </div>
        <div className="bg-amber-400 flex items-center justify-end">
            <Link to="/profile/notification/">
                <Bell />
            </Link>
        </div>
      </div>
      <nav></nav>
    </header>
  );
};

export default Header;
