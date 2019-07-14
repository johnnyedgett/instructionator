import React, { useEffect } from 'react'
import { withStyles, Typography, CssBaseline } from '@material-ui/core'
import { Switch, Route, Link } from 'react-router-dom'
import Homepage from '../homepage/Homepage'
import SearchPage from '../searchpage/SearchPage'
import Navbar from '../navbar/Navbar'
import Navside from '../navside/Navside'
import { checkBrowser } from '../../redux/actions/browser'
import { connect } from 'react-redux'
import Login from '../login/Login'
import Register from '../register/Register'
import Profile from '../profile/Profile';
import Instruction from '../instruction/Instruction';
const styles = {
    textCenter: {
        textAlign: 'center'
    }
}

const mapDispatchToProps = dispatch => {
    return {
        checkBrowser: () => dispatch(checkBrowser())
    }
}

function App(props){
    const { classes } = props;

    // On mount, check if the user is on mobile or desktop browser
    useEffect(() => {
        props.checkBrowser()
    }, [])
    return (
            <div>
                <CssBaseline/>
                <Navbar/>
                <Navside/>
                <Switch>
                    <Route exact path="/" component={Homepage}/>
                    <Route exact path="/res" component={SearchPage}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/profile" component={Profile}/>
                    <Route exact path="/instruction" component={Instruction}/>
                    <Route component={() => {
                        return (
                            <div
                                className={classes.textCenter}>
                                    <br/>
                                    <Typography variant="h4">Sorry! </Typography>
                                    <br/>
                                    <Typography variant="body1">
                                        Looks like something went wrong. <Link to="/">Head home here.</Link> 
                                        You'll be redirected, like, never, because it's not implemented yet! :)
                                    </Typography>
                                    <br/>
                                    <img src={require('../../assets/sad-doggo.jpeg')} alt="404 not found" width="33%" height="33%"/>
                            </div>
                        )
                    }}/>
                </Switch>
            </div>
    );
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(App));