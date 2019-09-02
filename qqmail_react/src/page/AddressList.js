import React, { Component } from 'react'
import TodoApi from "../api/mail"
import List from "../common/List"
// import Button from "../common/TopButtons";
import {Link} from "react-router-dom";
import MailMenu from "../common/MailMenu";
const log = console.log.bind(console)

class AddressList extends Component {
    constructor(props) {
        super(props)
        this.api = new TodoApi()
        this.state = {
            data: [],
            ids: [],
        }
        this.selectedmail = this.selectedmail.bind(this)
        this.cleanMail = this.cleanMail.bind(this)
        // this.addUpdata = this.addUpdata.bind(this)
    }
    componentDidMount() {
        this.api.addresslist((r) => {
            // console.log('address',r)
            let data = r
            this.setState({
                data:data,
            })
        })
    }

    selectedmail(record, selected) {
        let ids = this.state.ids
        // console.log('联系人是否可以')
        // console.log('联系人的id', ids)
        // console.log('record', record.id)
        // console.log('record', record.id)
        // console.log('selected', selected)
        if (selected) {
            ids.push(record.id)
            this.setState({
                ids
            })
        }
        // if (!selected) {
        //     let index = ids.indexOf(record.id)
        //     ids.splice(index, 1)
        //     this.setState({
        //         ids
        //     })
        // }
    }
    cleanMail() {
        // console.log('this.props delete')
        // console.log('ids-------button',this.props.ids)
        // console.log('this.props.ids', this.props.ids)

        let ids = this.state.ids
        console.log(' 删除组件中ids', ids)
        for (let i = 0; i < ids.length; i++) {
            let id = ids[i]
            this.api.deleteAdd(id,(r) => {
                console.log('r', r)
            })
        }
    }
    // addUpdata() {
    //     let ids = this.state.ids
    //     // console.log(' 跟新组件ids', ids)
    //     this.api.updateAdd(ids, data,(r) => {
    //         console.log('r', r)
    //
    //     })
    //
    // }

    render() {
        let url = "/addresslist/add"
        // let url2 = "/addresslist/updata/:id"
        // let url2 = "/addresslist/delete/:id"
        let url1 = '/succe'
        var columns = [{
            title: '收件人',
            dataIndex: 'name',
            render: function(text, record, index ) {
                let id = record.id
                let url = `/sjx/${id}`
                return (
                    <div>
                        <span> {text} </span>
                    </div>
                )
            }
        }, {
            title: '邮件',
            dataIndex: 'mail',
            render: function(text, record, index ) {
                let id = record.id
                let url = `/sjx/${id}`
                return (
                    <div>
                        <spn> {text} </spn>
                    </div>
                )
            }
        }, {
            title: '电话',
            dataIndex: 'phnumber',
            render: function(text, record, index ) {
                let id = record.id
                let url = `/sjx/${id}`
                return (
                    <div>
                        <span> {text} </span>
                    </div>
                )
            }
        }]
        let ids = this.state.ids
        let data = this.state.data

        console.log('渲染联系人的id', ids)
        return (
            <div>
                <MailMenu />
                <div> 通讯簿 </div>
                {/*<Link  to={{pathname: url,}}>  <button>添加 </button></Link>*/}
                <Link  to={{pathname: url,} }>  <button className="ant-btn" role="button"

                >
                 添加</button></Link>

                <Link  to={{pathname: `/addresslist/updata/${ids}`, state:{ids: ids, data: data}}}>  <button className="ant-btn" role="button"
                 // onClick={this.addUpdata}
                >
                 更改</button></Link>

                <Link  to={{pathname: url1,} }>  <button className="ant-btn" role="button"
                onClick={this.cleanMail}
                >
                删除</button></Link>

                <List  columns ={columns}  data = {this.state.data}  selectedmail={this.selectedmail}/>
            </div>
        )
    }
}

export default AddressList
