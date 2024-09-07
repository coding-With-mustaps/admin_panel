import styled from "styled-components";

const AreaChartContainer = styled.div`
    /* box-shadow: 0 0 5px rgb(0, 0, 0, 0.5); */
    box-shadow: ${ ({variate}) => variate === "light" ? 
        "var(--lightMode-box-shadow)" : 
        "var(--darkMode-box-shadow)"};
    height: max-content;
    padding: 10px 5px;
    width: 100%;
    height: 600px;
    flex: 3
`

const H2 = styled.h2`
    color: gray;
    text-align:center;
    margin: 10px 0;
`

export { AreaChartContainer, H2 };