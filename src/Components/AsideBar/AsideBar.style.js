import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

const Aside = styled.aside`
    position: fixed;
    top: 0;
    left: 0;
    width: 250px;
    height: 100vh;
    background-color: white;
    border-right: 2px solid rgb(0, 0, 0, 0.1);
`

const H1 = styled.h1`
    font-size: 1.5rem;
    color: var(--blue-color);
    padding: 20px;
    text-align: center;
    border-bottom: 2px solid rgb(0, 0, 0, 0.1);
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
        background-color: rgb(0, 0, 0, 0.2);
    }
`
const StyleLink = styled(RouterLink)`
    text-decoration: none;
    color: black;
    display: flex;
    align-items:center;
    column-gap: 5px;
`

export { Aside, H1, H2, Ul, UlList, StyleLink };