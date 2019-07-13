import React from 'react'
import { createMuiTheme, withStyles, Typography, CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles';
import { Switch, Route, Link } from 'react-router-dom'
import Homepage from '../homepage/Homepage'
import SearchPage from '../searchpage/SearchPage'
import Navbar from '../navbar/Navbar'
import Navside from '../navside/Navside'

const styles = {
    textCenter: {
        textAlign: 'center'
    }
}
const theme = createMuiTheme({
    // palette: {
        // primary: {
            // main: '#FFFFFF'
        // }
    // }
});
function App(props){
    const { classes } = props;
    return (
        // <ThemeProvider theme={theme}>
            <div>
                <CssBaseline/>
                <Navbar/>
                <Navside/>
                <Switch>
                    <Route exact path="/" component={Homepage}/>
                    <Route exact path="/res" component={SearchPage}/>
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
        // </ThemeProvider>
    );
};

export default withStyles(styles)(App);