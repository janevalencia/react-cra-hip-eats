import React, { Dispatch, SetStateAction } from "react";
import { AiOutlineClose, AiFillTag } from "react-icons/ai";
import { BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaWallet, FaUserFriends } from "react-icons/fa";
import Portals from "./Portals";

// Define Sidebar props.
type SidebarProps = {
    isShown : boolean,
    setShown : Dispatch<SetStateAction<boolean>>,
    brand: React.ReactNode
}

// Render Sidebar component.
const Sidebar = ({isShown, setShown, brand} : SidebarProps) => {

    // Render nothing if isShown is false.
    if (!isShown) return null;

    // Render component if isShown is true.
    return (
        <Portals wrapperId="portal-sidebar-menu-overlay">
            {/* Overlay */}
            <div onClick={() => setShown(prev => !prev)} className="bg-black/60 fixed w-full h-screen top-0 left-0"></div>

            {/* Sidebar-menu */}
            <div className={isShown ? 
                                `fixed top-0 left-0 w-[300px] h-screen bg-white duration-300 shadow-black shadow-md` : 
                                `fixed top-0 left-[-100%] w-[300px] h-screen bg-white duration-300 shadow-black shadow-md`}>
                <div className="flex justify-between items-center p-4">
                    {brand}
                    <AiOutlineClose 
                        size={30}
                        className="cursor-pointer"
                        onClick={() => setShown(prev => !prev)}
                    />
                </div>
                <nav>
                    <ul className='flex flex-col p-6 text-gray-800'>
                        <li className='text-xl py-4 flex'><TbTruckDelivery size={25} className='mr-4' /> Orders</li>
                        <li className='text-xl py-4 flex'><MdFavorite size={25} className='mr-4' /> Favorites</li>
                        <li className='text-xl py-4 flex'><FaWallet size={25} className='mr-4' /> Wallet</li>
                        <li className='text-xl py-4 flex'><MdHelp size={25} className='mr-4' /> Help</li>
                        <li className='text-xl py-4 flex'><AiFillTag size={25} className='mr-4' /> Promotions</li>
                        <li className='text-xl py-4 flex'><BsFillSaveFill size={25} className='mr-4' /> Best Ones</li>
                        <li className='text-xl py-4 flex'><FaUserFriends size={25} className='mr-4' /> Invite Friends</li>
                    </ul>
                </nav>
            </div>

            {/* Author copyright*/}
            <div className="fixed bottom-4 left-4">
                <p className=" text-gray-500 text-[14px]">&#128420; Developed by janevalencia</p>
            </div>
        </Portals>
    );
}

export default Sidebar;