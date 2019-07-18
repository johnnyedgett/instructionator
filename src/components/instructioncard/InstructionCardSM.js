import React from 'react'
import { Avatar, Card, CardActionArea, CardActions, CardHeader, IconButton, Button } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';
import { Share } from '@material-ui/icons'
import {RemoveRedEye} from '@material-ui/icons'
import FavoriteIcon from '@material-ui/icons/Favorite';
import history from '../../util/history'
import { addFavoriteToProfile } from '../../services/profile-service'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return { 
        user: state.user
    }
}

function InstructionCardSM(props){
    return (
        <Card
            {...props}>
                <CardActionArea
                    onClick={() => history.push({
                        pathname: '/instruction',
                        search: `?id=${props.obj.id}`,
                        // props.location.state
                        state: {
                            instruction: props.obj
                        }
                    })}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="Recipe">
                            R
                        </Avatar>
                        }
                        // action={
                        //     <IconButton aria-label="Settings">
                        //         <MoreVert/>
                        //     </IconButton>
                        // }
                        title={props.obj.name}
                        subheader={props.obj.description}/>
                </CardActionArea>
                <CardActions>
                    <IconButton 
                        aria-label="Add to favorites"
                        onClick={()=> {
                            if(props.user.loggedIn){
                                addFavoriteToProfile(props.obj.id)
                            } else {
                                history.push("/login")
                            }
                        }}
                        >
                        <FavoriteIcon />
                    </IconButton>
                    {props.obj.favorites}
                    <div style={{ flexGrow: 1}}/>
                    <IconButton
                        disabled>
                        <Share/>
                    </IconButton>
                    0
                    <IconButton disabled>
                        <RemoveRedEye/>
                    </IconButton>
                    {props.obj.views}
                </CardActions>
        </Card>
    )
}

export default connect(mapStateToProps, null)(InstructionCardSM)