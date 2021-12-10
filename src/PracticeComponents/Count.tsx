import React, {useState} from "react"
import styled from "styled-components"


const CountContainer = styled.div`
    display:flex;
    justify-content: space-between;
    width: 400px;
    height: 300px;
    margin-top:40px;
`

const CountBtn = styled.button`
    width: 100px;
    height: 50px;
    background: ${props => props.theme.bgColor};
    color: ${props => props.theme.textColor};
    border: 0px;
    &:hover {
        color:#111;
        background: grey;
    }
`




const Count = () => {

    const [count, setState] = useState(0)

    return (
        <div>
            <CountContainer>
                <CountBtn onClick={() => setState(count + 1)}>Plus</CountBtn>
                <span>{count}</span>
                <CountBtn onClick={() => setState(count - 1)}>Minus</CountBtn>
            </CountContainer>
        </div>
    )
}

export default Count
