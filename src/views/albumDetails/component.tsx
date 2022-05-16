import React,{FC} from 'react';
import {Box, Typography} from '@mui/material'
import {AlbumDetailsProps} from './types'
import styled from '@emotion/styled';
import { connect, useSelector } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { setCurrentSong } from '../../redux/actions/songActions';
import Button from '@mui/material/Button';


const MainContainer = styled.div`
    height: 100%;
    width: 100%;
    padding: 0 30px;
    box-sizing: border-box;
`
const Container = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: 200px auto;
    gap: 24px;
`

const Image = styled.img`
    height: 200px;
`

const ArtistImage = styled.img`
    height: 30px;
    width: 30px;
    border-radius: 50%;
`
const artistContainer = {
    display: 'flex',
    gap: '4px',
    alignItems: 'center'
}

const infoContainer = {
    bottom: '0',
    textAlign: 'bottom',
}

const head = {
    height: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    gap: '16px',
}

const ScrollArea = styled.div`
    padding-top: 30px;
    box-sizing: border-box;
    height: 450px;
    width: 100%;
    overflow-y: scroll;
`

const AlbumDetails: FC<AlbumDetailsProps> = (props:any) => {
    const currentAlbum = useSelector((state: any) => state.albums.currentAlbum)

    function formatDuration(value: number) {
        const minute = Math.floor(value / 60);
        const secondLeft = value - minute * 60;
        return `${minute}:${secondLeft < 9 ? `0${secondLeft}` : secondLeft}`;
    }

    return(
        <MainContainer>
                {currentAlbum && 
                    <Container>
                        <Box sx={head}>
                            <Image src={currentAlbum.image}/> 
                            <Box sx={infoContainer}>
                                <Typography sx={{fontSize: '12px', fontWeight:'bold'}}>ALBUM</Typography>
                                <Typography sx={{fontSize: '44px', fontWeight:'bold'}}>{currentAlbum.name}</Typography>
                                <Box sx={artistContainer}>
                                    <ArtistImage src={currentAlbum.artist.image} />
                                    <Typography>{currentAlbum.artist.name}</Typography>
                                    <Typography>{currentAlbum.release_year}</Typography>
                                </Box>
                            </Box>
                            <Box sx={{marginLeft:'40px', display:'flex', gap:'10px'}}>
                                <Button variant="contained">Buy Physical</Button>
                                <Button variant="contained">Buy Digital</Button>
                            </Box>
                        </Box>
                        <ScrollArea>
                            <TableContainer component={Paper} sx={{background: '#F8F8FA'}}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>id</TableCell>
                                            <TableCell align="right">Song</TableCell>
                                            <TableCell align="right">duration</TableCell>
                                            <TableCell align="right"></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    {currentAlbum.songs?.map((row:any) => (
                                        <TableRow
                                        key={row.id}
                                        onClick={() =>{props.setCurrentSong(row)}}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.id}
                                            </TableCell>
                                            <TableCell align="right">{row.name}</TableCell>
                                            <TableCell align="right">{formatDuration(row.duration)}</TableCell>
                                            <TableCell align="right">
                                                <Button variant="contained">Buy</Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </ScrollArea>
                    </Container>
                }
        </MainContainer>
    )
}
const mapStateToProps = (state: any) => ({
    user: state.user,
    status: state.status,
});
   //this map actions to our props in this functional component
const mapActionsToProps = {
    setCurrentSong
};
export default connect(mapStateToProps, mapActionsToProps)(AlbumDetails);