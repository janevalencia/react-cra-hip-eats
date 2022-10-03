import React from "react";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { IoLogoAppleAppstore } from "react-icons/io5";
import { AiFillAndroid } from "react-icons/ai";
import { HiTranslate } from "react-icons/hi";

// Default Footer props.
const defaultFooterProps = {
  author: "Jane Valencia",
  year: new Date().getFullYear().toString(),
};

type FooterProps = {
  author: string;
  year: string;
} & typeof defaultFooterProps;

// Render Footer component.
const Footer = ({ author, year }: FooterProps) => {
  return (
    <footer className="max-w-[1640px] mx-auto px-4 py-16 border-t-2 border-slate-200">
      <div className="grid md:grid-cols-2 w-full">
        {/* Brand */}
        <div className="flex flex-col justify-between gap-4">
          <h3 className="text-xl md:text-3xl py-1">
            Hip<span className="font-bold"> Eats</span>
          </h3>
          <div className="flex justify-start items-center gap-4">
            <AiFillAndroid size={50} />
            <IoLogoAppleAppstore size={50} />
          </div>
        </div>

        {/* Footer Nav-Links */}
        <div className="flex flex-col gap-4 py-4 md:py-0 lg:flex-row justify-start items-start">
          <div className="flex flex-col gap-4">
            <span className="cursor-pointer hover:underline text-gray-500">Get Help</span>
            <span className="cursor-pointer hover:underline text-gray-500">Buy Gift Cards</span>
            <span className="cursor-pointer hover:underline text-gray-500">Add Your Restaurant</span>
            <span className="cursor-pointer hover:underline text-gray-500">Create A Business Account</span>
            <span className="cursor-pointer hover:underline text-gray-500">Promotions</span>
          </div>
          <div className="flex flex-col gap-4 lg:ml-32">
            <span className="cursor-pointer hover:underline text-gray-500">Restaurants Near Me</span>
            <span className="cursor-pointer hover:underline text-gray-500">View All Cities</span>
            <span className="cursor-pointer hover:underline text-gray-500">View All Countries</span>
            <span className="cursor-pointer hover:underline text-gray-500">Careers</span>
            <span className="cursor-pointer hover:underline text-gray-500">About Hip Eats</span>
            <span className="flex items-center">
                <HiTranslate className="hover:underline cursor-pointer" size={18} />
                <span className="hover:underline cursor-pointer text-gray-500"> | English</span>
            </span>
          </div>
        </div>
      </div>
      {/* Social Media, Privacy */}
      <div className="grid md:grid-cols-2 w-full border-t-2 border-slate-100 py-4 mt-4">
        <div className="flex justify-start items-center gap-4 max-w-[100px]">
          <BsFacebook
            size={20}
            className="cursor-pointer"
          />
          <BsTwitter size={20} className="cursor-pointer" />
          <BsInstagram
            size={20}
            className="cursor-pointer"
          />
        </div>
        <div className="flex flex-col md:flex-row md:justify-end gap-4 py-4">
          <span className="cursor-pointer hover:underline text-gray-500">Privacy Policy</span>
          <span className="cursor-pointer hover:underline text-gray-500">T&C</span>
          <span className="cursor-pointer hover:underline text-gray-500">Pricing</span>
          <span className="cursor-pointer hover:underline text-gray-500">
            Data Protection
          </span>
        </div>
      </div>
      {/* Copyright & Author */}
      <p className="text-sm text-end text-gray-500">
        &copy; {year} {author}. All rights reserved.
      </p>
    </footer>
  );
};
Footer.defaultProps = defaultFooterProps;

export default Footer;
