import styled from "styled-components";

const Form = styled.form`
    width: 100%;
    background-color: white;
    color: black;
    /* margin-top: 100px; */
    /* background-color: ${({variate}) => variate === "light" ? "white": "black"}; */
`

const InnerDiv = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, minmax(200px, 1fr));
    box-shadow: 0 0 5px rgb(0, 0, 0, 0.3);
    /* box-shadow: ${ ({variate}) => variate === "light" ? 
        "var(--lightMode-box-shadow)" : 
        "var(--darkMode-box-shadow)"}; */
    padding: 20px;
    column-gap: 10px;
`


const User = styled.section`
    /* padding: 10px 0;  */

`
const Input = styled.input`
    outline: none;
    border: 0;
    border-bottom: 2px solid rgb(0, 0, 0, 0.4);
    color: ${({variate}) => variate === "light" ? "black": "white"};
    background-color: white;
    width: 50%;
    max-width: 300px;
    padding: 5px;
    font-size: 1.1rem;
    font-weight: 700;
`

const H2 = styled.h2`
    color: green; 
    box-shadow: 0 0 5px rgb(0, 0, 0, 0.3);
    padding: 20px;
    margin: 20px 0;
`
const Img = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;

`
export { User, Input, Form, InnerDiv, H2, Img };