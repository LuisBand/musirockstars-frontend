import { FC, useState } from "react";
import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
const Container = styled.div`
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    padding-left: 30px;
    box-sizing: border-box;
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

const Header: FC = () => {
    const [searchItem, setSearchItem] = useState("");
    return(
        <Container>
            <InputBase
                sx={style}
                placeholder="Search for albums"
                inputProps={{ 'aria-label': 'search google maps' }}
                startAdornment={<SearchIcon sx={{color: 'gray'}}/>}
            />
        </Container>
    )
}

export default Header;