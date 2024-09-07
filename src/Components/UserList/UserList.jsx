import React from "react";
import List from "../List/List";
import { H2, MainDiv } from "./UserList.style";

const UserList = () => {

    return (
        <MainDiv>
            <H2>Customers</H2>
            <List />
        </MainDiv>
    )
};

export default React.memo(UserList);