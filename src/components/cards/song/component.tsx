import { Box, Typography } from "@mui/material";
import styled from '@emotion/styled';
import { ImageListItem } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux';
import { setCurrentAlbum } from "../../../redux/actions/albumActions";

const SongCard = (props: any) => {

  const container = {
    width: "200px",
  }

  const tittle = {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "black",
    overflow: "hidden",
    '&:hover':{
      cursor: 'pointer'
    }
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
    '&:hover':{
      cursor: 'pointer'
    }
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

  const navigate = useNavigate();

  const handleClick = () => {
    if(props.identifier){
      props.setCurrentAlbum(props.identifier);
      navigate(`/albumDetails`);
    }
  }

  return (
    <Container>
        <Box sx={container}>
            <ImageListItem sx={imageStyle} onClick={handleClick}>
              <img src={props.image} alt={`song-${props.name}`} />
            </ImageListItem>

            <Box sx={bottom}>
                <Typography sx={tittle} onClick={handleClick}>{props.name}</Typography>
            </Box>
        </Box>
    </Container>
    
  );
};
const mapStateToProps = (state: any) => ({
  user: state.user,
  status: state.status,
});
const mapActionsToProps = {
  setCurrentAlbum,
};
export default connect(mapStateToProps, mapActionsToProps)(SongCard);