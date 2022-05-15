import {Box, Typography} from '@mui/material'
import styled from '@emotion/styled';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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

const ArtistImage = styled.img`
    height: 100%;
    border-radius: 50%;
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



  const rows = [
    { id: 1, song: 'Gamesofluck', duration: 350 },
    { id: 1, song: 'Gamesofluck', duration: 350 },
    { id: 1, song: 'Gamesofluck', duration: 350 },
    { id: 1, song: 'Gamesofluck', duration: 350 },
    { id: 1, song: 'Gamesofluck', duration: 350 },
    { id: 1, song: 'Gamesofluck', duration: 350 },
    { id: 1, song: 'Gamesofluck', duration: 350 },
    { id: 1, song: 'Gamesofluck', duration: 350 },
    { id: 1, song: 'Gamesofluck', duration: 350 },
    { id: 1, song: 'Gamesofluck', duration: 350 },
    { id: 1, song: 'Gamesofluck', duration: 350 },
    { id: 1, song: 'Gamesofluck', duration: 350 },
    { id: 1, song: 'Gamesofluck', duration: 350 },
    { id: 1, song: 'Gamesofluck', duration: 350 },
    { id: 1, song: 'Gamesofluck', duration: 350 },
  ];
  
const ArtistDetails = () => {
    // const currentAlbum = useSelector((state: any) => state.albums.currentAlbum)
    return(
        <MainContainer>
            <Box sx={head}> 
                <ArtistImage src='https://i.scdn.co/image/ab6761610000e5ebb6edcc3e5c79c2bb67a17d00'/> 
                <Box sx={infoContainer}>
                    <Typography sx={{fontSize: '12px', fontWeight:'bold'}}>Artist</Typography>
                    <Typography sx={{fontSize: '44px', fontWeight:'bold'}}>PARCELS</Typography>
                </Box> 
            </Box>

            <ScrollArea>
                <Box sx={albumHead}>
                    <Image src='https://m.media-amazon.com/images/I/91hqtzfY6BL._AC_SL1500_.jpg'/> 
                    <Box sx={infoContainer}>
                        <Typography sx={{fontSize: '12px', fontWeight:'bold'}}>ALBUM</Typography>
                        <Typography sx={{fontSize: '44px', fontWeight:'bold'}}>Parcels</Typography>
                        <Typography>2018</Typography>
                    </Box>
                </Box>
                <TableContainer component={Paper} sx={{background: '#F8F8FA'}}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>id</TableCell>
                                <TableCell align="right">Song</TableCell>
                                <TableCell align="right">duration</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                            <TableRow
                            key={row.id}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="right">{row.song}</TableCell>
                                <TableCell align="right">{row.duration}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </ScrollArea>
                    
        </MainContainer>
    )
}

export default ArtistDetails