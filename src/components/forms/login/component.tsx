import { Box, Typography} from "@mui/material";
import React from "react";
import styled from '@emotion/styled';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import {Link } from "react-router-dom";  


const formContaier = {
    width: '60%',
    height: '100%',
    background: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}

const inputStyles = {
    borderRadius: '10px',
    marginTop: '6px',
}

const buttonStyles = {
    background: 'black',
    marginTop: '20px',
    color: 'white',
    borderRadius: '10px',
    height: '50px',
    '&:hover': {
        background: 'black',
    }
}

const Form = styled.form`
    width: 40%;
    display: flex;
    flex-direction: column;
    min-width: 350px;
    gap: 18px;
`

const Label = styled.label`
    font-size: 12px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
`
const Header = styled.div`
    width: 40%;
    margin-bottom:30px
`

interface State {
    email: string;
    password: string;
    showPassword: boolean;
}
  

const LoginForm = ( ) => {

    const [values, setValues] = React.useState<State>({
        email: '',
        password: '',
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
    };

    const handleSubmit = () => {
        console.log('Submited')
    }

    const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    return(
        <Box sx={formContaier}>
                <Header>
                    <Typography sx={{fontWeight: 'bold', fontSize:32, color: 'black'}}>Welcome back</Typography>
                    <Typography sx={{fontSize:16, color: 'gray'}}>Welcome back! Please enter your details</Typography>
                </Header>
                <Form>
                    <Label htmlFor="emailInput">
                        Email
                        <OutlinedInput
                        sx={inputStyles}
                        id="emailInput"
                        type='text'
                        value={values.email}
                        placeholder="Enter your e-mail"
                        onChange={handleChange('email')}
                        />
                    </Label>

                    <Label htmlFor="passwordInput">
                        Password
                        <OutlinedInput
                        sx={inputStyles}
                        id="passwordInput"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        placeholder="Enter your password"
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                >
                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        />
                    </Label>

                    <Button sx={buttonStyles}>Sign in</Button>
                </Form>
                <Typography sx={{color: 'gray', marginTop: '20px'}}>
                    Don't have an account? 
                    <span style={{marginLeft: '4px'}}>
                        <Link to="/signup" style={{textDecoration: 'none', color: 'black'}}>Sign up for free</Link>
                    </span>
                </Typography>
        </Box>
    )
}

export default LoginForm;
