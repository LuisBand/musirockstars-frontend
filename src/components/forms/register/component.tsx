import { Box, Typography} from "@mui/material";
import React from "react";
import styled from '@emotion/styled';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import {Link } from "react-router-dom";  
import Modal from '@mui/material/Modal';
import { sha512 } from "js-sha512";
const axios = require('axios');
// const saltRounds = 10;


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

const alertStyles = {
    position: 'absolute',
    top: '20px',
    left: '20px',
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
    username: string;
    password: string;
    showPassword: boolean;
}

interface Response {
    status: "success" | "info" | "warning" | "error" | undefined;
    description: string;
}
  

const RegisterForm = ( ) => {

    const [values, setValues] = React.useState<State>({
        email: '',
        username: '',
        password: '',
        showPassword: false,
    });

    const [open, setOpen] = React.useState(false);

    const [responseValue, setResponseValues] = React.useState<Response>({
        status: undefined,
        description: '',
    });

    const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
    };

    const handleSubmit = async () => {
        const data = {
            username: values.username,
            email: values.email,
            password: sha512(values.password)
        };

        await axios.post('/users', data ,{
            headers:{
                'Access-Control-Allow-Origin': '*',
            }
        })
        .then(() => {
            setResponseValues({
                status: 'success',
                description: 'User created successfully!'
            })
            setOpen(true)
        })
        .catch(() => {
            setResponseValues({
                status: 'error',
                description: 'User could not be created, please try again'
            })
            setOpen(true)
        })
    }

    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleClose = () => setOpen(false);

    return(
        <Box sx={formContaier}>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Alert color={responseValue.status} sx={alertStyles}>
                        {responseValue.description}
                    </Alert>
                </Modal>

                <Header>
                    <Typography sx={{fontWeight: 'bold', fontSize:32, color: 'black'}}>Sign Up, It's free!</Typography>
                    <Typography sx={{fontSize:16, color: 'gray'}}>Please enter your details and enjoy listening!</Typography>
                </Header>
                <Form>
                    <Label htmlFor="usernameInput">
                        Username
                        <OutlinedInput
                        sx={inputStyles}
                        id="usernameInput"
                        type='text'
                        value={values.username}
                        placeholder="Enter your username"
                        onChange={handleChange('username')}
                        />
                    </Label>

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

                    <Button sx={buttonStyles} onClick={handleSubmit}>Sign up</Button>
                </Form>
                <Typography sx={{color: 'gray', marginTop: '20px'}}>
                    Already have an account? 
                    <span style={{marginLeft: '4px'}}>
                        <Link to="/login" style={{textDecoration: 'none', color: 'black'}}>Sign in</Link>
                    </span>
                </Typography>
        </Box>
    )
}

export default RegisterForm;
