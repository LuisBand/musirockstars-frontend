import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { ArtistCardProps } from "./types";
import styled from '@emotion/styled';

const ArtistCard: FC<ArtistCardProps> = ({ image,name}) => {

  const container = {
    width: "200px",
    textAlign: "center",
  }

  const tittle = {
    marginTop: "14px",
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "black",
    overflow: "hidden"
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
    borderRadius: "50%",
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
            <Typography sx={tittle}>{name}</Typography>
        </Box>
    </Container>
    
  );
};

export default ArtistCard;