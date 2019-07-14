/* This is the core instruction page! */
import React, { useState, useEffect } from 'react'
import { withStyles, Grid } from '@material-ui/core';
import querystring from 'query-string'

const styles = {
    root: {
        marginTop: '3vh'
    }
}

function Instruction(props){
    const  { classes } = props;
    const [query, setQuery] = useState({})
    useEffect(() => {
        setQuery(querystring.parse(props.location.search))
    }, [])

    useEffect(() => {
        console.log(query)
    }, [query])
    return (
        <div
            className={classes.root}>
            <Grid container direction="column" justify="center" alignContent="center" >
                <Grid item>
                    Hello from the instructions page! You're viewing the instructions for <b>{props.location.state.instruction.name}</b>.
                </Grid>
            </Grid>
        </div>
    )
}

export default withStyles(styles)(Instruction)