import { Box, Typography} from "@mui/material";
import React from "react";
import styled from '@emotion/styled';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Alert from '@mui/material/Alert';
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import { addAddress } from "../../../redux/actions/addressActions";

const formContaier = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '20px',
    boxSizing: 'border-box',
    alignItems: 'center',
}

const inputStyles = {
    borderRadius: '10px',
    marginTop: '4px',
    height: '40px',
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
    width: 35%;
    display: flex;
    flex-direction: column;
    min-width: 350px;
    gap: 12px;
`

const Label = styled.label`
    font-size: 12px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
`
const Header = styled.div`
    width: 35%;
    margin-bottom:30px
`

interface State {
    country: string;
    state: string;
    city: string;
    street: string;
    number: number;
    zip_code: number;
    phone_number: string;
    id: number
}
  
interface Response {
    status: "success" | "info" | "warning" | "error" | undefined;
    description: string;
}

const AddressForm = (props: any) => {
    const user = useSelector((state: any) => state.user)
    const navigate = useNavigate();
    const [values, setValues] = React.useState<State>({
        country: '',
        state: '',
        city: '',
        street: '',
        number: 0,
        zip_code: 0,
        phone_number: '',
        id: 0
    });

    const [responseValue, setResponseValues] = React.useState<Response>({
        status: undefined,
        description: '',
    });


    const [open, setOpen] = React.useState(false);

    const handleClose = () => setOpen(false);


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = {
            ...values,
            userId: user.id
        };
        props.addAddress(data)
    }

    const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };


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
                    <Typography sx={{fontWeight: 'bold', fontSize:32, color: 'black'}}>Add a new address</Typography>
                </Header>
                <Form onSubmit={handleSubmit}>

                    <Label htmlFor="countryInput">
                        Country
                        <OutlinedInput
                        required
                        sx={inputStyles}
                        id="countryInput"
                        type='text'
                        value={values.country}
                        placeholder="Example: México"
                        onChange={handleChange('country')}
                        />
                    </Label>

                    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <Label htmlFor="streetInput">
                            Street
                            <OutlinedInput
                            required
                            sx={inputStyles}
                            id="streetInput"
                            type="text"
                            value={values.street}
                            placeholder="Exaplme: Cuauhtemoc"
                            onChange={handleChange('street')}
                            />
                        </Label>

                        <Label htmlFor="numberInput">
                            Number
                            <OutlinedInput
                            required
                            sx={inputStyles}
                            id="numberInput"
                            type="number"
                            value={values.number}
                            placeholder="Exaplme: 18"
                            onChange={handleChange('number')}
                            />
                        </Label>
                    </Box>

                    <Label htmlFor="cityInput">
                        City
                        <OutlinedInput
                        required
                        sx={inputStyles}
                        id="cityInput"
                        type="text"
                        value={values.city}
                        placeholder="Exaplme: Tlayacapan"
                        onChange={handleChange('city')}
                        />
                    </Label>

                    <Label htmlFor="stateInput">
                        State
                        <OutlinedInput
                        required
                        sx={inputStyles}
                        id="stateInput"
                        type="text"
                        value={values.state}
                        placeholder="Exaplme: Morelos"
                        onChange={handleChange('state')}
                        />
                    </Label>

                    <Label htmlFor="zipInput">
                        Zip Code
                        <OutlinedInput
                        required
                        sx={inputStyles}
                        id="zipInput"
                        type="number"
                        value={values.zip_code}
                        placeholder="Exaplme: 62540"
                        onChange={handleChange('zip_code')}
                        />
                    </Label>

                    <Label htmlFor="phoneInput">
                        Phone Number
                        <OutlinedInput
                        required
                        sx={inputStyles}
                        id="phoneInput"
                        type="string"
                        value={values.phone_number}
                        placeholder="Exaplme: 7351072718"
                        onChange={handleChange('phone_number')}
                        />
                    </Label>

                    <Button sx={buttonStyles} type='submit'>Add Address</Button>
                </Form>
        </Box>
    )
}

const mapStateToProps = (state: any) => ({
    user: state.user,
    status: state.status,
});

const mapActionsToProps = {
    addAddress,
};
export default connect(mapStateToProps, mapActionsToProps)(AddressForm);

