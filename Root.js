var injectTapEventPlugin = require("react-tap-event-plugin")
import Paper from 'material-ui/Paper';
const style = {
    height: 500,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
    width: window.outerWidth - 40,
};
import React, {Component} from 'react';

import logo from '../src/logo.svg';
import '../src/App.css';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import People from '../src/People';
import Info from './Info';
import Home from './home'
import {
    HashRouter,
    Route,
    Link
} from 'react-router-dom';

export default class Root extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        const navInstance = (
            <HashRouter>
                <div>
                    <nav className="navbar navbar-default">
                        <div className="container">
                            <div className="navbar-header">
                                <ul className="nav navbar-nav">
                                    <li><Link to='/'>Home</Link></li>
                                    <li><Link to='/people'>People</Link></li>
                                    <li><Link to='/info'>Statistics</Link></li>

                                </ul>
                            </div>
                        </div>
                    </nav>
                    <hr/>
                    <Route path="/people" component={People}/>
                    <Route path="/info" component={Info}/>
                    <Route exact path="/" component={Home}/>
                </div>
            </HashRouter>
        );
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                        <Paper style="marginLeft: -50, marginTop: 40, textAlign: 'center',display: 'inline-block', width: window.outerWidth - 40," zDepth={1} rounded={true}>
                            {navInstance}
                            {this.props.children}
                        </Paper>
                    </MuiThemeProvider>
                </div>
            </div>
        );
    }
}
