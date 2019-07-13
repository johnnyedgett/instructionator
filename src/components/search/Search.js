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
        // transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:hover': {
            backgroundColor: '#FFFFFF',
        }
    }
}

// I was experimenting with makeStyles but it seems to cause some weird bug
//  if you focus in the search box then hover away..
// const useStyles = makeStyles(theme => ({
//     root: {
//         width: '60vw',
//         backgroundColor: '#FFFFFF',
//         borderRadius: '20px',
//         // transition: theme.transitions.create(['border-color', 'box-shadow']),
//         '&:hover': {
//             backgroundColor: '#FFFFFF',
//         },
//         '&$focused': {
//             backgroundColor: '#FFFFFF',
//             // boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
//             // borderColor: theme.palette.primary.main,
//         },
//     }
// }))

// function SearchBar(props){
//     const classes = useStyles()

//     return <TextField InputProps={{ classes, disableUnderline: true}} {...props}/>
// }

function Search(props){
    const {classes} = props
    const [input, setInput] = useState('');
    return (
        <div>
                {/* <SearchBar
                    value={input}
                    onChange={(e) => setInput(e.target.value) }
                    placeholder="What do you want to do?"
                    variant="filled"
                    id="search-input"
                    label="Search"/> */}
            <TextField
                value={input}
                onChange={(e) => setInput(e.target.value)}
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