import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { ArtistCardProps } from "./types";
import styled from '@emotion/styled';

const ArtistCard: FC<ArtistCardProps> = ({image, name, id}) => {

  const container = {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    overflow: "hidden",
  }

  const tittle = {
    marginTop: "14px",
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "black",
    overflow: "hidden"
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

  return (
    <Container>
        <Box sx={container}>
            <img style={imageStyle} src={image} alt={`song-${name}`} />
        </Box>
        <Typography sx={tittle}>{name}</Typography>
    </Container>
    
  );
};

export default ArtistCard;