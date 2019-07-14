import React, { useEffect, useState } from 'react'
import { Typography, withStyles, Grid, Card, CardContent } from '@material-ui/core';
import Search from '../search/Search'
import { getTopInstructions } from '../../services/instruction-service'
import InstructionCardSM from '../instructioncard/InstructionCardSM';

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

const testCards = (n) => {
    let jsx = []
    for ( let i =0; i < n; i++){
        jsx.push(<Card><CardContent>Hello!</CardContent></Card>)
    }
}

function Homepage(props){
    const { classes } = props;
    const [popular, setPopular] = useState([])
    useEffect(() => {
        getTopInstructions(handleResponse)
    }, [])
    const handleResponse = res => {
        let tmp = []
        res.forEach((c, i) => {
            tmp.push(<Grid item key={i}><InstructionCardSM obj={c} style={{ maxHeight: '250px' }}/></Grid>)
        })
        setPopular(tmp)
    }
    useEffect(() => {
        console.log(popular)
    }, [popular])
    return (
        <div
            className={classes.root}>
                {/* Can refactor out the search header, probably. */}
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
            <Grid container
                alignContent="center"
                alignItems="flex-start"
                justify="space-evenly"
                direction="row"
                spacing={1}
                style={{ marginTop: '3vh' }}>
                    <Grid item>
                        <Grid container direction="column" alignContent="center" spacing={1}>
                            <Grid item>
                                <Typography variant="h5">Popular instructions today</Typography>
                            </Grid>
                            {popular}
                        </Grid>
                    </Grid>
                    <Grid item>
                        <span/>
                    </Grid>
                    <Grid item>
                        <Grid container direction="column" alignContent="center" spacing={1}>
                            <Grid item>
                                <Typography variant="h5">Categories for you</Typography>
                            </Grid>
                            <Grid item>
                                <Card>
                                    <CardContent>
                                        <Typography>hello</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
        </div>
    )
}

export default withStyles(styles)(Homepage) 