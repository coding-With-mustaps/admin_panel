import styled from "styled-components";

const Section = styled.section`
    width: 100%;
    /* min-height: 100vh; */
    height: 100%;
    background: ${({variate}) => variate === "light"? "white": "black"};
    color: ${({variate}) => variate === "light"? "black": "white"};
`

const Main = styled.main`
    /* height: 100%; */
    /* padding-top: 68px; */
    /* margin-top: 85px; */
    margin-left: 250px;
    background: ${({variate}) => variate === "light"? "white": "black"};
    color: ${({variate}) => variate === "light"? "black": "white"};
`


export { Main, Section };