import React, { useState } from 'react'
import { withStyles, Paper, Grid, Typography, TextField, Button } from '@material-ui/core';
import isEmpty from 'lodash.isempty'
import { connect } from 'react-redux'

const styles = {
    paper: {
        width: '25vw',
        height: '25vh'
    }
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

function Login(props){
    const { classes } = props;
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [dog, setDog] = useState(false)
    const [height, setHeight] = useState('35vh')
    const audio = new Audio(require('../../assets/Mus_dogsong.ogg'));
    return (
        <div
            className={classes.root}>
                <Paper
                    square={false}
                    style={{
                        width: '30vw',
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
                                    audio.loop = true
                                    audio.play();
                                    setHeight('65vh')
                                    setDog(true)
                                }}>Login</Button>
                            </Grid>
                        </Grid>
                        {dog?(
                            <div style ={{ alignItems:'center',textAlign: 'center', justifyContent: 'center', alignContent: 'center'}}>
                                <Typography variant="h6">Not yet implemented :-)</Typography>
                                <img src={require('../../assets/annoyingDog.gif')} alt="Not complete yet"></img>
                            </div>
                        ):(
                            <span/>
                        )}
                </Paper>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Login));