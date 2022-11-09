import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
    const estilosDaHomePage = {
        //backgroundColor: "red"
    };

    return (
        <>
            <CSSReset />
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    // backgroundColor: "red",
                }}
            >
                <Menu />
                <Header />
                <TimeLine playlists={config.playlists}>Conteúdo</TimeLine>
            </div>
        </>
    );
}

export default HomePage;

const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
    .banner {
        margin-top: 50px;
        width: 100%;
        height: 230px;
        border-radius: 0;
        object-fit: cover;
    }
`;
function Header() {
    return (
        <StyledHeader>
            <img
                className="banner"
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=fill&w=870&q=80"
                alt="Banner"
            />
            <section className="user-info">
                <img
                    src={`https://github.com/${config.github}.png`}
                    alt="Foto de perfil do GitHub"
                />
                <div>
                    <h2>{config.name}</h2>
                    <p>{config.job}</p>
                </div>
            </section>
        </StyledHeader>
    );
}

function TimeLine(props) {
    const playlistsNames = Object.keys(props.playlists);
    // Statement "for"							| Pesquisar melhor
    // Retorno por expressão "forEach" ou "map" | esse assunto
    return (
        <StyledTimeline>
            {playlistsNames.map((playlistsName) => {
                //map para pegar a lista como um todo
                const videos = props.playlists[playlistsName];
                return (
                    <section>
                        <h2>{playlistsName}</h2>
                        <div>
                            {videos.map((video) => {
                                //map para pegar cada video da lista
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>{video.title}</span>
                                    </a>
                                );
                            })}
                        </div>
                    </section>
                );
            })}
        </StyledTimeline>
    );
}
