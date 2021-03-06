import styled from "styled-components";

export const Box = styled.div`
  margin-top: 0;
  padding: 5rem;
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  box-shadow: -7px 23px 34px -16px rgba(0, 0, 0, 0.75);
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
  background: #f0f0f2;
  border: 3px solid transparent;

  :focus {
    background: #fff;
    border: 3px solid gray;
  }
`;

export const Button = styled.button`
  padding: 1rem;
  width: 11rem;
  margin: auto;
  border: 1px solid #d2d7d9;
  border-radius: 5px;
  font-size: 16px;
  background: ${props => props.bg || "#39B9CB"};
  color: #fff;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;

  :hover {
    cursor: pointer;
    opacity: 0.8;
  }

  :disabled {
    cursor: not-allowed;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "center"};
  align-items: ${props => props.align || "auto"};
`;
