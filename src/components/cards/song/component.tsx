import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { SongCardProps } from "./types";
import styled from '@emotion/styled';

const SongCard: FC<SongCardProps> = ({ image,name, artist,}) => {

  const container = {
    width: "200px",
  }

  const tittle = {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "black",
  }

  const bottom = {
    marginTop: "10px",
    display: "flex",
    flexDirection: "column",
    height: "50px",
  }

  const info = {
    fontSize: "0.8rem",
    fontWeight: "600",
    color: "gray",
  }

  const imageStyle = {
    width: "100%",
    height: "200px",
    borderRadius: "10px",
  };

  const Container = styled.div`
    display: inline-block;
    width: 200px;
    margin-right: 20px;
    height: 200px;
    background-size: cover;
    position:relative;
    border-radius: 20px;
  `

  return (
    <Container>
        <Box sx={container}>
            <img style={imageStyle} src={image} alt={`song-${name}`} />

            <Box sx={bottom}>
                <Typography sx={tittle}>{name}</Typography>
                <Typography sx={info}>{artist}</Typography>
            </Box>
        </Box>
    </Container>
    
  );
};

export default SongCard;