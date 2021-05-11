import React from 'react'
import { Button, Carousel } from 'antd';
import {useSelector } from 'react-redux';
import "./HomeCarousel.less"

const HomeCarousel = () => {

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
    
      };
    

    let releases = useSelector(store => store.homeReducer.data)
    var releaseAlbums = releases?.data?.albums.items

    return (
        <Carousel effect="fade" {...settings} className="HomeCarousel" >
        {
          releaseAlbums && releaseAlbums.map((e) => {
            return (
              <div className="HomeRow2Content">
                <div className="HomeBackImageContainer">
                  <img className="HomeBackImage" src={e.images[0].url} alt="alt" />
                </div>
                <div className="HomeBackText">
                  <div className="HomeTitleSection">
                    Trending New Hits
                </div>
                  <div className="HomeTopTitle">
                    {e.name}
                  </div>
                  <div className="HomeTopDescription">
                    <div>
                      {e.artists[0]?.name}
                    </div>
                    <div style={{ fontSize: "14px" }}>
                      {e.release_date}
                    </div>
                  </div>
                  <div className="HomeButtonContainer">
                    <Button className="HomeButonDetails" size="large" type="primary">Details</Button>
                  </div>
                </div>
              </div>
            )
          })}

      </Carousel>
    )
}

export default HomeCarousel
