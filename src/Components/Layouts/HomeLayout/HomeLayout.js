import React, { useEffect } from 'react'
import { Input } from 'antd';
import "./HomeLayout.less";
import { BiSearch } from "react-icons/bi";
import SideBar from '../../SideBar/SideBar';
import axios from 'axios';
require('dotenv').config();
const token = process.env.TOKEN;

const HomeLayout = () => {

  // const color1 = () => {
  //   return ("#"+Math.floor(Math.random()*16777215).toString(16))
  // }

  useEffect(() => {
    axios.get('https://api.spotify.com/v1/browse/new-releases?offset=0&limit=5 ', {
      headers: {
        Authorization: 'Bearer ' + "BQA5hrwdIycAUFAUXaZm_szEBvUn50q_ogwqHl6-IRSbIXClQwM41F_ZeDEa4M-6UULVUIY1P_lPjDSgzTc9sWc4GDlLaN_db3jeZyUWQNpoV9vPs1yNzRcMxkcRXchp9Rlyy1_B3QM" //the token is a variable which holds the token
      }
    }).then((r) =>
      console.log(r.data.albums)
    ) 

  }, [])

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
