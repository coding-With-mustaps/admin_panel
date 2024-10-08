import styled from "styled-components";
import { FormInput } from "../../ReusableStyles/Form";


const Nav = styled.nav`
    width: 100%;
    display: flex;
    justify-content:space-between;
    align-items:center;
    padding: 15px 20px;
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
    list-style: none;
    margin-right: 20px;
    cursor: pointer;
`;

const Img = styled.img`
    border-radius: 50%;
    width: 30px;
    height: 30px;
    margin-right: 20px;
`

export { Nav, Form, Input, Ul, Li, Img };