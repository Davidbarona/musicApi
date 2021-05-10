import React, { useEffect } from 'react'
import "./HomeLayout.less";
import SideBar from '../../SideBar/SideBar';
import { useDispatch } from 'react-redux';
import { getHomeData, getHomeGenres } from '../../../actions/getHomeElements';
import NewReleases from '../../Home/NewReleases/NewReleases';
import HomeGenres from '../../Home/HomeGenres/HomeGenres';
import HomeCarousel from '../../Home/HomeCarousel/HomeCarousel';
import SearchBar from '../../SearchBar/SearchBar';

const HomeLayout = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getHomeGenres())
    dispatch(getHomeData())
  }, [dispatch])


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
          <HomeCarousel />
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
