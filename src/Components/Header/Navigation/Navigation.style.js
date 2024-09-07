import styled from "styled-components";
import { FormInput } from "../../ReusableStyles/Form";


const Nav = styled.nav`
    width: 100%;
    display: flex;
    justify-content:space-between;
    align-items:center;
    padding: 15px 20px;
    background-color: ${({variate}) => variate === "light" ? "light" : "black"};
`;

const Form = styled.form`
    width: 300px;
    background-color: white;
    border: 2px solid rgb(0, 0, 0, 0.3);
    display: flex;
    align-items:center;
    border-radius: 3.5px;
    /* display: ${ () => window.innerWidth < "600" ? "none" : ""} */
`

const Input = styled(FormInput)`
    border: none;
`;

const Ul = styled.ul`
    display: flex;
    align-items:center;
    justify-content:center;
`;

const Li = styled.li`
    position: relative;
    list-style: none;
    margin-right: 20px;
    cursor: pointer;
`;

const SpanDigit = styled.span`
    background-color: red;
    color: white;
    padding: 2px 3px;
    border-radius: 3px;
    position: absolute;
    top: -9px;
    right: -8px;
`

const Img = styled.img`
    border-radius: 50%;
    width: 30px;
    height: 30px;
    margin-right: 20px;
`
const ToggleButton = styled.button`
    background: none;
    border: 0;
    margin-right: 20px;
    cursor: pointer;
`
export { Nav, Form, Input, Ul, Li, Img, SpanDigit, ToggleButton };