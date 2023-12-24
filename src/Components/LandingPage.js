import * as React from 'react';
import Suc from './Suc';
import { useState } from 'react';
import handleOpenSuc from './Suc'
import { Container, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { green } from "@mui/material/colors";
import Box from '@mui/system/Box';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import Slide from '@mui/material/Slide';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import MemoVoxLogo from './VoxLogo';
import MemoCustomCloseIcon from './CloseIcon';
import girl from "../img/girlBack.png"
import back from '../img/img Comm.png'


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});



const useStyles = makeStyles((theme) => {
    return {
        btns: {
            fontSize: "15px",
            background: `linear-gradient(to right, ${green.A700}, ${green[800]})`,
            marginTop: "15px",
            width: "-moz-available !important",
            boxShadow: "2px !important",
            borderRadius: "15px !important",
            backgroundColor: "white !important",
        },
        diContent: {
            paddingLeft: "640px !important",
            paddingRight: "120px !important",
            paddingTop: "80px !important",
            backgroundImage: `url(${girl})`,
            [theme.breakpoints.down('xs')]: {
                paddingLeft: "24px !important",
                paddingRight: "24px !important",
                backgroundImage: "none !important"
            },
            [theme.breakpoints.down('sm')]: {
                paddingLeft: "24px !important",
                paddingRight: "24px !important",
                backgroundImage: "none"
            },
            backgroundRepeat: "no-repeat !important",
            backgroundSize: "contain !important",
        },
        subtitle: {
            fontSize: 15,
            [theme.breakpoints.down('xs')]: {
                fontSize: "14px !important",
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: "14px !important",
            },
            fontFamily: 'Lexend',
            textAlign: 'left',
            width: "70%",
            color: "black"
        },
        title: {
            fontSize: 50,
            [theme.breakpoints.down('xs')]: {
                fontSize: "30px !important",
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: "30px !important",
            },
            fontFamily: 'Lexend',
            fontWeight: 800,
            textAlign: 'left',
            width: "90%",
            color: "black",
        },

    };
});


function LandingPage() {
    const [open, setOpen] = React.useState(false);
    const [email, setEmail] = useState('');
    const [isValid, setValid] = useState(true);
    const classes = useStyles()

    // Open dialogs buttons
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // Email validation
    const validateEmail = (input) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(input);
    };

    const handleChange = (event) => {
        const inputValue = event.target.value;
        setEmail(inputValue);
        if (inputValue.trim() !== '') {
            setValid(validateEmail(inputValue));
        } else {
            setValid(true);
        }
    };

    return (

        <Container>
            <Box component="section" sx={{ marginTop: 5 }}>
                <MemoVoxLogo />
            </Box>
            <Grid
                container
                spacing={2}
                sx={{
                    flexDirection: {
                        xs: "column-reverse",
                        md: "row"
                    }
                }}
            >

                <Grid item xs={12} md={6}>
                    <Box component="section" sx={{
                        marginTop: {
                            xs: 2,
                            sm: 2,
                            md: 20,
                            lg: 20,
                            xl: 20,
                        }
                    }}>
                        <Typography
                            className={classes.title}
                            gutterBottom
                            variant="h1"
                        >
                            Pinnacle of Business Telephony
                        </Typography>
                        <Typography
                            className={classes.subtitle}
                            variant="subtitle2"
                            gutterBottom
                        >
                            Effortlessly manage all conversations and interact with clients
                            and teams using one powerful and user-friendly solution.
                        </Typography>
                        <Button
                            variant="contained"
                            onClick={handleClickOpen}
                            className={classes.btns}
                        >
                            Get started
                        </Button>

                        <Dialog
                            fullScreen
                            open={open}
                            onClose={handleClose}
                            TransitionComponent={Transition}
                        >
                            <IconButton
                                aria-label="close"
                                onClick={handleClose}
                                sx={{
                                    position: 'absolute',
                                    right: 8,
                                    top: 8,
                                    backgroundColor: "white",
                                    zIndex: 99999,
                                    color: (theme) => theme.palette.grey[500],
                                }}
                            >
                                <MemoCustomCloseIcon />
                            </IconButton>
                            <DialogContent className={classes.diContent}>
                                <DialogContentText>
                                    <Typography className={classes.title} variant="h1" gutterBottom>
                                        Pinnacle of Business Telephony is in your hands
                                    </Typography>
                                </DialogContentText>
                                <DialogContentText>
                                    <Typography className={classes.subtitle} variant="subtitle2" gutterBottom>
                                        Start your journey to confident and fearless growth with Voxago
                                    </Typography>
                                </DialogContentText >
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={6} >
                                        <TextField
                                            InputProps={{ disableUnderline: true }}
                                            autoFocus
                                            margin="dense"
                                            id="firstName"
                                            label="First Name"
                                            type="text"
                                            fullWidth
                                            variant="filled"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            margin="dense"
                                            id="lastName"
                                            label="Last Name"
                                            type="text"
                                            fullWidth
                                            variant="filled"
                                            InputProps={{ disableUnderline: true }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <TextField
                                            InputProps={{ disableUnderline: true }}
                                            margin="dense"
                                            id="phone"
                                            label="Phone"
                                            type="phone"
                                            fullWidth
                                            variant="filled"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <TextField
                                            InputProps={{ disableUnderline: true }}
                                            margin="dense"
                                            id="text"
                                            type="Email"
                                            variant="filled"
                                            label="Email"
                                            fullWidth
                                            value={email}
                                            onChange={handleChange}
                                            error={!isValid}
                                            helperText={!isValid && email.trim() !== '' ? 'Please enter a valid email address' : ''}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            InputProps={{ disableUnderline: true }}
                                            margin="dense"
                                            id="text"
                                            label="Company name"
                                            type="text"
                                            fullWidth
                                            variant="filled"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            InputProps={{ disableUnderline: true }}
                                            margin="dense"
                                            id="employees"
                                            label="Number Of Employees"
                                            type="text"
                                            fullWidth
                                            variant="filled"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Suc onClick={handleOpenSuc} />
                                    </Grid>
                                </Grid>

                            </DialogContent>
                        </Dialog>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{
                        width: {
                            xs: "350px",
                            sm: "450px",
                            md: "auto",
                            lg: "auto",
                            xl: "auto",
                        },
                        paddingTop: 10
                    }}>
                        <img
                            src={back}
                            style={{
                                width: "inherit"
                            }}
                        />
                    </Box>

                </Grid>
            </Grid>
        </Container >

    );
}

export default LandingPage;