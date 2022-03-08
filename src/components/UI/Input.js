import styled from "styled-components";

export const Input = styled.input`
    border-color: ${props => props.hasError ? 'red' : 'gray'};

    color: ${props => props.hasError ? 'red' : 'green'};
`;