import React from "react";
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
var data = require('../src/data.json');
var PageHeader = require('react-bootstrap/lib/PageHeader');
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class People extends React.Component {
    getUsers() {
       return this.props.people.map((person) => {
            return (
                <TableRow key={person.id}>
                    <TableRowColumn>{person.first_name + " " + person.last_name}</TableRowColumn>
                    <TableRowColumn>{person.age}</TableRowColumn>
                    <TableRowColumn>{person.birthplace}</TableRowColumn>
                </TableRow>
            );
        });
    }

    render() {
        return (
            <div>
                <PageHeader>
                   People page <small>All added people</small>
                </PageHeader>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Age</TableHeaderColumn>
                            <TableHeaderColumn>Birthplace</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {this.getUsers()}
                    </TableBody>
                </Table>
            </div>
        );
    }

}
function mapStateToProps(state) {
    return {
        people: state.people
    };
}
export default connect(mapStateToProps)(People);