import styled from "styled-components";

const FlexDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
`

const CardContainer = styled.div`
    height: 200px;
    width: 99%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(4, minmax(120px, 1fr));
    justify-content:center;
    gap: 20px;
`;

const MainCard = styled.div`
    /* border: 2px solid rgb(0, 0, 0, 0.2); */
    border: ${ ({variate}) => variate === "light" ? 
        "2px solid var(--lightMode-border-color)" : 
        "2px solid var(--darkMode-border-color)" };
    height: 100%;
    box-shadow: ${ ({variate}) => variate === "light" ? 
        "var(--lightMode-box-shadow)" : 
        "var(--darkMode-box-shadow)"};
    padding: 10px;
    display: flex;
    justify-content:space-between;
    color: ${ ({variate}) => variate === "light" ? "rgb(0, 0, 0, 0.5)" : "white"};
    /* align-items: center; */
`



export { CardContainer, MainCard, FlexDiv };