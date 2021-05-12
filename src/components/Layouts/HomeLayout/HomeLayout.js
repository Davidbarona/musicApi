import React, { useEffect } from 'react'
import "./HomeLayout.less";
import SideBar from '../../SideBar/SideBar';
import { useDispatch } from 'react-redux';
import { getHomeData, getHomeGenres, getHomePlaylists } from '../../../actions/getHomeElements';
import NewReleases from '../../../components/Home/NewReleases/NewReleases';
import HomeGenres from '../../../components/Home/HomeGenres/HomeGenres';
import HomeCarousel from '../../../components/Home/HomeCarousel/HomeCarousel';
import SearchBar from '../../SearchBar/SearchBar';
import HomePlaylists from '../../Home/HomePlaylists/HomePlaylists';

const HomeLayout = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getHomeGenres())
    dispatch(getHomeData())
    dispatch(getHomePlaylists())
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


        <div className="HomeLayoutrow2">
          <NewReleases />
        </div>

        <div className="HomeLayoutrow2-genres">
          <HomeGenres />
        </div>

        <div className="HomeLayoutrow2">
          <HomePlaylists />
        </div>

      </div>
    </div>
  )
}

export default HomeLayout
