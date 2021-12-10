import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";


interface RouteParmas {
    coinId: string;
}

interface RouterState {
    name?:string;
    rank?:number;
}

const Container = styled.div`
    padding: 0px 20px;
    max-width: 480px;
    margin:0 auto;
`;

const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
    color:${props => props.theme.accentColor};
    font-size: 48px;
`

const Loader = styled.span`
    display: block;
    text-align: center;
`;

const Coin = () => {

    const { coinId } = useParams() as RouteParmas; // 이건 coinId을 (Param) 받음
    const [loading, setLoading] = useState(true);
    const { state } = useLocation(); // Link state로 내려준 값을 받을 수 있다.
    const name = state?.name || "loading..." as RouterState;
    const rank = state?.rank || 0 as RouterState;
    // 문제는 버튼을 눌러야 Location 정보가 넘어간다.
    return (
        <Container>
            <Header>
                <Title>{name}</Title>
            </Header>
            { loading ? (<Loader>Loading...</Loader>) : null}
        </Container>
    )
}

export default Coin;