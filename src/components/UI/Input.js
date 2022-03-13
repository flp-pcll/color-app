import styled from "styled-components";

const Input = styled.input`
    color: ${props => props.hasError ? 'red' : 'green'};
    border: 1px solid ${props => props.hasError ? 'red' : '#d8d8da'};
    padding: .6rem;

    :focus {
        border-color: orange;
    }
`;

export default Input;