import React from "react";
import { MainUserContainer } from "./UserContainer.style";
import AddUser from "./AddUser/AddUser";

const UserContainer = () => {

    return (
        <MainUserContainer>
            <AddUser />
        </MainUserContainer>
    )
};

export default React.memo(UserContainer);