import React, { useState, useEffect, unstable_Profiler } from 'react'
import { withStyles, Typography, Grid, Paper, Button } from '@material-ui/core';
import { connect } from 'react-redux'
import isEmpty from 'lodash.isempty'
import { getProfileForUser } from '../../services/profile-service';
import history from '../../util/history'
import { getInstructionDetails } from '../../services/instruction-service'

const styles = {
    root: {
        marginTop: '3vh'
    },
    paperRoot: {
        height: '100vh',
        width: '80vw'
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

function Profile(props){
    const { classes } = props;
    const [profile, setProfile] = useState({})
    const [error, setError] = useState(false)
    const [favoritesJsx, setFavoritesJsx] = useState([])
    useEffect(() => {
        if(props.user.loggedIn){
            getProfileForUser(handleResponse)
        } else {
            history.push("/login")
        }
    }, [])

    useEffect(() => {
        console.log('Profile: ')
        console.log(profile)
    }, [profile])

    useEffect(() => {
        console.log(favoritesJsx)
    }, [favoritesJsx])

    const handleResponse = (profile, success) => {
        if(success){
            setProfile(profile)
            profile.favoritesList.forEach((id, i) => {
                getInstructionDetails(id, i, handleInstructionResponse)
            })
        } else {
            setError(true)
        }
    }

    const handleInstructionResponse = (instruction, i) => {
        console.log(instruction)
        setFavoritesJsx(...favoritesJsx,
                <Grid item key={i}>
                    Name: {instruction.name} Description: {instruction.description} <Button variant="text" onClick={() =>  history.push({
                        pathname: '/instruction',
                        search: `?id=${instruction.id}`,
                        // props.location.state
                        state: {
                            instruction: instruction
                        }
                    })}>View instruction</Button>
                </Grid>
            )
    }
    
    return (
        isEmpty(profile)?
        (
            <div>
                {error?(<Typography variant="body1" color="error">There was an error loading your profile!</Typography>):(<div>Loading...</div>)}
            </div>
        ):
        (
            <div
                className={classes.root}>
                    <Grid container direction="column" justify="center" alignContent="center">
                        <Grid item>
                            <Paper
                                className={classes.paperRoot}
                                elevation={1}>
                                    <Grid container direction="column">
                                        <Grid item style={{ borderBottom: '1px solid #000000'}}>
                                            <Typography variant="h4">Viewing profile for {props.user.currentUser.username}</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Grid container direction="column">
                                                <Grid item>
                                                    <Typography variant="h5">Your favorited instructions</Typography>
                                                </Grid>
                                                {favoritesJsx}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
            </div>
        )
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Profile));