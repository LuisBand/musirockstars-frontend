import React,{FC} from 'react';
import {Box, Typography} from '@mui/material'
import styled from '@emotion/styled';
import { ImageListItem } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from 'react-router-dom';


const MainContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
`
const Grid = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 16px;
`

const addDirectionCard = {
    height: '280px',
    width: '360px',
    border: '1px dashed gray',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover':{
        cursor: 'pointer',
    }
}

const directionCard = {
    height: '280px',
    width: '360px',
    border: '1px solid gray',
    borderRadius: '10px',
}

const defaultHeader = {
    height: '38px',
    borderBottom: '1px solid gray',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const info = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxSizing: 'border-box'
}


interface directioni {
    country: string,
    state: string,
    city: string,
    street: string,
    number: number,
    zip_code: number,
    phone_number: string,
    is_default: boolean

}

const Directions: FC = () => {
    const directions = [
        {
            country: 'Mexico',
            state: 'Morelos',
            city: 'Tlayacapan',
            street: 'Cuauhtemoc',
            number: 18,
            zip_code: 62540,
            phone_number: '7351071718',
            is_default: true,
        },
        {
            country: 'Mexico',
            state: 'Morelos',
            city: 'Tlayacapan',
            street: 'Cuauhtemoc',
            number: 18,
            zip_code: 62540,
            phone_number: '7351071718',
            is_default: false,
        },
        {
            country: 'Mexico',
            state: 'Morelos',
            city: 'Tlayacapan',
            street: 'Cuauhtemoc',
            number: 18,
            zip_code: 62540,
            phone_number: '7351071718',
            is_default: false,
        }
    ]

    const navigate = useNavigate();

    const handleAdd = () => {
        console.log('add');
        navigate('/addDirection');
    }
    return(
        <MainContainer>
            <Grid>
                <Box sx={addDirectionCard} onClick={handleAdd}>
                    <AddIcon sx={{fontSize: '60px'}}/>
                    <Typography>Add Address</Typography>
                </Box>
                {directions?.map((direction: directioni) => (
                    <Box sx={directionCard}>
                    <Box sx={info}>
                        <Box>
                            {direction.is_default && 
                                <Box sx={defaultHeader}>
                                    <Typography>Default</Typography>
                                </Box>
                            }
                            <Box sx={{padding: '18px 25px', boxSizing: 'border-box'}}>
                                <Typography>{`${direction.street} #${direction.number}`}</Typography>
                                <Typography>{`${direction.city}, ${direction.state}, CP. ${direction.zip_code}`}</Typography>
                                <Typography>{`${direction.country}`}</Typography>
                                <Typography>{`Phone Number: ${direction.phone_number}`}</Typography>
                            </Box>
                        </Box>
                        <ButtonGroup sx={{padding: '18px 25px', boxSizing: 'border-box'}} variant="text" aria-label="text button group">
                            <Button>Edit</Button>
                            <Button>Delete</Button>
                            {!direction.is_default && <Button >Set as default</Button>}
                        </ButtonGroup>
                    </Box>
                </Box>
                ))}
            </Grid>
        </MainContainer>
    )
}

export default Directions;