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

function Register(props){
    return (
        <div>
            Register mounted
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Register));