import React,{FC} from 'react';
import {Box, Typography} from '@mui/material'
import {AlbumDetailsProps} from './types'
import styled from '@emotion/styled';
import { ImageListItem } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';


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
      field: 'song',
      headerName: 'TITLE',
      width: 380,
    },
    {
      field: 'duration',
      headerName: 'DURATION',
      width: 150,
    },
  ];

  const rows = [
    { id: 1, song: 'Snow', age: 350 },
    { id: 2, song: 'Lannister', age: 280 },
    { id: 3, song: 'Lannister', age:  350},
    { id: 4, song: 'Stark', age: 16 },
    { id: 5, song: 'Targaryen', age: null },
    { id: 6, song: 'Melisandre', age: 150 },
    { id: 7, song: 'Clifford',age: 44 },
    { id: 8, song: 'Frances', age: 36 },
    { id: 9, song: 'Roxie', age: 65 },
  ];
  

const AlbumDetails: FC<AlbumDetailsProps> = () => {
    return(
        <MainContainer>
            <Box sx={head}>
                <Image src='https://indierocks.b-cdn.net/wp-content/uploads/2021/03/Limp%C3%A9ratrice_Tako-Tsubo_cover.jpg'/> 
                <Box sx={infoContainer}>
                    <Typography sx={{fontSize: '12px', fontWeight:'bold'}}>ALBUM</Typography>
                    <Typography sx={{fontSize: '44px', fontWeight:'bold'}}>Tako Tsubo</Typography>
                    <Box sx={artistContainer}>
                        <ArtistImage src='https://compi.la/wp-content/uploads/2019/04/LIMPERATRICE.jpg'/>
                        <Typography>L'imperatrice</Typography>
                        <Typography>- 2013 - 13 songs,</Typography>
                        <Typography>1hr 14 min</Typography>
                    </Box>
                </Box>
            </Box>
            <DataGrid
                sx={{border: 'none', suppressPaginationPanel: 'true'}}
                rows={rows}
                columns={columns}
                hideFooterPagination
            />

        </MainContainer>
    )
}

export default AlbumDetails