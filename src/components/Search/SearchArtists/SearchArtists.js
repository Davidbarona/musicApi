import React from 'react'
import { useSelector } from 'react-redux';
import "./SearchArtists.less"

const SearchArtists = () => {

    let searchData1 = useSelector(store => store.searchReducer.artists)
    let artists = searchData1?.data?.artists?.items
    console.log("ARTISTS", artists)

    return (
        <div className="searchArtists_Container">

            <div className="SearchArtistAlbumCardContainer">
                {
                    artists && artists.map(e => (
                        <div className="SearchArtistAlbumCard">
                            <div>
                                <img className="SearchArtistAlbumCardImage" src={e.images[0]?.url} alt="alt" />
                            </div>
                            <div className="SearchArtistAlbumCardTitle" >
                                {e.name}
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default SearchArtists
