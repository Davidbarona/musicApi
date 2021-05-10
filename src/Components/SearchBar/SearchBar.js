import React from 'react'
import { Form, Input } from 'antd';
import { IoChevronBackCircle, IoChevronForwardCircle } from "react-icons/io5";
import { useHistory } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import "./SearchBar.less"


const SearchBar = () => {

    let history = useHistory();

    const onFinish = (values) => {
        console.log('Success:', values);
        history.push(`/search/${values.search}`)
        values.search = ""
    };

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

            <Form onFinish={onFinish}>
                <Form.Item
                    name="search">
                    <Input placeholder="Seach" prefix={<BiSearch />} className="inputSearchBarHome" />
                </Form.Item>
            </Form>

        </>
    )
}

export default SearchBar