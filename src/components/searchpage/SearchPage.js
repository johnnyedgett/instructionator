import React, { useEffect } from 'react'
import queryString from 'query-string'
import { withStyles, Grid, Card, Button, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Typography, IconButton} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
const styles = {
    root: {
        marginLeft: '10vw',
        marginRight: '10vw'
    }
}

function SearchPage(props){
    const query = queryString.parse(props.location.search)
    useEffect(() => {
        // console.log(query)
    }, [])

    const generateTestCards = () => {
        let rJsx = []
        for(let i = 0; i < 25; i++){
            rJsx.push(
                <Grid item key={i}>
                    <Card>
                        {/* <CardActionArea> */}
                            <CardHeader
                                action={
                                <IconButton aria-label="Settings">
                                    <MoreVertIcon />
                                </IconButton>
                                }
                                title={`Search ${i}`}
                                subheader="Submitted by: Johnny"/>
                            <CardContent>
                                <Typography variant="body2">Some description here.</Typography>
                            </CardContent>
                        {/* </CardActionArea> */}
                        <CardActions>
                            <IconButton aria-label="Add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            )
        }
        return rJsx
    }
    const { classes } = props
    return (
        <div
            className={classes.root}>
            <Typography variant="h4" component="h2" style={{ marginTop: '2vh', textAlign: 'center'}}> Displaying results for <b>{query.search}</b>: </Typography>
            <br/>
            <Grid container spacing={2} justify="center">
                {generateTestCards()}
            </Grid>
        </div>
    )
}

export default withStyles(styles)(SearchPage)