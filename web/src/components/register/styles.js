import styled from 'styled-components';

export const Box = styled.div`
    margin-top: 0;
    padding: 5rem;
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    box-shadow: -7px 23px 34px -16px rgba(0,0,0,0.75);
    align-items: center;
    width: 60rem;
    margin: auto;
    border-radius: 5px;
    box-sizing: border-box;
`;

export const Input = styled.input`
    padding: 1.2em;
    width: 20rem;
    flex: ${props => props.flex || 1};
    margin: 5px;
    font-size: 1rem;
    border-radius: 5px;
    border: 0;
    background: #F0F0F2;

    :focus{
        background: #FFF;
    }
`;

export const Button = styled.button`
    padding: 1rem;
    width: 15rem;
    align-self: center;
    margin: 1rem;
    border: 1px solid #D2D7D9;
    border-radius: 5px;
    font-size: 16px;
    background: #39B9CB;
    color: #FFF;
    font-weight: 600;
    letter-spacing: 2px;

    :hover{
        cursor: pointer;
        opacity: .8;
    }
`;

export const Flex = styled.div`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
`;