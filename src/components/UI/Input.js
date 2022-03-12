import styled from "styled-components";

const Input = styled.input`
    border-color: ${props => props.hasError ? 'red' : 'gray'};

    color: ${props => props.hasError ? 'red' : 'green'};
`;

export default Input;