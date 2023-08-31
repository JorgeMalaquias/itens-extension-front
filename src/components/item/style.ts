import styled from "styled-components";

const Container = styled.div`
    width: 80%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    > *{
        width: 100%;
        color: white;
        font-family: 'Roboto', sans-serif;
    }
    > button{
        font-size: 16px;
        background-color: #000080;
        height: 30px;
    }
    > p{
        font-size: 10px;
        background-color: #0000CD;
        height: 40px;
    }
`

const Style = {
    Container
}

export default Style;