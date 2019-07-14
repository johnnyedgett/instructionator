import React, { useState } from 'react';
import { TextField, Button, createMuiTheme, withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import history from '../../util/history';
import isEmpty from 'lodash.isempty';

const styles = {
    search: {
        width: '60vw',
        backgroundColor: '#FFFFFF',
        borderRadius: '20px',
        '&:hover': {
            backgroundColor: '#FFFFFF',
        }
    }
}

function Search(props){
    const {classes} = props
    const [input, setInput] = useState('');
    return (
        <div>
            <TextField
                value={input}
                onChange={(e) => setInput(e.target.value) }
                placeholder="how to make hotdogs"
                variant="filled"
                id="search-input"
                label="Search"
                InputProps={{ disableUnderline: true }}
                className={classes.search}/>
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