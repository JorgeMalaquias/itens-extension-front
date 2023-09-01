import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    padding: 16px;
    > *{
        width:80%;
        margin-bottom: 40px;
    }
    > h1{
        top: 0;
        left: 0;
        right: 0;
        font-size: 40px;
        color: #00008B;
    }
`
const Buttons = styled.div`
    min-height: 50px;
    display: flex;
    justify-content: space-between;
    color: white;
    font-family: 'Roboto', sans-serif;
    > button {
        background-color: #00008B;
        width: 140px;
        height: 100%;
        text-align: center;
        color: white;
        border-radius: 16px;
        font-size: 16px;
    }
`
const ItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    > *{
        margin-bottom: 16px;
    }
    > h2{
        width: 80%;
        text-align: left;
        font-size: 20px;
        color: #00008B;
    }
    > h3{
        width: 80%;
        text-align: center;
        font-size: 16px;
        color: #00008B;
    }
`

const Style ={
    Container,
    Buttons,
    ItemsContainer
}
export default Style;