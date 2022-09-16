import { React, useEffect, useState } from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import swal from 'sweetalert';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// function Copyright(props) {
//     return (
//         <Typography variant="body2" color="text.secondary" align="center" {...props}>
//             {'Copyright © '}
//             <Link color="inherit" href="https://mui.com/">
//                 Your Website
//             </Link>{' '}
//             {new Date().getFullYear()}
//             {'.'}
//         </Typography>
//     );
// }

const theme = createTheme();

export default function Register() {
    useEffect(() => {
        getCities();
    }, []);

    const [city, setCity] = useState('');   //City dropdown value
    const [cities, setCities] = useState([]); //City list from Api
    const [user, setUser] = useState(
        {
            first_name: "",
            last_name: "",
            phone_number: "",
            address: "",
            city: "",
            country: "",
            email: "",
            password: "",
            confirm_password: "",
            error_list: {}
        }
    );
        
        // const regEx =
        //     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        // const [email, setEmail] = useState('');
        // const [error, setError] = useState('');
        
        // const checkEmail = (e) => {
        //     setEmail(e.target.value);
        // }

        // if(regEx.test(email) === false) {
        //     setError('Please enter valid email');
        // } else {
        //     setError('');
        //     return true;
        // }

        const getCities = async () => {
            const { data } = await axios.get("http://localhost:3001/users/cities");
            console.log('cities: ', data);
            setCities(data);
        }
        
        
        const handleSubmit = (event) => {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            
            let params = {
                first_name: data.get('first_name'),
                last_name: data.get('last_name'),
                phone_number: data.get('phone_number'),
                address: data.get('address'),
                city_id: data.get('city'),
                country: data.get('country'),
                email: data.get('email'),
                password: data.get('password'),
                confirm_password: data.get('confirm_password'),
                is_admin: 0,
                status: 'active'
            };
            
                console.log(params);
                
                // Registers a user
                axios.post("http://localhost:3001/users/register", params)
                    .then( (res) => {
                        swal("Registration Success!", "You're now Registered", "success");
                        console.log(res.params);
                        setUser(
                            {
                                first_name: "",
                                last_name: "",
                                phone_number: "",
                                address: "",
                                city: "",
                                country: "",
                                email: "",
                                password: "",
                                confirm_password: "",
                                error_list: {}
                            }
                            );
                        } ).catch( (err) => {
                            console.log('error:', err);
                            setUser( {...user, error_list: err.response.data} );
                        });
                    };
                    
                    const onCityChange = (e) => {
                        console.log('City: ', e.target.value);
                        setCity(e.target.value);
                    };

                    const onInputChange = (e, field) => {
                        setUser({ ...user, [field]: e.target.value})
                    };

                    // const onChanges = () => {
                    //     onCityChange(e);
                    //     onInputChange(e, field);
                    // }
                    
                    return (
                        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 15,
                        marginBottom: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    className={`form-control ${user.error_list.first_name ? "is-invalid" : ""} `}
                                    autoComplete="given-name"
                                    name="first_name"
                                    required
                                    fullWidth
                                    id="first_name"
                                    label="First Name"
                                    value={user.first_name}
                                    onChange={(e) => onInputChange(e, 'first_name')}
                                    autoFocus
                                />
                                <div className='invalid-feedback'>
                                    {user.error_list.first_name}
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    className={`form-control ${user.error_list.last_name ? "is-invalid" : ""} `}
                                    required
                                    fullWidth
                                    id="last_name"
                                    label="Last Name"
                                    name="last_name"
                                    autoComplete="family-name"
                                    value={user.last_name}
                                    onChange={(e) => onInputChange(e, 'last_name')}
                                />
                                <div className='invalid-feedback' style={ {color: red} }>
                                    {user.error_list.last_name}
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    className={`form-control ${user.error_list.phone_number ? "is-invalid" : ""} `}
                                    required
                                    fullWidth
                                    id="phone_number"
                                    label="Phone Number"
                                    name="phone_number"
                                    type="number"
                                    value={user.phone_number}
                                    onChange={(e) => onInputChange(e, 'phone_number')}
                                />
                                <div className='invalid-feedback'>
                                    {user.error_list.phone_number}
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    className={`form-control ${user.error_list.address ? "is-invalid" : ""} `}
                                    required
                                    fullWidth
                                    id="address"
                                    label="Street Name, Building, House No."
                                    name="address"
                                    value={user.address}
                                    onChange={(e) => onInputChange(e, 'address')}
                                />
                                <div className='invalid-feedback'>
                                    {user.error_list.address}
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    className={`form-control ${user.error_list.city_id ? "is-invalid" : ""} `}
                                    id="outlined-select-currency"
                                    select
                                    label="City"
                                    value={user.city}
                                    name="city"
                                    fullWidth
                                    onChange={(e) => onInputChange(e, 'city')}
                                    // onChange={onCityChange}
                                >
                                    {cities.map((city) => (
                                        <MenuItem key={city.city_id} value={city.city_id}>
                                            {city.name}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <div className='invalid-feedback'>
                                    {user.error_list.city_id}
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    id="country"
                                    label="Country"
                                    value="Philippines"
                                    name="country"
                                    shrink="true"
                                    // disabled
                                    aria-readonly
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    className={`form-control ${user.error_list.email ? "is-invalid" : ""} `}
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    value={user.email}
                                    onChange={(e) => onInputChange(e, 'email')}
                                    // onChange={checkEmail}

                                />
                                <div className='invalid-feedback'>
                                    {user.error_list.email}
                                    {/* {error} */}
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    className={`form-control ${user.error_list.password ? "is-invalid" : ""} `}
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    value={user.password}
                                    onChange={(e) => onInputChange(e, 'password')}
                                    />
                                <div className='invalid-feedback'>
                                    {user.error_list.password}
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    className={`form-control ${user.error_list.confirm_password ? "is-invalid" : ""} `}
                                    required
                                    fullWidth
                                    name="confirm_password"
                                    label="Confirm Password"
                                    type="password"
                                    id="confirm_password"
                                    autoComplete="new-password"
                                    value={user.confirm_password}
                                    onChange={(e) => onInputChange(e, 'confirm_password')}
                                />
                                <div className='invalid-feedback'>
                                    {user.error_list.confirm_password}
                                </div>
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                {/* <Copyright sx={{ mt: 5 }} /> */}
            </Container>
        </ThemeProvider>
    );
}
