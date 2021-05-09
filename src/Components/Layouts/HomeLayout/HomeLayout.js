import React, { useEffect } from 'react'
import { Button, Input } from 'antd';
import "./HomeLayout.less";
import { BiSearch } from "react-icons/bi";
import SideBar from '../../SideBar/SideBar';
import { useDispatch, useSelector } from 'react-redux';
import { getHomeData } from '../../../actions/getHomeElements';

const token = process.env.REACT_APP_TOKEN;

const HomeLayout = () => {

  // const color1 = () => {
  //   return ("#"+Math.floor(Math.random()*16777215).toString(16))
  // }

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHomeData())
  }, [dispatch])

  let allData = useSelector(store => store.homeReducer)
  var images = allData?.data?.data?.albums.items
  console.log("DATA:",allData)

  return (
    <div className="LayoutContainer">
      
      <div className="HomeSideBarContainer">
        <SideBar />
      </div>

      <div className="LayoutContent">

        <div className="HomeLayoutrow1">
          <Input placeholder="Seach" prefix={<BiSearch />} className="inputSearchBarHome" />
        </div>

        <div className="HomeLayoutrow2">

          <div className="HomeBackText">
            <div className="HomeTitleSection">
              Trending New Hits
            </div>
            <div className="HomeTopTitle">
              {images && images[1]?.name}
            </div>
            <div className="HomeTopDescription">
              {images && images[1]?.artists[0]?.name}
            </div>
            <div className="HomeButtonContainer">
              <Button className="HomeButonDetails" size="large" type="primary">Details</Button>
            </div>

          </div>
          <div className="HomeBackImageContainer">
            <img className="HomeBackImage" src={images && images[1]?.images[0].url} alt="alt" />
          </div>

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
