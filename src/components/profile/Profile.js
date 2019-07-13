import React from 'react'
import { withStyles } from '@material-ui/core';

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
            Register mounted
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Profile));