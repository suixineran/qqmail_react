import React, { Component } from 'react'
import TodoApi from "../api/mail"
import List from "../common/List"
// import Button from "../common/Buttons";
import {Link} from "react-router-dom";

class AddressList extends Component {
    constructor(props) {
        super(props)
        this.api = new TodoApi()
        this.state = {
            data: [],
        }
    }
    componentDidMount() {
        this.api.addresslist((r) => {
            console.log('address',r)
            let date = r
            this.setState({
                data:date,
            })
        })
    }

    render() {
        let url = `/addresslist/add`
        var columns = [{
            title: '收件人',
            dataIndex: 'name',
        }, {
            title: '邮件',
            dataIndex: 'mail',
        }, {
            title: '电话',
            dataIndex: 'phnumber',
        }];

        return (
            <div>
                <div> 通讯簿 </div>
                <Link  to={{
                    pathname: url,
                }}
                >  <button>添加 </button></Link>

                <List  columns ={columns}  data = {this.state.data} />
            </div>
        )
    }
}

export default AddressList
