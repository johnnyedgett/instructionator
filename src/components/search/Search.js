import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import history from '../../util/history';
import isEmpty from 'lodash.isempty';
import Popup from '../popup/Popup';

const styles = {
    searchWidth: {
        width: '60vw',
        backgroundColor: '#fcfcfb',
    }
};

function Search(props){
    const { classes } = props;
    const [input, setInput] = useState('');
    return (
        <div>
            <TextField
                value={input}
                onChange={(e) => {
                    setInput(e.target.value);
                    console.log(e);
                }}
                variant="filled"
                className={classes.searchWidth}/>
            <br/>
            <br/>
            <Button
                onClick={() => history.push(`/res?search=${input}`)} 
                variant="contained"
                color={isEmpty(input)?"default":"primary"}>
                    Go!
            </Button>
        </div>
    )
}

export default withStyles(styles)(Search)