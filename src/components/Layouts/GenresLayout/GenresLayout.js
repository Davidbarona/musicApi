import React, { useEffect } from 'react'
import SideBar from '../../SideBar/SideBar';
import { useDispatch } from 'react-redux';
import { getHomeData, getHomeGenres, getHomePlaylists } from '../../../actions/getHomeElements';
import SearchBar from '../../SearchBar/SearchBar';
import { getGenres } from '../../../actions/getGenres';
import "./GenresLayout.less";
import { useSelector } from 'react-redux';

const GenresLayout = () => {

  const dispatch = useDispatch()
  let genresData = useSelector(store => store.genresReducer.genres)
  console.log(genresData)

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getHomeGenres())
    dispatch(getHomeData())
    dispatch(getHomePlaylists())
    dispatch(getGenres())
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

        <div className="GenresLayoutrow">

        </div>

      </div>
    </div>
  )
}

export default GenresLayout
