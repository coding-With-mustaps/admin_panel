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
    border: 2px solid rgb(0, 0, 0, 0.2);
    height: 100%;
    box-shadow: 0  0 6px rgb(0, 0, 0, 0.3);
    padding: 10px;

    display: flex;
    justify-content:space-between;
    color: rgb(0, 0, 0, 0.5);
    /* align-items: center; */
`



export { CardContainer, MainCard, FlexDiv };