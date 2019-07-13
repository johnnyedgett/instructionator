import React from 'react';
import { withStyles, Drawer } from '@material-ui/core';
import { toggleLeftMenu } from '../../redux/actions/menus'

import { connect } from 'react-redux'
const styles = {
    root: {

    }
};

const mapStateToProps = state => {
    return {
        menu: state.menu
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleLeftMenu: () => dispatch(toggleLeftMenu())
    }
}

function Navside(props){
    const { classes } = props;
    return (
        <div
            className={classes.root}>
                <Drawer anchor="left" open={props.menu.leftMenuOpen} onClose={() => props.toggleLeftMenu()}>

                </Drawer>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Navside));