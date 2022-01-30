import React from "react";

import {Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { View } from "react-native";

export const NavBar = (props) => {
    return ( 
        <View>
            <Nav id='NavBar' fill variant="tabs" defaultActiveKey="/Home">
                {props.page && props.pages.map((pages, index) => {
                    return ( 
                        <Nav.Item>
                            <Nav.Link key={index} to={pages.to}>
                                    {pages.name}
                            </Nav.Link>
                        </Nav.Item>
                    )
                })}

            </Nav>
        </View>
    )
}

export default NavBar;