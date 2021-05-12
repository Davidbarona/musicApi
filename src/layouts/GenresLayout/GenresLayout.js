import React, { useEffect } from 'react'
import SideBar from '../../components/SideBar/SideBar';
import { useDispatch } from 'react-redux';
import { getHomeData, getHomeGenres, getHomePlaylists } from '../../actions/getHomeElements';
import SearchBar from '../../components/SearchBar/SearchBar';
import { getGenres } from '../../actions/getGenres';
import { useSelector } from 'react-redux';
import "./GenresLayout.less";

const GenresLayout = () => {

  const dispatch = useDispatch()
  let genresData = useSelector(store => store.genresReducer.genres)
  console.log(genresData?.data?.categories?.items)
  let genres = genresData?.data?.categories?.items


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
        <div className="Genres_Title">
          Genres
        </div>

        <div className="GenresLayoutrow">
          {
            genres?.map((e) => (
              <div className="genres_CardContainer">
                <div >
                  <img className="genres_CardImage" src={e.icons[0].url} alt="Nothing" />
                </div>
                <div className="genres_CardTitle">
                  {e.name}
                </div>
              </div>
            ))
          }
        </div>

      </div>
    </div>
  )
}

export default GenresLayout
