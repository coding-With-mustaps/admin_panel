import styled from "styled-components";

const setBorderColor = (theme) => theme === "light" ? "2px solid rgb(0, 0, 0, 0.1)" : "2px solid rgb(50, 90, 100, 0.64)";
const setBackgroundColor = (theme) => theme === "light"? "white": "black";


const HeaderStyle = styled.header`
    width: calc(100% - 250px);
    background: ${({variate}) => setBackgroundColor(variate)};
    position: sticky;
    top: 0;
    float: right;
    border-bottom: ${ ({variate}) => setBorderColor(variate)};
    padding-bottom: 9px;
    margin-bottom: 10px;
    z-index: 9999;
`;




export { HeaderStyle };