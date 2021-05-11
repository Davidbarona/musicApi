import styled from 'styled-components'

export const Slider = styled.div`
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    width: 77vw;
    @media screen and (max-width: 640px) {
        margin: '0 20px';
    }
    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        background-color: #f5f5f5;
    }

    &::-webkit-scrollbar {
        display: none;
        width: 6px;
        height: 6px;
        background-color: transparent;
        float: top;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: #555;
    }

    scrollbar-color: #000 #FFFFFF2E;
    scrollbar-width: thin;
`
export const SliderButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0;
    @media screen and (max-width: 640px) {
        margin: '0 20px';
        margin-left: 0;
    }
    & button {
        background-color: transparent;
        border: 0;
        border-radius: 8px;
        font-size: 20px;
        padding: 8px;
        margin: 2px;
        color: white;
        cursor: pointer;
        outline: none;
        transition: color .3s ease-in-out;
        @media screen and (max-width: 640px) {
            font-size: 18px;
            padding: 6px;
        }
        &:hover {
            color: #0099ff;
        }
    }
`



export const Wrapper = styled.div`
  margin: 1rem 2rem;
  width: 15.6rem;
  display: flex;
  @media screen and (max-width: 640px) {
        margin: 1rem;
        width: 10.3rem;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
  }
  &:hover .poster-container > div {
    //border: 2px solid red;
    opacity: 1;
    transition: all 0.5s;
  }
  &:hover .movie-text {
    color: white;
  }
`

export const handleOnClickSlide = (direction, slider) => {
    if (direction === 'right') {
        slider.current.scrollBy({
            top: 0,
            left: slider.current.getBoundingClientRect().width,
            behavior: 'smooth'
        });
    }
    if (direction === 'left') {
        slider.current.scrollBy({
            top: 0,
            left: -slider.current.getBoundingClientRect().width,
            behavior: 'smooth'
        });
    }
}