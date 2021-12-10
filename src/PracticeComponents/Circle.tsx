import styled from "styled-components";

// interface object를 설명하는 것
interface CircleProps {
    bgColor: string;
    borderColor?: string;
}

interface ContainerProps {
    borderColor?: string;
    bgColor: string;
}


const Container = styled.div<ContainerProps>`
    width: 300px;
    height: 300px;
    border-radius: 300px;
    border: 4px solid ${props => props.borderColor};
    background-color: ${props => props.bgColor}; // 세미콜론 붙이기!
`


const Circle = ({bgColor, borderColor}:CircleProps) => {
    return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}/> 
}


export default Circle