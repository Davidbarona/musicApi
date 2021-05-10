import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SideBar from '../../SideBar/SideBar';
import SearchBar from '../../SearchBar/SearchBar';
import { useParams } from "react-router-dom";
import { getSearchAlbums, getSearchArtists, getSearchTracks } from '../../../actions/getSearchData';


const SearchLayout = () => {

    const { params } = useParams();
    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(getSearchTracks(params))
        dispatch(getSearchArtists(params))
        dispatch(getSearchAlbums(params))
    }, [dispatch, params])

    let searchTracks = useSelector(store => store.searchReducer)
    console.log("PRUEBA:", searchTracks)

    return (
        <div className="LayoutContainer">

            <div className="HomeSideBarContainer">
                <SideBar />
            </div>

            <div className="LayoutContent">

                <div className="HomeLayoutrow1">
                    <SearchBar />
                </div>

                <div>
                   <div>
                       
                   </div>

                </div>
            </div>
        </div>
    )
}

export default SearchLayout
