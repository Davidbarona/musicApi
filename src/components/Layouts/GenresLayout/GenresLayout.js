import React, { useEffect } from 'react'
import SideBar from '../../SideBar/SideBar';
import { useDispatch } from 'react-redux';
import "./GenresLayout.less";
import SearchBar from '../../SearchBar/SearchBar';

const GenresLayout = () => {


    // const color1 = () => {
    //   return ("#"+Math.floor(Math.random()*16777215).toString(16))
    // }

    const dispatch = useDispatch()

    useEffect(() => {
        window.scroll(0, 0)
    
    }, [dispatch])

    return (
        <div className="LayoutContainer">

            <div className="HomeSideBarContainer">
                <SideBar />
            </div>
            <div className="GenresLayoutContent">

                <div className="GenresLayoutrow1">
                    <SearchBar />
                </div>

                <div>
                    {/* content */}
                </div>
            </div>
        </div>
    )
}

export default GenresLayout