import React, { useEffect } from 'react'
import { Button, Carousel } from 'antd';
import "./HomeLayout.less";
import SideBar from '../../SideBar/SideBar';
import { useDispatch, useSelector } from 'react-redux';
import { getHomeData, getHomeGenres } from '../../../actions/getHomeElements';
import NewReleases from '../../home/NewReleases/NewReleases';
import HomeGenres from '../../home/HomeGenres/HomeGenres';
import SearchBar from '../../home/SearchBar/SearchBar';

const HomeLayout = () => {

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,

  };

  const dispatch = useDispatch()

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getHomeGenres())
    dispatch(getHomeData())
  }, [dispatch])

  let releases = useSelector(store => store.homeReducer.data)
  var releaseAlbums = releases?.data?.albums.items
  console.log("RELEASE", releaseAlbums)

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


          <Carousel effect="fade" {...settings} style={{ width: "74vw", height: "300px" }}>
            {
              releaseAlbums && releaseAlbums.map((e) => {
                return (
                  <div className="HomeRow2Content">
                    <div className="HomeBackImageContainer">
                      <img className="HomeBackImage" src={e.images[0].url} alt="alt" />
                    </div>
                    <div className="HomeBackText">
                      <div className="HomeTitleSection">
                        Trending New Hits
                    </div>
                      <div className="HomeTopTitle">
                        {e.name}
                      </div>
                      <div className="HomeTopDescription">
                        <div>
                          {e.artists[0]?.name}
                        </div>
                        <div style={{ fontSize: "14px" }}>
                          {e.release_date}
                        </div>
                      </div>
                      <div className="HomeButtonContainer">
                        <Button className="HomeButonDetails" size="large" type="primary">Details</Button>
                      </div>
                    </div>
                  </div>
                )
              })}

          </Carousel>

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
