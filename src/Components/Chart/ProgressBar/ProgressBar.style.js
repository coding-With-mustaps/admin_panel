import styled from "styled-components";

const Progress = styled.div`
    box-shadow: 0 0 5px rgb(0, 0, 0, 0.5);
    min-height: 200px;
    height: 600px;
    flex: 2;
`

const ProgressInner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items:center;
    margin-top: 10px;
`

const CircularContainer = styled.div`
    width: 100%;
    height: 320px;
    max-width: 320px;
    margin: 22px 0;
`

export {Progress, ProgressInner, CircularContainer };