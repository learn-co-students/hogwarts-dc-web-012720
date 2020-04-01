import React from 'react'

export default class SortPigs extends React.Component {

    render() {
        return (
            <select onChange={this.props.sortPigs}>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
                <option value="ASC">Weight Ascending</option>
                <option value="DEC">Weight Descending</option>
            </select>
        )
    }
}