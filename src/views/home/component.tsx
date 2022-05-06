import React from 'react';
import styled from '@emotion/styled';
import SongCard from '../../components/cards/song/component';
import SongCardList from '../../components/cards/smallSongCard/component';
import { Box} from "@mui/material";
import Player from '../../components/player/player';

const Container = styled.div`
    width:100%;
    position: relative;
    padding-left: 30px;
    box-sizing: border-box;
    height: 42%; 
`
const Tittle = styled.h2`
    margin: 0;
    font-size: 22px; 
`

const AlbumsRoll = styled.div`
    margin-top: 14px;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    height: 280px;
`

const BottomContainer = styled.div`
    margin-top: 20px;
    display: flex;
    width: 100%;
`

const SongsContainer = styled.div`
    width: 63%;
    display: flex;
    flex-direction: column;
    gap: 20px
`

const VerticalScroll = styled.div`
    width: 90%; 
    height: 42%;
    overflow-y:scroll;
`

const PlayerContainer = styled.div`
    width: 37%;
    display: flex;
    flex-direction: column;
    gap: 20px
`

const Home = () => {
    return (
        <Container>
            <Box sx={{width: '100%'}}>
                <Tittle>Top Albums</Tittle>
                <AlbumsRoll>
                    <SongCard 
                        artist="L'imperatrice" 
                        image="https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/d/d/3/e/1065431618934436.jpg" 
                        name="Vacances"
                    />
                    <SongCard 
                        artist="L'imperatrice" 
                        image="https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/d/d/3/e/1065431618934436.jpg" 
                        name="Vacances"
                    />
                    <SongCard 
                        artist="L'imperatrice" 
                        image="https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/d/d/3/e/1065431618934436.jpg" 
                        name="Vacances"
                    />
                    <SongCard 
                        artist="L'imperatrice" 
                        image="https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/d/d/3/e/1065431618934436.jpg" 
                        name="Vacances"
                    />
                    <SongCard 
                        artist="L'imperatrice" 
                        image="https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/d/d/3/e/1065431618934436.jpg" 
                        name="Vacances"
                    />
                    <SongCard 
                        artist="L'imperatrice" 
                        image="https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/d/d/3/e/1065431618934436.jpg" 
                        name="Vacances"
                    />
                    <SongCard 
                        artist="L'imperatrice" 
                        image="https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/d/d/3/e/1065431618934436.jpg" 
                        name="Vacances"
                    />
                    <SongCard 
                        artist="L'imperatrice" 
                        image="https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/d/d/3/e/1065431618934436.jpg" 
                        name="Vacances"
                    />
                    <SongCard 
                        artist="L'imperatrice" 
                        image="https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/d/d/3/e/1065431618934436.jpg" 
                        name="Vacances"
                    />
                    <SongCard 
                        artist="L'imperatrice" 
                        image="https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/d/d/3/e/1065431618934436.jpg" 
                        name="Vacances"
                    />
                </AlbumsRoll>
            </Box>
            <BottomContainer>
                <SongsContainer>
                    <Tittle>Songs</Tittle>
                    <VerticalScroll>
                        <SongCardList artist='Parcels' name='Gamesofluck' duration='3:22' image='https://m.media-amazon.com/images/I/612ko+S+jhL._SS500_.jpg' />
                        <SongCardList artist='Parcels' name='Gamesofluck' duration='3:22' image='https://m.media-amazon.com/images/I/612ko+S+jhL._SS500_.jpg' />
                        <SongCardList artist='Parcels' name='Gamesofluck' duration='3:22' image='https://m.media-amazon.com/images/I/612ko+S+jhL._SS500_.jpg' />
                        <SongCardList artist='Parcels' name='Gamesofluck' duration='3:22' image='https://m.media-amazon.com/images/I/612ko+S+jhL._SS500_.jpg' />
                        <SongCardList artist='Parcels' name='Gamesofluck' duration='3:22' image='https://m.media-amazon.com/images/I/612ko+S+jhL._SS500_.jpg' />
                        <SongCardList artist='Parcels' name='Gamesofluck' duration='3:22' image='https://m.media-amazon.com/images/I/612ko+S+jhL._SS500_.jpg' />
                        <SongCardList artist='Parcels' name='Gamesofluck' duration='3:22' image='https://m.media-amazon.com/images/I/612ko+S+jhL._SS500_.jpg' />
                        <SongCardList artist='Parcels' name='Gamesofluck' duration='3:22' image='https://m.media-amazon.com/images/I/612ko+S+jhL._SS500_.jpg' />
                        <SongCardList artist='Parcels' name='Gamesofluck' duration='3:22' image='https://m.media-amazon.com/images/I/612ko+S+jhL._SS500_.jpg' />
                        <SongCardList artist='Parcels' name='Gamesofluck' duration='3:22' image='https://m.media-amazon.com/images/I/612ko+S+jhL._SS500_.jpg' />
                        <SongCardList artist='Parcels' name='Gamesofluck' duration='3:22' image='https://m.media-amazon.com/images/I/612ko+S+jhL._SS500_.jpg' />
                        <SongCardList artist='Parcels' name='Gamesofluck' duration='3:22' image='https://m.media-amazon.com/images/I/612ko+S+jhL._SS500_.jpg' />
                        <SongCardList artist='Parcels' name='Gamesofluck' duration='3:22' image='https://m.media-amazon.com/images/I/612ko+S+jhL._SS500_.jpg' />
                        <SongCardList artist='Parcels' name='Gamesofluck' duration='3:22' image='https://m.media-amazon.com/images/I/612ko+S+jhL._SS500_.jpg' />
                        <SongCardList artist='Parcels' name='Gamesofluck' duration='3:22' image='https://m.media-amazon.com/images/I/612ko+S+jhL._SS500_.jpg' />
                        <SongCardList artist='Parcels' name='Gamesofluck' duration='3:22' image='https://m.media-amazon.com/images/I/612ko+S+jhL._SS500_.jpg' />
                        <SongCardList artist='Parcels' name='Gamesofluck' duration='3:22' image='https://m.media-amazon.com/images/I/612ko+S+jhL._SS500_.jpg' />
                        <SongCardList artist='Parcels' name='Gamesofluck' duration='3:22' image='https://m.media-amazon.com/images/I/612ko+S+jhL._SS500_.jpg' />
                    </VerticalScroll>
                </SongsContainer>
                <PlayerContainer>
                    <Tittle>Playing now</Tittle>
                    <Player image='https://m.media-amazon.com/images/I/61Uxg-SWExL._AC_SL1500_.jpg' artist='Daft Punk' duration={200} name='Give Life Back to Music'></Player>
                </PlayerContainer> 
            </BottomContainer>
        </Container>
    )
};

export default Home;