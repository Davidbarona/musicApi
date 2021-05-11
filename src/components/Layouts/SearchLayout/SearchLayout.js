import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import SideBar from '../../SideBar/SideBar';
import SearchBar from '../../SearchBar/SearchBar';
import { useParams } from "react-router-dom";
import { getSearchAlbums, getSearchArtists, getSearchTracks } from '../../../actions/getSearchData';
import SearchTracks from '../../Search/SearchTracks/SearchTracks';
import SearchArtists from '../../Search/SearchArtists/SearchArtists';
import "./SearchLayout.less"

const SearchLayout = () => {

    const { params } = useParams();
    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(getSearchTracks(params))
        dispatch(getSearchArtists(params))
        dispatch(getSearchAlbums(params))
    }, [dispatch, params])


    return (
        <div className="LayoutContainer">

            <div className="HomeSideBarContainer">
                <SideBar />
            </div>

            <div className="LayoutContent">

                <div className="HomeLayoutrow1">
                    <SearchBar />
                </div>

                <div className="SearchLayout_row1">
                    <SearchTracks />
                </div>

                <div className="SearchLayout_row1">
                    <SearchArtists />
                </div>

            </div>
        </div>
    )
}

export default SearchLayout
