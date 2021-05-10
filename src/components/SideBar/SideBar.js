import React from 'react'
import { IconContext } from "react-icons";
import { SiDiscogs, SiApplemusic } from "react-icons/si";
import { AiFillSound } from "react-icons/ai";
import { MdAlbum } from "react-icons/md";
import { RiPlayList2Fill } from "react-icons/ri";
import { useLocation } from "react-router-dom";


import "./SideBar.less"
import { NavLink } from 'react-router-dom';

const SideBar = () => {

    let location = useLocation();

    return (
        <div className="sideBarContainer">

            <div className="SideBar_Content">
                <NavLink to="/">
                    <div className="SideBar_Title">
                        <SiApplemusic style={{ fontSize: "25px", marginRight: "10px", color: "white" }} />
                     MusicAPI
                </div>
                </NavLink>
                <IconContext.Provider value={{ color: 'white', size: '17px', style: { verticalAlign: 'middle' } }}>
                    <NavLink to="/">
                        <div className={location.pathname === "/" ? "SideBar_Icons SideBar_IconsActive" : "SideBar_Icons"}>
                            <SiDiscogs /> Explore
                        </div>
                    </NavLink>
                    <NavLink to="/genres">
                        <div className={location.pathname === "/genres" ? "SideBar_Icons SideBar_IconsActive" : "SideBar_Icons"}>
                            <AiFillSound /> Genres
                        </div >
                    </NavLink>
                    <div className="SideBar_Icons">
                        <MdAlbum /> Albums
                        </div>
                    <div className="SideBar_Icons">
                        <RiPlayList2Fill /> Playlist
                        </div>
                </IconContext.Provider >
            </div>

            <div className="SideBar_footer">
                NoSeQuePoner ©
            </div>
        </div>
    )
}

export default SideBar
