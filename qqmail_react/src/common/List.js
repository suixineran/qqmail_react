import React, { Component } from 'react'
import  { Table, Pagination } from 'antd'



class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ids: [],

        }

    }

    render() {

        let columns = this.props.columns
        let data = this.props.data
        console.log('data', this.props)
        let selectedmail = this.props.selectedmail

        var rowSelection = {
            onSelect: function(record, selected, selectedRows) {
                console.log('record', record.id)
                console.log('selected', selected)
                selectedmail(record, selected)
            },
            onSelectAll: function(selected, selectedRows) {
                console.log('selected', selected);
                console.log('selectedRows', selectedRows);
            }
        }

        var pagination = {
            total: data.length,
            // current: 2,
            showSizeChanger: true
        };

        return (
            <div>
                <Table  rowSelection={rowSelection} columns={columns} dataSource={data}  pagination={pagination} />
            </div>
        )
    }
}

export default List
