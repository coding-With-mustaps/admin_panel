import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";


// const {theme} = useContext(ThemeContext);

const Aside = styled.aside`
    position: fixed;
    top: 0;
    left: 0;
    width: 250px;
    height: 100vh;
    background-color: ${ ({variate}) => variate === "light" ? "white" : "black" };
    border-right: ${ ({variate}) => variate === "light" ? "2px solid var(--lightMode-border-color)" : "2px solid var(--darkMode-border-color)" };
`

const H1 = styled.h1`
    font-size: 1.5rem;
    color: var(--blue-color);
    padding: 20px;
    text-align: center;    
    border-bottom: ${ ({variate}) => variate === "light" ? "2px solid var(--lightMode-border-color)" : "2px solid var(--darkMode-border-color)" };
    margin-bottom: 20px;
`
const H2  = styled.h2`
    font-size: 17px;
    color: #9b9494;
    padding: 10px;
`

const Ul = styled.ul`
    padding-left: 10px;
`
const UlList = styled.li`
    margin: 10px 0;
    font-size: 1.25rem;
    padding: 5.2px;
    border-radius: 2.2px;
    transition: background-color 0.5s ease;

    &:hover {
        background: ${ ({variate}) => variate === "light" ? "rgb(0, 0, 0, 0.2)" : "rgb(50, 90, 100, 0.64)"};
    }
`
const StyleLink = styled(RouterLink)`
    text-decoration: none;
    color: ${ ({variate}) => variate === "light" ? "black" : "white" };
    display: flex;
    align-items:center;
    column-gap: 5px;
`

export { Aside, H1, H2, Ul, UlList, StyleLink };