import { Outlet } from "react-router-dom";
import React from "react";
import AsideBar from "../Components/AsideBar/AsideBar";
import Header from "../Components/Header/Header";
import { Main } from "./MainLayout.style";


// Styled components

const MainLayout= () => {

    return (<>
                <Header />
                <AsideBar />
                {/* <div style={{height: "150vh"}}></div> */}
                <Main>
                    <Outlet />
                </Main> 
            </>
    )
};

export default React.memo(MainLayout);