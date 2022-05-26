import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../data/dummy";
import {useStateContext} from "../contexts/ContextProvider";

const Sidebar = () => {
  const {activeMenu,setActiveMenu,screenSize,currentColor} = useStateContext();

  const handleCloseSideBar = () => {
    if(activeMenu&&screenSize<=900){
      setActiveMenu(false);
    }
  }
  const activeLink =
    "flex item-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
  const normalLink =
    "flex item-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-black text-md text-grey-700 hover:bg-light-gray dark:text-gray-200 dark:hover:text-white dark:hover:bg-gray-600 m-2";

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 ">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center transition duration-150 ease-in-out">
            <Link
              to="/"
              onClick={handleCloseSideBar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
            <SiShopware style={{color:currentColor}} />
              <span style={{color:currentColor}}>SHARE HUB</span>
            </Link>
            <TooltipComponent content="Close" position="BottomCenter">
              <button
                onClick={() => setActiveMenu((previousState)=>!previousState)}
                className="text-xl rounded-full p-3 hover:bg-light-gray"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    className={({isActive})=>(isActive ? activeLink : normalLink)}
                    style={ ({isActive})=>(isActive? { backgroundColor: currentColor }:{})}
                  
                  >
                    {link.icon}
                    <span className="capitalize font-medium">
                      {link.name}
                    </span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;