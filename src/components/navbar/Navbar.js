import React, { useEffect } from 'react'
import { AppBar, Toolbar, Typography, IconButton, createMuiTheme, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { withStyles, ThemeProvider } from '@material-ui/styles';
import { Person } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import { toggleLeftMenu } from '../../redux/actions/menus';
import { connect } from 'react-redux';
import history from '../../util/history'
const styles = {
    root: {
        display: 'fllexGrow'
    },
    grow: {
        flexGrow: 1
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    }
};

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleLeftMenu: () => dispatch(toggleLeftMenu())
    }
}

function Navbar(props){
    const { classes } = props;
    
    useEffect(() => {
        console.log(props.user)
    }, [])

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
                    {props.user.loggedIn?(
                        <div>
                            <Button variant="text" style ={{ textDecoration: 'none' }} onClick={() => history.push("/create")}>Create a guide!</Button>
                            <IconButton
                                onClick={() => history.push("/profile")}>
                                <Person/>
                            </IconButton>
                        </div>
                    ):(
                        <div>
                           <Typography variant="body2" color="inherit"> <Link to="/login" className={classes.link}>Login</Link> | <Link to="/register" className={classes.link}>Register</Link> </Typography>
                        </div>
                    )}
                </Toolbar>
        </AppBar>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Navbar));