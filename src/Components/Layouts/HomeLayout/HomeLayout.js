import React, { useEffect } from 'react'
import { Button, Input } from 'antd';
import "./HomeLayout.less";
import { BiSearch } from "react-icons/bi";
import SideBar from '../../SideBar/SideBar';
import { useDispatch, useSelector } from 'react-redux';
import { getHomeData } from '../../../actions/getHomeElements';

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
  console.log("DATA:", allData)

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
              <div>
                {images && images[1]?.artists[0]?.name}
              </div>
              <div style={{fontSize:"14px"}}>
                {images && images[1]?.release_date}
              </div>
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
          <div className="HomeLayoutCard1 " >
            <div style={{ display: "flex", justifyContent: "space-between", width: "100%", padding: "15px" }}>
              <div style={{fontSize:"15px", fontWeight:"600"}}>
                New Releases
              </div>
              <div>
                See all
              </div>
            </div>
            <div className="HomeAlbumCardContainer no-scrollbar">
              {
                images && images.map(e => (
                  <div className="HomeAlbumCard">
                    {console.log(e)}
                    <div>
                      <img className="HomeAlbumCardImage" src={e.images[1].url} alt="alt" />
                    </div>
                    <div className="HomeAlbumCardTitle" >
                      {e.name}
                    </div>
                    <div className="HomeAlbumCardArtist" >
                      {e.artists[0].name}
                    </div>
                  </div>
                ))
              }
            </div>

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
