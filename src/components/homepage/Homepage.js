import React from 'react'
import { Typography, withStyles, Grid } from '@material-ui/core';
import Search from '../search/Search'

const styles = {
    root: {
        textAlign: 'center'
    },
    searchHeader: {
        paddingTop: '25vh',
        color: 'white',
        textShadow: '1px 1px #000000'
    }
}

function Homepage(props){
    const { classes } = props;
    return (
        <div
            className={classes.root}>
            <Grid container
                justify="center"
                alignContent="center"
                alignItems="center"
                direction="column"
                spacing={2}
                style = {{ backgroundImage: `url(${require('../../assets/paintbrushes.jpeg')})`  }}>
                <Grid item xs={12}>
                    <Typography variant="h4" className={classes.searchHeader}>What are you trying to learn?</Typography>
                </Grid>
                <Grid item>
                    <Search/>
                </Grid>
                <Grid item>
                    <br/>
                </Grid>
            </Grid>
        </div>
    )
}

export default withStyles(styles)(Homepage) 