import { FC } from "react";
import {SongProps} from "./types"
import { Box, Typography } from "@mui/material";
import styled from '@emotion/styled';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { boxSizing } from "@mui/system";

const container = {
    height: '50px',
    width: '98%',
    background: '#FFFFFF',
    borderRadius: '5px',
    boxShadow: '8.0px 16.0px 16.0px hsl(0deg 0% 0% / 0.25)',
    display: 'flex',
    justifyContent: 'space-between',
    placeItems: 'center',
    paddingX: '20px',
    boxSizing: 'border-box',
    marginBottom: '12px'
}

const leftInfo = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
}

const Image = styled.img`
    height: 35px;
`

const BuyButton = styled.button`
    height: 20px;
    width: 50px;
    border: 1px solid gray;
    border-radius: 5px;

    &:hover {
        cursor: pointer;
    }
`

const SongCardList: FC<SongProps> = ({ image,name, artist, duration}) => {
    return(
        <Box sx={container}>
            <Box sx={leftInfo}>
                <Typography sx={{fontSize:'12px', color:'black', fontWeight:'bold'}}>01</Typography>
                <Image src={image} alt={`song-${name}`}/>
                <PlayArrowIcon sx={{fontSize: '12px', color: 'gray'}}/>
                <Typography sx={{fontSize:'12px', color:'black', fontWeight:'bold'}}>{name}</Typography>
            </Box>
            <Typography sx={{fontSize:'12px'}}>{artist}</Typography>
            <Typography sx={{fontSize:'12px'}}>{duration}</Typography>
            <BuyButton>
                <Typography sx={{fontSize:'10px'}}>Buy</Typography>
            </BuyButton>
        </Box>
    )
}

export default SongCardList;