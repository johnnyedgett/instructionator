import React, { useEffect, useState } from 'react'
import queryString from 'query-string'
import { withStyles, Grid, Card, Button, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Typography, IconButton} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { connect } from 'react-redux'
import Popup from '../popup/Popup'
import Login from '../login/Login';

const styles = {
    root: {
        marginLeft: '10vw',
        marginRight: '10vw'
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

function SearchPage(props){
    const query = queryString.parse(props.location.search)
    const [showPopup, setShowPopup] = useState(false)
    const [popupChild, setPopupChild] = useState('')
    useEffect(() => {
        console.log(props.user)
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
                            <IconButton 
                                aria-label="Add to favorites"
                                onClick={()=> {
                                    if(props.user.loggedIn){

                                    } else {
                                        setPopupChild(<Login/>)
                                        setShowPopup(true)
                                    }
                                }}>
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
            <Popup
                hidden={showPopup}
                popupChild={popupChild}/>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SearchPage));