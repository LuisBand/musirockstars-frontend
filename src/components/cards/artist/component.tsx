import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { ArtistCardProps } from "./types";
import styled from '@emotion/styled';
import { useNavigate } from "react-router-dom";

const ArtistCard: FC<ArtistCardProps> = ({image, name, id}) => {

  const container = {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    overflow: "hidden",
    '&:hover':{
      cursor: 'pointer'
    }
  }

  const tittle = {
    marginTop: "14px",
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "black",
    overflow: "hidden",
    '&:hover':{
      cursor: 'pointer'
    }
  }

  const imageStyle = {
    height: '100%'
  };

  const Container = styled.div`
    display: inline-block;
    width: 200px;
    margin-right: 20px;
    height: 200px;
    background-size: cover;
    position:relative;
    border-radius: 20px;
    text-align: center;
  `
  const navigate = useNavigate();
  const handleClick = () => {
    // if(props.identifier){
    //   props.setCurrentAlbum(props.identifier);
    //   navigate(`/albumDetails`);
    // }
    navigate(`/artistDetails`);
  }

  return (
    <Container>
        <Box sx={container} onClick={handleClick}>
            <img style={imageStyle} src={image} alt={`song-${name}`} />
        </Box>
        <Typography sx={tittle} onClick={handleClick}>{name}</Typography>
    </Container>
    
  );
};

export default ArtistCard;