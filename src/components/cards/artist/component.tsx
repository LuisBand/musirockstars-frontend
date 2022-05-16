import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { ArtistCardProps } from "./types";
import styled from '@emotion/styled';
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentArtist } from "../../../redux/actions/artistActions";

const ArtistCard: FC<ArtistCardProps> = (props:any) => {

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
    if(props.identifier){
      console.log(props.identifier);
      props.setCurrentArtist(props.identifier);
      navigate(`/artistDetails`);
      // navigate(`/albumDetails`);
    }
  }

  return (
    <Container>
        <Box sx={container} onClick={handleClick}>
            <img style={imageStyle} src={props.image} alt={`song-${props.name}`} />
        </Box>
        <Typography sx={tittle} onClick={handleClick}>{props.name}</Typography>
    </Container>
    
  );
};
const mapStateToProps = (state: any) => ({
  user: state.user,
  status: state.status,
});
const mapActionsToProps = {
  setCurrentArtist,
};
export default connect(mapStateToProps, mapActionsToProps)(ArtistCard);