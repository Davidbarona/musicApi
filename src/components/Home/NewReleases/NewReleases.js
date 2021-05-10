import React from 'react'
import {useSelector } from 'react-redux';
import "./NewReleases.less"

const NewReleases = () => {

    let releases = useSelector(store => store.homeReducer.data)
    var images = releases?.data?.albums.items

    return (
        <div className="HomeLayoutCard1 " >
            <div style={{ display: "flex", justifyContent: "space-between", width: "100%", paddingInline: "15px" }}>
                <div style={{ fontSize: "30px", fontWeight: "700" }}>
                    New Releases
              </div>
                <div style={{ display: "flex", alignItems: "center", marginRight: "10px", fontSize: "14px" }}>
                    See all
              </div>
            </div>
            <div className="HomeAlbumCardContainer">
                {
                    images && images.map(e => (
                        <div className="HomeAlbumCard">
                            <div>
                                <img className="HomeAlbumCardImage" src={e.images[1].url} alt="alt" />
                            </div>
                            <div className="HomeAlbumCardTitle" >
                                {e.name}
                            </div>
                            <div className="HomeAlbumCardArtist" >
                                {e.artists[0].name}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default NewReleases
