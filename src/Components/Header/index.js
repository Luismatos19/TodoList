import React from "react";
import { Link } from "react-router-dom";

import { Nav, Links, Menu, Title } from "./styled";
import {
    IoHomeOutline,
    IoLogInOutline,
    IoPersonAdd,
    IoMenu,
} from "react-icons/io5";

export default function Head() {
    return (
        <Nav>
            <Menu>
                <IoMenu size={35} />
            </Menu>
            <Title>TOdO LIsT</Title>
            <Links>
                <Link to={"/home"}>
                    <IoHomeOutline size={35} />
                </Link>
                <Link to={"/"}>
                    <IoLogInOutline size={35} />
                </Link>
                <Link to={"/register"}>
                    <IoPersonAdd size={35} />
                </Link>
            </Links>
        </Nav>
    );
}
