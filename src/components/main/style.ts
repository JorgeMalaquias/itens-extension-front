import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
`
const NewItem = styled.div`
    position: absolute;
    top: 40px;
    width: 80%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: white;
    font-family: 'Roboto', sans-serif;
    > button {
        background-color: #00008B;
        width: 100%;
        height: 40px;
        text-align: left;
        color: white;
    }
`

const Style ={
    Container,
    NewItem
}
export default Style;