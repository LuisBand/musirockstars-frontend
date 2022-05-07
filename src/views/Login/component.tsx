import { Box } from "@mui/material";
import styled from '@emotion/styled';
import { Outlet } from "react-router-dom";  

const container = {
    position: 'absolute',
    display: 'flex',
    width: '100%',
    height: '100%',
    background: 'red'
}

const imageContaier = {
    width: '40%',
    height: '100%',
    overflow: 'hidden',
}

const Image = styled.img`
    width: 100%;
`
  

const Login = ( ) => {
    return(
        <Box sx={container}>
            <Outlet/>
            <Box sx={imageContaier}>
                <Image src="https://images.unsplash.com/photo-1620578077783-33e254311182?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"/>
            </Box>
        </Box>
    )
}

export default Login;
