import React from 'react';

// For Greased, Non Greased, and All
export default class FilterPig extends React.Component {
    render() {
        return (
            <select onChange={this.props.filterPigs}>
                <option value="all">All</option>
                <option value={true}>Greased</option>
                <option value={false}>Not Greased</option>
            </select>
        )
    }
}