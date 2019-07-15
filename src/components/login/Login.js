import React, { useState } from 'react'
import { withStyles, Paper, Grid, Typography, TextField, Button } from '@material-ui/core';
import isEmpty from 'lodash.isempty'
import { connect } from 'react-redux'
import { login } from '../../services/auth-service'
import { LOGIN } from '../../redux/actions/user'
import history from '../../util/history'

const styles = {
    paper: {
        width: '25vw',
        height: '25vh'
    },
    root: {
        marginTop: '5vh'
    }
}

const mapStateToProps = state => {
    return {

    }
}

// Ideally, I'd like to get this logic out of the Login component itself.
const mapDispatchToProps = dispatch => {
    return {
        LOGIN: (user) => dispatch(LOGIN(user))
    }
}

function Login(props){
    const { classes } = props;
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [dog, setDog] = useState(false)
    const [height, setHeight] = useState('35vh')
    const audio = new Audio(require('../../assets/Mus_dogsong.ogg'));
    const [error, setError] = useState(false)

    const handleResponse = (user, success) => {
        if(success){
            props.LOGIN(user)
            console.log("ok...")
            history.push("/")
        } else {
            setError(true)
        }
    }

    return (
        <div
            className={classes.root}>
                <Grid container direction="column" justify="center" alignContent="center">
                <Paper
                    square={false}
                    style={{
                        width: '40vw',
                        height: height,
                        paddingTop: '5vh'
                    }}
                    className={classes.paper}>
                        <Grid container direction="column" justify="center" alignContent="center" alignItems="center" spacing={1}>
                            <Grid item>
                                <Typography variant="h4">{isEmpty(props.message)?'Please Login':props.message}</Typography>
                            </Grid>
                            <Grid item>
                                <Grid container alignItems="center" alignContent="center" direction="row" spacing={1}>
                                    <Grid item>
                                        <Typography variant="body1">Username</Typography>
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            label="Username"
                                            variant="outlined"
                                            value={username}
                                            name="username"
                                            type="username"
                                            onChange={(e) => setUsername(e.target.value)}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid container alignItems="center" alignContent="center" direction="row" spacing={1}>
                                    <Grid item>
                                        <Typography variant="body1">Password</Typography>
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            label="Password"
                                            variant="outlined"
                                            value={password}
                                            name="password"
                                            type="password"
                                            onChange={(e) => setPassword(e.target.value)}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" onClick={() => {
                                    let user = {
                                        username: username,
                                        password: password
                                    }
                                    login(user, handleResponse)
                                    // audio.loop = true
                                    // audio.play();
                                    // setHeight('65vh')
                                    // setDog(true)
                                }}>Login</Button>
                            </Grid>
                            {error?(
                                <Grid item><Typography variant="subtitle2" color="error">There was an error. Please try again.</Typography></Grid>
                            ):(
                                <span/>
                            )}
                        </Grid>
                        {/* {dog?(
                            <div style ={{ alignItems:'center',textAlign: 'center', justifyContent: 'center', alignContent: 'center'}}>
                                <Typography variant="h6">Not yet implemented :-)</Typography>
                                <img src={require('../../assets/annoyingDog.gif')} alt="Not complete yet"></img>
                                <br/>
                                <Link to="/" onClick={() => audio.pause()}>Return home...</Link>
                            </div>
                        ):(
                            <span/>
                        )} */}
                </Paper>
                </Grid>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Login));