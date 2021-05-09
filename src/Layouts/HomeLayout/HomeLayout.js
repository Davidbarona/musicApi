import React from 'react'
import { Input } from 'antd';
import "./HomeLayout.less";
import { BiSearch } from "react-icons/bi";
import SideBar from '../../Components/SideBar/SideBar';


const HomeLayout = () => {

  // const color1 = () => {
  //   return ("#"+Math.floor(Math.random()*16777215).toString(16))
  // }

  return (
    <div className="LayoutContainer">
      <SideBar />

      <div className="LayoutContent">

        <div className="HomeLayoutrow1">
          <Input placeholder="Seach" prefix={<BiSearch />} className="inputSearchBarHome" />
        </div>

        <div className="HomeLayoutrow2">
        </div>

        <div className="HomeLayoutrow3">
          <div className="HomeLayoutCard1">
          </div>
        </div>

        <div className="HomeLayoutrow4">
          <div className="HomeLayoutCard2">
          </div>
          <div className="HomeLayoutCard3">
          </div>
        </div>

      </div>
    </div>
  )
}

export default HomeLayout
