import styled from "styled-components";


export const $SearchButton = styled.button`
    background-color: #5dade2 ;
    color: #ffffff;
    border: 1px solid black;
    border-radius: 8px;
    padding: 0.6rem 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 4.5rem;
    height: 3.5rem;

    font-size: 1.2rem;
    transition: background-color 0.3s;
    transform: 0.2s;

    &:hover{
        background-color: #000000;
        transform: scale(1.05);
        color: #000;
    }

    &:focus{
        outline: 2px solid #ffd166;
        outline-offset: 2px;
    }

`