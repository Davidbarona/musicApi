import React from 'react'
import { useSelector } from 'react-redux';
import "./HomeGenres.less"

const HomeGenres = () => {

    let genresData = useSelector(store => store.homeReducer.genres)
    var genres = genresData?.data?.categories.items

    return (
        <div className="HomeLayoutCard11" >
            <div style={{ display: "flex", justifyContent: "space-between", width: "100%", paddingInline: "15px" }}>
                <div style={{ fontSize: "30px", fontWeight: "700" }}>
                    Genres
              </div>
                <div style={{ display: "flex", alignItems: "center", marginRight: "10px", fontSize: "14px" }}>
                    See all
              </div>
            </div>
            <div className="HomeAlbumCardContainer1 no-scrollbar">
                {
                    genres && genres.map(e => (
                        <div className="HomeAlbumCard1">
                            <div>
                                <img className="HomeAlbumCardImage1" src={e.icons[0].url} alt="alt" />
                            </div>
                            <div className="HomeAlbumCardTitle1" >
                                {e.name}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default HomeGenres
