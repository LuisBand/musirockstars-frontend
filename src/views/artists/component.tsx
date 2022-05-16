import {Box, Typography} from '@mui/material'
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import ArtistCard from '../../components/cards/artist/component';

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

const Artists = () => {
    const artists = useSelector((state: any) => state.artists.artists)
    return(
        <MainContainer>
            <Typography sx={tittle}>Here You Have Our Artists</Typography>
            <Box>
                {artists?.map((artist:any) =>(
                    <ArtistCard 
                        image={artist.image}
                        name={artist.name}
                        identifier={artist.id}
                    />
                ))}
            </Box>

        </MainContainer>
    )
}

export default Artists