import styled from "styled-components";

const Detail = (props) => {
    return (
        <Container>
            <Background>
                <img src="https://free4kwallpapers.com/uploads/originals/2016/05/05/jessica-alba-45-wallpaper.jpg" alt="This is an Image" />
            </Background>
            <ImageTitle>
                <img src="https://free4kwallpapers.com/uploads/originals/2016/05/05/jessica-alba-45-wallpaper.jpg" alt="This is an Image" />
            </ImageTitle>
            <ContentMeta>
                <Controls>
                    <Player>
                        <img src="/images/play-icon-black.png" alt="Play" />
                        <span>Play</span>
                    </Player>
                </Controls>
            </ContentMeta>
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);

`;

const Background = styled.div`
    left: 0px;
    right: 0px;
    top: 0px;
    opacity: 0.8;
    position: fixed;
    z-index: -1;

    img {
        width: 100vw;
        height: 100vw;

        @media (max-width: 768px) {
            width: initial;
        }
    }
`;

const ImageTitle = styled.div`
    align-items: flex-end;
    display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    margin: 0px auto;
    height: 30vw;
    min-height: 170px;
    padding-bottom: 24px;
    width: 100%;

    img {
        max-width: 600px;
        min-width: 200px;
        width: 35vw;
    }
`;

const ContentMeta = styled.div`
    max-width: 874px;
`;

const Controls = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    margin: 24px 0px;
    min-height: 56px;
`;

const Player = styled.button`
    font-size: 15px;
    margin: 0px 22px 0px 0px;
    padding: 0px 24px;
    height: 56px;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 1.8px;
    text-align: center;
    text-transform: uppercase;
    background: rgb(249, 249, 249);
    border: none;
    color: rgb(0, 0, 0);
    
    img {
        width: 32px;
    }

    &:hover {
        background: rgb(198, 198, 198);
    }

    @media (max-width: 768px) {
        height: 45px;
        padding: 0px 12px;
        font-size: 12px;
        margin: 0px 10px 0px 0px;

        img {
            width: 25px;
        }
    }
`;

export default Detail;