import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    font-family: 'Roboto', sans-serif;
    padding: 16px;
    > *{
        width:80%;
    }
    > h1{
        top: 0;
        left: 0;
        right: 0;
        font-size: 40px;
        color: #00008B;
    }
    > h2{
        font-size: 20px;
        color: #00008B;
    }
`
const NewItem = styled.div`
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    color: white;
    font-family: 'Roboto', sans-serif;
    > button {
        background-color: #00008B;
        width: auto;
        height: 100%;
        text-align: center;
        color: white;
        border-radius: 16px;
        font-size: 16px;
    }
`

const Style ={
    Container,
    NewItem
}
export default Style;