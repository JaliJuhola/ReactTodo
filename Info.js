import React from "react";
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
var data = require('../src/data.json');
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';
var PageHeader = require('react-bootstrap/lib/PageHeader');
import ActionInfo from 'material-ui/svg-icons/action/info';
import FileFolder from 'material-ui/svg-icons/file/folder';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
const style1 = {
    width: parent.width * 0.70,
    display: 'inline-block',

};
const style2 = {
        flex: 1,
        alignItems: 'center'
}
const item= {
    width: parent.innerWidth * 0.5
}
class info extends React.Component
{
    onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }
    getAgeModifiers() { // averageAge + amount of persons
        var averageAge = 0;
        var amountOfItems = 0;
        var max = Number(0);
        var ages = [];
        var i = 0;
        var min = Number.MAX_VALUE;
        var medianAge = Number(0);
        this.props.people.map((person) => {
            ages[i] = person.age;
            i = i + 1;
            if(person.age > max)
            {
                max = person.age;
            }
            if(person.age < min) {
                min = person.age;
            }
            amountOfItems = amountOfItems + 1;
            averageAge = averageAge + person.age;
        });
        ages = ages.sort();
        medianAge = ages[Math.round(amountOfItems / 2)];
        console.log("mediaani on: " + medianAge);
        averageAge = averageAge / amountOfItems;
                return (
                    <div>
                        <ListItem
                            leftAvatar={<Avatar icon={<FileFolder />}/>}
                            rightIcon={<ActionInfo />}
                            primaryText="Max age"
                            secondaryText={max}
                        />
                        <ListItem
                            leftAvatar={<Avatar icon={<FileFolder />}/>}
                            rightIcon={<ActionInfo />}
                            primaryText="min age"
                            secondaryText={min}
                        />
                        <ListItem
                            leftAvatar={<Avatar icon={<FileFolder />}/>}
                            rightIcon={<ActionInfo />}
                            primaryText="Average age"
                            secondaryText={averageAge}
                        />
                        <ListItem
                            leftAvatar={<Avatar icon={<FileFolder />}/>}
                            rightIcon={<ActionInfo />}
                            primaryText="Median age"
                            secondaryText={medianAge}
                        />
                    </div>
    );
    }
    getBirhPlaceMOdifiers()
    {
        var items = [];
        var i = 0;
        var maxAmount = 0;
        var mostCommonOne = "this is empty";
        var uniqueItems = 0;
        this.props.people.map((person) => {
            items[i] = person.birthplace;
            i = i + 1;
        });
        items.map((item) =>{
            var localMax = 1;
            console.log(item.innerHTML)
            console.log("items foreach");
            items.map((item2) =>
            {
                if(item == item2)
                {
                    localMax = localMax + 1;
                }
            });
            if(localMax > maxAmount)
            {
                maxAmount = localMax;
                mostCommonOne = item;
            }
        });
        uniqueItems = items.filter(this.onlyUnique).length;
            return (
                <div>
                    <ListItem
                        leftAvatar={<Avatar icon={<FileFolder />} />}
                        rightIcon={<ActionInfo />}
                        primaryText="Most common value"
                        secondaryText={mostCommonOne}
                    />
                    <ListItem
                        leftAvatar={<Avatar icon={<FileFolder />} />}
                        rightIcon={<ActionInfo />}
                        primaryText="Amount of unique items"
                        secondaryText= {uniqueItems}
                    />
                </div>
            );

    }
    getSecondNameModifiers()
    {
        var items = [];
        var i = 0;
        var maxAmount = 0;
        var mostCommonOne = "this is empty";
        var uniqueItems = 0;
        this.props.people.map((person) => {
            items[i] = person.last_name;
            i = i + 1;
        });
        items.map((item) =>{
            var localMax = 1;
            items.map((item2) =>
            {
                if(item == item2)
                {
                    localMax = localMax + 1;
                }
            });
            if(localMax > maxAmount)
            {
                maxAmount = localMax;
                mostCommonOne = item;
            }
        });
        uniqueItems = items.filter(this.onlyUnique).length;
        return (
            <div>
                <ListItem
                    leftAvatar={<Avatar icon={<FileFolder />} />}
                    rightIcon={<ActionInfo />}
                    primaryText="Most common value"
                    secondaryText={mostCommonOne}
                />
                <ListItem
                    leftAvatar={<Avatar icon={<FileFolder />} />}
                    rightIcon={<ActionInfo />}
                    primaryText="Amount of unique items"
                    secondaryText= {uniqueItems}
                />
            </div>
        );

    }
    getFirstNameModifiers()
    {
        var items = [];
        var i = 0;
        var maxAmount = 0;
        var mostCommonOne = "this is empty";
        var uniqueItems = 0;
        this.props.people.map((person) => {
            items[i] = person.first_name;
            i = i + 1;
        });
        items.map((item) =>{
            var localMax = 1;
            items.map((item2) =>
            {
                if(item == item2)
                {
                    localMax = localMax + 1;
                }
            });
            if(localMax > maxAmount)
            {
                maxAmount = localMax;
                mostCommonOne = item;
            }
        });
        uniqueItems = items.filter(this.onlyUnique).length;
        return (
            <div>
                <ListItem
                    leftAvatar={<Avatar icon={<FileFolder />} />}
                    rightIcon={<ActionInfo />}
                    primaryText="Most common value"
                    secondaryText={mostCommonOne}
                />
                <ListItem
                    leftAvatar={<Avatar icon={<FileFolder />} />}
                    rightIcon={<ActionInfo />}
                    primaryText="Amount of unique items"
                    secondaryText= {uniqueItems}
                />
            </div>
        );

    }

    render() {
        return (
            <div className="App">
                <div style={style2}>
                <PageHeader>
                    Statistics page <small>Here is some basic statistics about people you have added</small>
                </PageHeader>
                </div>
                <Paper style={style1} zDepth={5} >
                <List style={item}>
                    <Subheader>Age statistics</Subheader>
                    {this.getAgeModifiers()}
                    <Divider />
                    <Subheader>First name statistics</Subheader>
                        {this.getFirstNameModifiers()}
                    <Divider />
                    <Subheader>Second name statistics</Subheader>
                    {this.getSecondNameModifiers()}
                    <Divider />
                    <Subheader>Birthplace statistics</Subheader>
                        {this.getBirhPlaceMOdifiers()}
                    <Divider />
                    </List>
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
export default connect(mapStateToProps)(info);