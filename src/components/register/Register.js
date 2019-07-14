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

function Register(props){
    const { classes } = props;
    return (
        <div
            className={classes.root}>
            Register mounted
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Register));