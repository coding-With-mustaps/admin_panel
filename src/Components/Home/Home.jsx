import React from "react";
import { HomeMainWrapper } from "./Home.style";
import CardContainer from "./Cards/CardContainer";
import ChartContainer from "../Chart/ChartContainer";


const Home = () => {

    return (
        <HomeMainWrapper>
           <CardContainer />
           <ChartContainer />
        </HomeMainWrapper>
    )
};

export default React.memo(Home);