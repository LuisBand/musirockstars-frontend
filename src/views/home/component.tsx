import styled from '@emotion/styled';
import SongCard from '../../components/cards/song/component';
import { Box} from "@mui/material";
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import ArtistCard from '../../components/cards/artist/component';

const Container = styled.div`
    width: 100%;
    height: 100%
    position: relative;
    padding-left: 30px;
    box-sizing: border-box;
    display: grid;
    grid-template-rows: 1fr 1fr;
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

interface _album {
    id: number;
    name: string;
    image: string;
    price_virtual: number;
    proce_physical: number;
    stock: number;
    release: string;
}

interface _artist {
    id: number;
    name: string;
    image: string;
    nationality: string;
    description?: string;
    topfive?: {};
}

const Home = () => {

    const albums = useSelector((state: any) => state.albums.albums)
    const artists = useSelector((state: any) => state.artists.artists)


    return (        
        <Container>
            <Box sx={{width: '100%', height: '100%'}}>
               <Tittle>Top Albums</Tittle>
                <AlbumsRoll>
                    {albums?.map((album: _album) => (
                        <SongCard 
                            artist="L'imperatrice" 
                            image={album.image}
                            name={album.name}
                            identifier={album.id}
                        />
                    ))}

                </AlbumsRoll>
            </Box>
            <Box sx={{width: '100%', height: '100%'}}>
               <Tittle>Top Artists</Tittle>
                <AlbumsRoll>
                    {artists?.map((artist: _artist) => (
                        <ArtistCard 
                            image={artist.image}
                            name={artist.name}
                            identifier={artist.id}
                        />
                    ))}
                </AlbumsRoll>
            </Box>
        </Container>
    )
};

const mapStateToProps = (state: any) => ({
    albums: state.albums,
});

const mapActionsToProps = {
    
};
export default connect(mapStateToProps, mapActionsToProps)(Home);
