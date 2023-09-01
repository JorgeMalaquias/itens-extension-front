import styled from "styled-components";

const Container = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left:0;
    bottom:0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #777777CC;
    font-family: 'Roboto', sans-serif;
`
const Form = styled.form`
    width: 70%;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    background-color: #0000CD;
    color: white;
    font-family: 'Roboto', sans-serif;
    padding: 0px 16px 16px 16px;
    border-radius: 16px;
    > input, textarea, label{
        width:100%;
    }
    > input{
        height: 36px;
    }
    > textarea{
        height: 80px;
    }
    button {
        height: 30px;
        width: 70px;
        margin-top: 8px;
        margin-left: 8px;
    }
    > label{
        height: 20px;
        font-size: 16px;
        margin-top: 16px;
    }
`


const Style ={
    Form,
    Container
}
export default Style;