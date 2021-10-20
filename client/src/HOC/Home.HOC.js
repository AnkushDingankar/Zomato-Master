import React,{ Component } from "react";

import { Route } from "react-router";

//Layout
import {HomeLayout} from "../Layout/HomeLayout";

const HomeLayoutHOC = ({component:Component, ...rest}) =>{
    return(
        <>
            <Route
                {...rest}
                component={(props) => (
                    <HomeLayout>
                        <Component {...rest} />
                    </HomeLayout>
                )
                }
            />
        </>
    )
};

export default HomeLayoutHOC;