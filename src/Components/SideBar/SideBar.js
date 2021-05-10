import React from 'react'
import { IconContext } from "react-icons";
import { SiDiscogs, SiApplemusic } from "react-icons/si";
import { AiFillSound } from "react-icons/ai";
import { MdAlbum } from "react-icons/md";
import { RiPlayList2Fill } from "react-icons/ri";


import "./SideBar.less"
import { NavLink } from 'react-router-dom';


const SideBar = () => {
    return (
        <div className="sideBarContainer">

            <div className="SideBar_Content">
                <div className="SideBar_Title">
                    <SiApplemusic style={{ fontSize: "25px", marginRight: "10px" }} />
                     MusicAPI
                    </div>
                <IconContext.Provider value={{ color: 'white', size: '17px', style: { verticalAlign: 'middle' } }}>
                    <NavLink to="/home">
                        <div className="SideBar_Icons SideBar_IconsActive">
                            <SiDiscogs /> Explore
                        </div>
                    </NavLink>
                    <NavLink to="/genres">
                        <div className="SideBar_Icons">
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
