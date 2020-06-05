import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Resume from './views/Resume';
import Portfolio from './views/Portfolio'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  
export default function TopBar() {
    const classes = useStyles();
    
    return (
        <Router>
            <div className = "TopBar">
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Portfolio
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        </Router>
    )

}
                        // <Toolbar>
                        //     <Switch>
                        //     <Typography varient = "h6" color = "inherit" noWrap>
                        //         <Route expact path = "/"> 
                        //             <Portfolio/>                                  
                        //             Portfolio
                        //         </Route>
                        //     </Typography>
                        //     <Typography varient = "h6" color = "inherit" noWrap>
                        //         <Route expact path = "/resume">
                        //             <Resume/>
                        //             Resume
                        //         </Route>
                        //     </Typography>
                        //     <Typography varient = "h6" color = "inherit" noWrap>
                        //         <Route exact path = "/github">
                        //             {/* Redirect to Github */}
                        //         </Route>
                        //         Github
                        //     </Typography>
                        //     </Switch>
                        //     <Typography variant="h6" color="inherit" noWrap>
                        //     Album layout
                        //     </Typography>
                        // </Toolbar>