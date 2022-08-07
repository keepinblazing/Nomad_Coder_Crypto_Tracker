import { useState } from "react";
import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

interface CircleProps {
  bgColor: string;
  borderColor?: string;
    text ? : string;
}

interface PlayerShape {
  name: string;
  age: number;
}

function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
    const [counter, setCounter] = useState<number|string>(0);
    setCounter(2)
    setCounter("hello" )
  return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} >
    {text}
  </Container>;
} 

export default Circle;

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
  border: 1px solid ${(props) => props.borderColor};
`;

const sayHello = (playerObj: PlayerShape) =>
  `Hello ${playerObj.name} your are ${playerObj.age} year.old`;

sayHello({ name: "nico", age: 12 });
sayHello({ name: "h1", age: 12 });
