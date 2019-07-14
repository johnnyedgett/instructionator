import React from 'react'
import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux'

const styles = {

}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

function Profile(props){
    const { classes } = props;
    return (
        <div
            className={classes.root}>
            Profile mounted
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Profile));