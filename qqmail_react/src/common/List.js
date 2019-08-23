import React, { Component } from 'react'
import  { Table } from 'antd'



class List extends Component {
    constructor(props) {
        super(props)

    }

    render() {

        let columns = this.props.columns
        let data = this.props.data
        console.log('data', data)
        var rowSelection = {
            onSelect: function(record, selected, selectedRows) {
                console.log(record, selected, selectedRows);
            },
            onSelectAll: function(selected, selectedRows) {
                console.log(selected, selectedRows);
            }
        }

        var pagination = {
            total: data.length,
            current: 2,
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
