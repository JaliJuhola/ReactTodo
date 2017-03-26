import React from "react";
var data = require('../src/data.json');
var PageHeader = require('react-bootstrap/lib/PageHeader');
import Paper from "material-ui/Paper";
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';
var reduxPeople = require('../src/reducerPeople').default;
var NumericInput = require('react-numeric-input');
import {createStore} from 'redux'
import {replaceReducer} from 'redux'
import store from '../src/index';
const allReducers = require('./reduxIndex').default;
const style1 = {
    width: parent.width * 0.70,
};
class Home extends React.Component
{
    refreshState()
    {
        var amount = document.getElementById('numInput').value;
        store.replaceReducer(allReducers);
    }
    render() {
        return (
            <div>
                <PageHeader>
                    Home page
                    <small>You can add people here</small>
                </PageHeader>
                <Paper style={style1} zDepth={5}>
                    <label for="numInput">Amount: </label>
                    <NumericInput id="numInput" className="form-control"/>
                    <RaisedButton onClick={this.refreshState.bind(this)} label="Submit adding" primary={true}/>
                </Paper>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        people: state.people
    };
}
export default connect(mapStateToProps)(Home);