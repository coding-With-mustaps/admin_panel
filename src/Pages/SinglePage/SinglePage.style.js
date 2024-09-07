import styled from "styled-components";
import { H2 } from '../../Components/UserList/UserList.style';


const SinglePage = styled.section`
    position: relative;
    width: 100%;
    max-height: 600px;
    margin: auto;
    height: max-content;
    box-shadow: 0  0 6px rgb(0, 0, 0, 0.3);
    padding: 12px;
    background-color: white;
    color: black;
    overflow-x: auto;
`

const InnerDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    /* flex-wrap: wrap; */
    justify-content: flex-start;
    align-items: flex-start;

    .profileImageContainer {
        flex: 1
    }

    .detailsContainer {
        flex: 3;
    }
`
const Header2 = styled(H2)`
    color: gray;
`


export { SinglePage, InnerDiv, Header2 };