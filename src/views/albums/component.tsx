import {Box, Typography} from '@mui/material'
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import SongCard from '../../components/cards/song/component'

const MainContainer = styled.div`
    width: 100%;
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    gap: 25px;
`

const tittle = {
    fontSize: '30px',
    fontWeight: 'bold',
}

const Albums = () => {
    const albums = useSelector((state: any) => state.albums.albums)
    return(
        <MainContainer>
            <Typography sx={tittle}>Explore All Our Albums</Typography>
            <Box>
                {albums?.map((album:any) =>(
                    <SongCard
                        artist="L'imperatrice" 
                        image={album.image}
                        name={album.name}
                        identifier={album.id}
                    />
                ))}
            </Box>

        </MainContainer>
    )
}

export default Albums