import React, { useEffect } from 'react'
import { Button } from 'antd';
import "./HomeLayout.less";
import SideBar from '../../SideBar/SideBar';
import { useDispatch, useSelector } from 'react-redux';
import { getHomeData, getHomeGenres } from '../../../actions/getHomeElements';
import NewReleases from '../../home/NewReleases/NewReleases';
import HomeGenres from '../../home/HomeGenres/HomeGenres';
import SearchBar from '../../home/SearchBar/SearchBar';

const HomeLayout = () => {

  // const color1 = () => {
  //   return ("#"+Math.floor(Math.random()*16777215).toString(16))
  // }

  const dispatch = useDispatch()

  useEffect(() => {
    window.scroll(0, 0)
    dispatch(getHomeGenres())
    dispatch(getHomeData())
  }, [dispatch])

  let releases = useSelector(store => store.homeReducer.data)
  var images = releases?.data?.albums.items

  return (
    <div className="LayoutContainer">

      <div className="HomeSideBarContainer">
        <SideBar />
      </div>
      <div className="LayoutContent">

        <div className="HomeLayoutrow1">
          <SearchBar />
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
              <div style={{ fontSize: "14px" }}>
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

        <div className="HomeLayoutrow">
          <NewReleases />
        </div>

        <div className="HomeLayoutrow">
          <HomeGenres />
        </div>

      </div>
    </div>
  )
}

export default HomeLayout
