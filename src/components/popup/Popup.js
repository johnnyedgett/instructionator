import React from 'react'
import { withStyles } from '@material-ui/styles';
import { Dialog } from '@material-ui/core';
import Login from '../login/Login';

const styles = {

}

// Work on making this more generic.
function Popup(props){
    return (
        <Dialog
            open={props.hidden}>
                {props.popupChild}
        </Dialog>
    )
}

export default withStyles(styles)(Popup)