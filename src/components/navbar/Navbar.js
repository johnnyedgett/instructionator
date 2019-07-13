import React from 'react'
import { AppBar, Toolbar, Typography, IconButton, createMuiTheme } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { withStyles, ThemeProvider } from '@material-ui/styles';
import { Person } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import { toggleLeftMenu } from '../../redux/actions/menus';
import { connect } from 'react-redux';

const styles = {
    root: {
        display: 'fllexGrow'
    },
    grow: {
        flexGrow: 1
    }
};

const mapStateToProps = state => {

}

const mapDispatchToProps = dispatch => {
    return {
        toggleLeftMenu: () => dispatch(toggleLeftMenu())
    }
}

function Navbar(props){
    const { classes } = props;
    return (
        <AppBar
            position="sticky"
            elevation={1}
            color="inherit">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={() => props.toggleLeftMenu()}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6"><Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Instuctionator</Link></Typography>
                    <div className={classes.grow}/>
                    <IconButton>
                        <Person/>
                    </IconButton>
                </Toolbar>
        </AppBar>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Navbar));