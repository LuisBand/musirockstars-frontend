import React from 'react';
import {
    ListItem,
    ListItemIcon,
    ListItemText,
  } from "@mui/material";
import styled from '@emotion/styled';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux';

const MenuDiv = styled.div`
    height: 100%;
    width: 100%;
    background-color: #FFFFFF;
    display: block;
    padding-top: 35px;
    box-sizing: border-box;
`;

const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    place-items: center;
`
const ProfilePhoto = styled.img`
    height: 100px;
    border-radius: 50%;
    box-shadow: 8.0px 16.0px 16.0px hsl(0deg 0% 0% / 0.25);

`
const Info = styled.div`
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    place-items: center;
    gap: 5px;
`

const Name = styled.p`
    margin: 0;
    font-size: 18px;
    font-weight: 640;
    color: #010C3A
`

const Email = styled.p`
    margin: 0;
    font-size: 13px;
    font-weight: lighter;
`

const MenuList = styled.div`
    display: flex;
    flex-direction: column;
    place-items: center;
    padding-left: 30px;
    margin-top: 60px;
    box-sizing: border-box;
`


export const Menu = () => {

    const user = useSelector((state: any) => state.user)
    interface NavButton {
        text: string;
        icon: JSX.Element;
        // onClick: () => void;
    }

    const navigate = useNavigate();

    const Buttons: NavButton[] = useMemo(
        () => [
          {
            text: "Home",
            icon: <HomeOutlinedIcon/>,
            onClick: () => console.log('home'),
          },
          {
            text: "Album",
            icon: <LibraryMusicOutlinedIcon/>,
            onClick: () => navigate("/albums"),
          },
          {
            text: "Artist",
            icon: <PersonOutlineOutlinedIcon/>,
            onClick: () => navigate("/artists"),
          },
        ],
        []
      );

    let location = useLocation();
    if(location.pathname == "/login" || location.pathname == "/signup"){
        return(null);
    }

    return (
        <MenuDiv>
            <UserInfo>
                <ProfilePhoto src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80" alt="" />
                <Info>
                    <Name>{user.username}</Name>
                    <Email>{user.email}</Email>
                </Info>
            </UserInfo>

            <MenuList>
                <ListItem onClick={()=>navigate('/home')}>
                    <ListItemIcon>
                        <HomeOutlinedIcon/>
                    </ListItemIcon>  
                    <ListItemText sx={{fontSize:14, fontWeight: 'bold'}} primary='Home'/>
                </ListItem>
                <ListItem onClick={()=>navigate('/albums')}>
                    <ListItemIcon>
                        <LibraryMusicOutlinedIcon/>,
                    </ListItemIcon>  
                    <ListItemText sx={{fontSize:14, fontWeight: 'bold'}} primary='Albums'/>
                </ListItem>
                <ListItem onClick={()=>navigate('/artists')}>
                    <ListItemIcon>
                        <PersonOutlineOutlinedIcon/>
                    </ListItemIcon>  
                    <ListItemText sx={{fontSize:14, fontWeight: 'bold'}} primary='Artists'/>
                </ListItem>
                {/* {Buttons.map((button, index)=>(
                    <ListItem onClick={button}>
                        <ListItemIcon>
                            {button.icon}
                        </ListItemIcon>  
                        <ListItemText sx={{fontSize:14, fontWeight: 'bold'}} primary={button.text}/>
                    </ListItem>
                ))}  */}
            </MenuList>
        </MenuDiv>
    ); 
}

const mapStateToProps = (state: any) => {
    return{
        auth: state.auth
    }
}

export default Menu;