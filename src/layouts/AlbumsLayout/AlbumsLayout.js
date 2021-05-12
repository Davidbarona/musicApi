import React, { useEffect } from 'react'
import SideBar from '../../components/SideBar/SideBar';
import { useDispatch } from 'react-redux';
import { getHomeData, getHomeGenres, getHomePlaylists } from '../../actions/getHomeElements';
import SearchBar from '../../components/SearchBar/SearchBar';
import "./AlbumsLayout.less";

const AlbumsLayout = () => {

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

        {/* <div className="HomeLayoutrow2">
          <HomeCarousel />
        </div> */}

      </div>
    </div>
  )
}

export default AlbumsLayout
