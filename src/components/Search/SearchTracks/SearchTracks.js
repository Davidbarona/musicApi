import React from 'react'
import { useSelector } from 'react-redux';
import "./SearchTracks.less"

const millisToMinutesAndSeconds = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return `${minutes}:${(seconds < 10 ? "0" : "")}${seconds}`;
}

const SearchTracks = () => {

    let searchData = useSelector(store => store.searchReducer.tracks)
    let tracks = searchData?.data?.tracks.items

    return (
        <div className="searchTracks_container">
            <div className="searchTracks_title">
                <div className="searchTracks_subTitle1">Songs</div>
                <div className="searchTracks_subTitle2">See all</div>
            </div>
            {
                tracks && tracks.map(e => (

                    <div className="searchTracks_cardRowContainer">

                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div>
                                <img className="searchTracks_cardImage" src={e.album.images[2].url} alt="alt" />
                            </div>

                            <div style={{ display: "flex", flexDirection: "column" }}>


                                <div className="searchTracks_name"> {e.name}</div>

                                <div className="searchTracks_cardNames">
                                    {
                                        e.artists.map(e => (
                                            <div>{e.name}, </div>
                                        ))
                                    }
                                </div>
                            </div>


                        </div>
                        <div className="searchTracks_cardDuration">
                            {
                                millisToMinutesAndSeconds(e.duration_ms)
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default SearchTracks
