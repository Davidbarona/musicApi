import React, { useRef } from 'react'
import { useSelector } from 'react-redux';
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";
import { SliderButtons, Wrapper, Slider, handleOnClickSlide } from '../../../helpers/slider';
import "./SearchPlaylist.less"

const SearchPlaylist = () => {

    const slider = useRef(null)

    let searchData = useSelector(store => store.searchReducer.playlist)
    let playlist =  searchData.data?.playlists.items
    console.log(playlist)

    return (
        <div className="AlbumSearchLayoutCard1 " >
            <div style={{ display: "flex", justifyContent: "space-between", width: "100%", paddingInline: "15px" }}>
                <div style={{ fontSize: "30px", fontWeight: "700" }}>
                    Playlists
          </div>
                <div style={{ display: "flex", alignItems: "center", marginRight: "10px", fontSize: "14px" }}>
                    See all
                <SliderButtons>
                        <button onClick={() => handleOnClickSlide('left', slider)}><IoChevronBackOutline /></button>
                        <button onClick={() => handleOnClickSlide('right', slider)}><IoChevronForwardOutline /></button>
                    </SliderButtons>
                </div>
            </div>

            <div>
                <Slider ref={slider}>
                    <Wrapper>
                        {
                            playlist && playlist.map(e => (
                                <div className="AlbumSearchAlbumCard">
                                    <div>
                                        <img className="AlbumSearchAlbumCardImage" src={e.images[0]?.url} alt="alt" />
                                    </div>
                                    <div className="AlbumSearchAlbumCardTitle" >
                                        {e.name}
                                    </div>
                                    {/* <div className="AlbumSearchAlbumCardArtist" >
                                        {e.artists[0].name}
                                    </div> */}
                                </div>
                            ))
                        }
                    </Wrapper>
                </Slider>
            </div>
        </div>
    )
}

export default SearchPlaylist
