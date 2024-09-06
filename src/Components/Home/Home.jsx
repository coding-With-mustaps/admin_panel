import React from "react";
import { HomeMainWrapper } from "./Home.style";
import CardContainer from "./Cards/CardContainer";
import ChartContainer from "../Chart/ChartContainer";
import CurrentTransactionList from "../CurrentTransactionLIst/CurrentTransactionList";
import { Link } from "react-router-dom";


const Home = () => {

    return (
        <HomeMainWrapper>
           <CardContainer />
           <ChartContainer />
           <CurrentTransactionList />
           <div style={{textAlign: "center", margin: "20px 0"}}>
                <Link to="">See all daily transactions</Link>
           </div>
        </HomeMainWrapper>
    )
};

export default React.memo(Home);