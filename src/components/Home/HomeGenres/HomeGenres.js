import React, { useRef } from 'react'
import { useSelector } from 'react-redux';
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";
import { SliderButtons, Wrapper, Slider, handleOnClickSlide } from '../../../helpers/slider';
import "./HomeGenres.less"
import { Link } from 'react-router-dom';

const HomeGenres = () => {

    const slider = useRef(null)

    let genresData = useSelector(store => store.homeReducer.genres)
    var genres = genresData?.data?.categories.items

    return (
        <div className="HomeLayoutCard11" >
            <div style={{ display: "flex", justifyContent: "space-between", width: "100%", paddingInline: "15px" }}>
                <div style={{ fontSize: "30px", fontWeight: "700" }}>
                    Genres
              </div>
                <div style={{ display: "flex", alignItems: "center", marginRight: "10px", fontSize: "14px" }}>
                    <Link to="/genres"><div style={{color:"white", marginLeft:"10px", marginBottom:"5px"}}>See all</div></Link>
                    <SliderButtons>
                        <button onClick={() => handleOnClickSlide('left', slider)}><IoChevronBackOutline /></button>
                        <button onClick={() => handleOnClickSlide('right', slider)}><IoChevronForwardOutline /></button>
                    </SliderButtons>
                </div>
            </div>
            <Slider ref={slider}>
                <Wrapper>
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
                </Wrapper>
            </Slider>
        </div>
    )
}

export default HomeGenres
