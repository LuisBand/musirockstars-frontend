import {Box, Typography} from '@mui/material'
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';

const MainContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-rows: 128px auto;
    padding: 0 30px 20px 30px;
    box-sizing: border-box;
`
const Image = styled.img`
    height: 100%;
`

const infoContainer = {
    bottom: '0',
    textAlign: 'bottom',
}

const head = {
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    paddingBottom: '28px',
    borderBottom: '1px solid gray'
}

const albumHead = {
    height: '200px',
    display: 'flex',
    alignItems: 'flex-end',
    gap: '16px',
}

const ScrollArea = styled.div`
    padding-top: 30px;
    box-sizing: border-box;
    height: 580px;
    width: 100%;
    overflow-y: scroll;
`

const container = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    overflow: "hidden",
}

const ArtistDetails = () => {
    const currentArtist = useSelector((state: any) => state.artists.currentArtist.artist)
    const albums = useSelector((state: any) => state.artists.currentArtist.albums)
    return(
        <MainContainer>
            <Box sx={head}> 
                <Box sx={container}>
                    <img style={{height: '100%'}} src={currentArtist.image} alt="" />
                </Box>
                <Box sx={infoContainer}>
                    <Typography sx={{fontSize: '12px', fontWeight:'bold'}}>Artist</Typography>
                    <Typography sx={{fontSize: '44px', fontWeight:'bold'}}>{currentArtist.name}</Typography>
                </Box> 
            </Box>

            <ScrollArea>
                {albums?.map((album:any) => (
                    <Box sx={albumHead}>
                        <Image src={album.image}/> 
                        <Box sx={infoContainer}>
                            <Typography sx={{fontSize: '12px', fontWeight:'bold'}}>ALBUM</Typography>
                            <Typography sx={{fontSize: '44px', fontWeight:'bold'}}>{album.name}</Typography>
                            <Typography>{album.release_year}</Typography>
                        </Box>
                    </Box>
                ))}
            </ScrollArea>
                    
        </MainContainer>
    )
}

export default ArtistDetails