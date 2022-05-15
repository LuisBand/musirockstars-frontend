import React,{FC} from 'react';
import {Box, Typography} from '@mui/material'
import styled from '@emotion/styled';
import { ImageListItem } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';

const MainContainer = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: 200px auto;
    padding: 0 30px;
    box-sizing: border-box;
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

const columns =  [
    { 
        field: 'id',
        headerName: '#',
        width: 90
    },
    {
      field: 'name',
      headerName: 'TITLE',
      width: 380,
    },
    {
      field: 'duration',
      headerName: 'DURATION',
      width: 150,
    },
  ];
  
const ArtistDetails = () => {
    const currentAlbum = useSelector((state: any) => state.albums.currentAlbum)
    return(
        <MainContainer>
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
            </Box>
            <DataGrid
                sx={{border: 'none', suppressPaginationPanel: 'true'}}
                rows={currentAlbum.songs}
                columns={columns}
                hideFooterPagination
            />

        </MainContainer>
    )
}

export default ArtistDetails