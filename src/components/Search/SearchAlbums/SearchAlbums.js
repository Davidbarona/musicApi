import React, { useRef } from 'react'
import { useSelector } from 'react-redux';
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";
import { SliderButtons, Wrapper, Slider, handleOnClickSlide } from '../../../helpers/slider';
import "./SearchAlbums.less"

const SearchAlbums = () => {

    const slider = useRef(null)

    let {data} = useSelector(store => store.searchReducer.albums)
    let albumsData =  data?.albums?.items



    return (
        <div className="AlbumSearchLayoutCard1 " >
        <div style={{ display: "flex", justifyContent: "space-between", width: "100%", paddingInline: "15px" }}>
            <div style={{ fontSize: "30px", fontWeight: "700" }}>
                Albums
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
                        albumsData && albumsData.map(e => (
                            <div className="AlbumSearchAlbumCard">
                                <div>
                                    <img className="AlbumSearchAlbumCardImage" src={e.images[1].url} alt="alt" />
                                </div>
                                <div className="AlbumSearchAlbumCardTitle" >
                                    {e.name}
                                </div>
                                <div className="AlbumSearchAlbumCardArtist" >
                                    {e.artists[0].name}
                                </div>
                            </div>
                        ))
                    }
                </Wrapper>
            </Slider>
        </div>
    </div>
    )
}

export default SearchAlbums
