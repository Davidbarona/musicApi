import React, { useRef } from 'react'
import { useSelector } from 'react-redux';
import { SliderButtons, Wrapper, Slider, handleOnClickSlide } from '../../../helpers/slider';
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";

import "./SearchArtists.less"

const SearchArtists = () => {

    const slider = useRef(null)

    let searchData1 = useSelector(store => store.searchReducer.artists)
    let artists = searchData1?.data?.artists?.items


    if (searchData1.length !== 0) {
     console.log(searchData1.length, "LARGO")
        return (
            <div className="searchArtists_Container">

                <div className="searchTracks_title">
                    <div style={{ marginLeft: "20px" }} className="searchTracks_subTitle1">Artists</div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div className="searchTracks_subTitle2">See all</div>
                        <SliderButtons>
                            <button onClick={() => handleOnClickSlide('left', slider)}><IoChevronBackOutline /></button>
                            <button onClick={() => handleOnClickSlide('right', slider)}><IoChevronForwardOutline /></button>
                        </SliderButtons>
                    </div>
                </div>
                <div >
                    <Slider ref={slider}>
                        <Wrapper>
                            {
                                artists && artists.map(e => (

                                    e.images[0]?.url &&
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
                        </Wrapper>
                    </Slider>
                </div>

            </div>
        )
    } else {
        return (
            <div></div>
        )
    }

}

export default SearchArtists
