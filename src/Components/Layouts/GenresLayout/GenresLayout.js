import React from 'react'
import SideBar from '../../SideBar/SideBar';
import { Input } from 'antd';
import { BiSearch } from "react-icons/bi";
import "./GenresLayout.less"

const GenresLayout = () => {
    return (
        <div className="LayoutContainer">
            <SideBar />
            <div className="LayoutContent">

                <div className="HomeLayoutrow1">
                    <Input placeholder="Seach" prefix={<BiSearch />} className="inputSearchBarHome" />
                </div>



            </div>
        </div>
    )
}

export default GenresLayout
