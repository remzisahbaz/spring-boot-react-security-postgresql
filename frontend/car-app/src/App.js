import React, {Component} from "react";
import {Link, Route, Switch} from "react-router-dom";
import "./App.css";
import {styles} from "./css-common"

import AddCar from "./components/AddCar";
import Car from "./components/Car";
import CarsList from "./components/CarsList";

import {AppBar, Toolbar, Typography, withStyles} from '@material-ui/core';
import RegisterUser from "./components/RegisterUser";
import Login from "./components/Login";


class App extends Component {

    render() {
        /*const user = useSelector(state => state);*/
        const {classes} = this.props
/*console.log(user)*/
        return (
            <div>
                <AppBar className={classes.appBar} position="static">
                    <Toolbar>
                        <Typography className={classes.name} variant="h6">
                            Car Dashboard
                        </Typography>
                        <Link to={"/cars"} className={classes.link}>
                            <Typography variant="body2">
                                Cars
                            </Typography>
                        </Link>
                        <Link to={"/add"} className={classes.link}>
                            <Typography variant="body2">
                                Add
                            </Typography>
                        </Link>

                        <Link to={"/user"} className={classes.link}>
                            <Typography variant="body2">
                                Sign Up
                            </Typography>
                        </Link>
                        <Link to={"/auth/authenticate"} className={classes.link}>
                            <Typography variant="body2">
                                Sign In
                            </Typography>
                        </Link>
                        <div>
                            <Typography variant="body2">
                                {this.props.token}
                        </Typography>

                        </div>
                    </Toolbar>
                </AppBar>

                <Switch>
                    <Route exact path={["/", "/cars"]} component={CarsList}/>
                    <Route exact path="/add" component={AddCar}/>
                    <Route path="/cars/:id" component={Car}/>
                    <Route path="/user" component={RegisterUser}/>
                    <Route path="/auth/authenticate" component={Login}/>
                </Switch>
            </div>
        );
    }
}

export default withStyles(styles)(App);