import styled from "styled-components";

const Container = styled.div`
    width: 70%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-family: 'Roboto', sans-serif;
    > h1{
        color: #0000CD;
        font-size: 36px;
    }
    > a {
        color: black;
    }
`
const Form = styled.form`
    width: 60%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: #0000CD;
    color: white;
    font-family: 'Roboto', sans-serif;
    border-radius: 16px;
    padding: 16px;
    > div{
        text-align: center;
        font-size: 16px;
    }
    > input{
        width:100%;
        height: 36px;
    }
    > button {
        height: 30px;
        width: 70px;
        margin-top: 4px;
    }
`
const Style = {
    Container,
    Form
}
export default Style;