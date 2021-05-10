import React from 'react'
import { Input } from 'antd';
import { IoChevronBackCircle, IoChevronForwardCircle } from "react-icons/io5";
import { useHistory } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import "./SearchBar.less"


const SearchBar = () => {

    let history = useHistory();

    return (
        <>
            <div className="HomeLayoutIcons">
                <div className="SearchBarNavButtons" onClick={() => history.goBack()}>
                    <IoChevronBackCircle />
                </div>
                <div className="SearchBarNavButtons" onClick={() => history.goForward()} >
                    <IoChevronForwardCircle />
                </div>
            </div>
            <Input placeholder="Seach" prefix={<BiSearch />} className="inputSearchBarHome" />
            <div style={{ width: "300px" }}>
            </div>
        </>
    )
}

export default SearchBar
