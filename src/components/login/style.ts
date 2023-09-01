import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
`
const Form = styled.form`
    width: 100%;
    height: 240px;
    background-color: #0000CD;
    color: white;
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    padding: 0px 16px 16px 16px;
    > input, textarea, label{
        width:100%;
    }
    > input{
        height: 30px;
    }
    > textarea{
        height: 80px;
    }
    > button {
        height: 30px;
        width: 70px;
        margin-top: 4px;
    }
    > label{
        height: 20px;
        font-size: 12px;
        margin-top: 16px;
    }
`
const Style = {
    Container,
    Form
}
export default Style;