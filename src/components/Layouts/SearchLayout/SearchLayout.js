import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import SideBar from '../../SideBar/SideBar';
import SearchBar from '../../SearchBar/SearchBar';
import { useParams } from "react-router-dom";
import { getSearchAlbums, getSearchArtists, getSearchPlaylists, getSearchTracks } from '../../../actions/getSearchData';
import SearchTracks from '../../Search/SearchTracks/SearchTracks';
import SearchArtists from '../../Search/SearchArtists/SearchArtists';
import SearchAlbums from '../../Search/SearchAlbums/SearchAlbums';

import "./SearchLayout.less"
import SearchPlaylist from '../../Search/SearchPlaylist/SearchPlaylist';

const SearchLayout = () => {

    const { params } = useParams();
    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(getSearchTracks(params))
        dispatch(getSearchArtists(params))
        dispatch(getSearchAlbums(params))
        dispatch(getSearchPlaylists(params))
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

                <div className="SearchLayout_row2">
                    <SearchTracks />
                </div>

                <div className="SearchLayout_row2">
                    <SearchArtists />
                </div>

                <div className="SearchLayout_row2">
                    <SearchAlbums />
                </div>

                <div className="SearchLayout_row2">
                    <SearchPlaylist />
                </div>

            </div>
        </div>
    )
}

export default SearchLayout
