import React, { FC, useState } from "react";
import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { useLocation } from 'react-router-dom'
import SettingsIcon from '@mui/icons-material/Settings';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

import { connect } from 'react-redux';
import {logoutUser} from '../../redux/actions/userActions'
import { setAddresses } from "../../redux/actions/addressActions";


const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 30px;
    padding-right: 70px;
    box-sizing: border-box;
    justify-content: space-between;
`

const style = {
    border: '1px solid #B9BFCE',
    borderRadius: '30px',
    background: '#FFFFFF',
    height: '44px',
    width: '500px',
    paddingLeft: '25px',
    display:'flex',
    gap: '15px',
}

const iconStyle = {
    color: 'gray',
    '&:hover': {
        cursor: 'pointer',
    } 
}

const Header: FC = (props: any) => {
    const [searchItem, setSearchItem] = useState("");
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    
    const navigate = useNavigate();
    let location = useLocation();
    if(location.pathname == "/login" || location.pathname == "/signup"){
        return(null);
    }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleProfile = () => {
        setAnchorEl(null);
    }

    const handleMyAddress = () => {
        navigate('/directions');
        setAnchorEl(null);
        props.setAddresses(props.user.id);
    }

    const handleLogout = () => {
        setAnchorEl(null);
        props.logoutUser();
    }

    return(
        <Container>
            <InputBase
                sx={style}
                placeholder="Search for albums"
                inputProps={{ 'aria-label': 'search google maps' }}
                startAdornment={<SearchIcon sx={{color: 'gray'}}/>}
            />
            {/* <SettingsIcon sx={iconStyle} onClick={handleClick}/> */}
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <SettingsIcon sx={iconStyle}/>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleProfile}>Profile</MenuItem>
                <MenuItem onClick={handleMyAddress}>My addresses</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
        </Container>
    )
}
const mapStateToProps = (state: any) => ({
    user: state.user,
    status: state.status,
});
const mapActionsToProps = {
    logoutUser,
    setAddresses
};
export default connect (mapStateToProps, mapActionsToProps)(Header);