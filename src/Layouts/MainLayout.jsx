import { Outlet } from "react-router-dom";
import React, { useContext } from "react";
import AsideBar from "../Components/AsideBar/AsideBar";
import Header from "../Components/Header/Header";
import { Main, Section } from "./MainLayout.style";
import { ThemeContext } from "../Context/ThemeContext";


// Styled components

const MainLayout= () => {
    const { theme } = useContext(ThemeContext);

    return (<Section variate={theme}>
                <Header />
                <AsideBar />
                {/* <div style={{height: "150vh"}}></div> */}
                <Main variate={theme}>
                    <Outlet />
                </Main> 
            </Section>
    )
};

export default React.memo(MainLayout);