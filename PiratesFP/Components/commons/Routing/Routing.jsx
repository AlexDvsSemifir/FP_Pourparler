// React Native Imports :
import React from "react";
import { View } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import NavBar from "../NavBar/NavBar";
import Bio from "../Bio";

let pages = [
    {
        to: "/home",
        name: "/Home"
    },
    {
        to: "/bio",
        name: "/Bio"
    },
    {
        to: "/carac",
        name: "/Caractéristiques principales"
    },
    {
        to: "/comp",
        name: "/Compétences"
    },
    {
        to: "/compSpe",
        name: "/Compétences Spéciales"
    },
    {
        to: "/stuff",
        name: "/Inventaire"
    },

]

export const Routing = (props) => {

    return (
        <View>
        <NavBar pages={pages} />
        <Routes>
            {/* <Route exact path="/" component={Home} /> */}
            <Route path="/bio" component={Bio} />
            {/* <Route path="/carac" component={Cara} /> */}
            {/* <Route path="/comp" component={Comp} /> */}
            {/* <Route path="/compSpe" component={CompSpe} /> */}
            {/* <Route path="/stuff" component={stuff} /> */}
        </Routes>
        </View>
    )
}

export default Routing 