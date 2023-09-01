import styled from "styled-components";

const Container = styled.div`
    width: 80%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    border-radius: 16px;
    overflow: hidden;
    > *{
        width: 100%;
        height: 100%;
        color: white;
        font-family: 'Roboto', sans-serif;
    }
    > button{
        height: 50px;
        font-size: 20px;
        background-color: #000080;
        text-align: left;
        padding: 0 0 0 20px;
    }
    > p{
        height: 60px;
        font-size: 16px;
        background-color: white;
        color: black;
        padding: 20px 0 0 20px;
    }
`

const Style = {
    Container
}

export default Style;