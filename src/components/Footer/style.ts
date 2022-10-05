import styled from "@emotion/styled"

export const Layer = styled.div`
    display: flex;
    width: 100vw;
    background: #241E3A;
    height: 300px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
    gap: 30px;
    position: fixed;
    bottom: 0;

    img{
        width: 60px;
    }
    div{
        color: #A4A4A4;
    }
`