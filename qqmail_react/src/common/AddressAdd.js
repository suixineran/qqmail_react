import React, { Component } from 'react'
// import  { Button, Tabs, Form, Iconfont, Dropdown, Menu } from 'antd'
import 'antd/dist/antd.css'
import './Detail.css'
import TodoApi from "../api/mail"
import { Link } from 'react-router-dom'

class AddressAdd extends Component {
    constructor(props) {
        super(props)
        this.api = new TodoApi()
        this.state = {
            name: '',
            mail: '',
            phnumber: '',

        }
        this.onSubmit = this.onSubmit.bind(this)
        this._changeValue = this._changeValue.bind(this)
    }

    _changeValue(e) {
        // console.log('change11',e.target.name, e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault()
        // console.log('onSubmitonSubmit', this.state)

        let data = {
            name: this.state.name,
            mail: this.state.mail,
            phnumber: this.state.phnumber,
            key: Number(new Date),
        }
        this.api.addAdd(data, (r) => {
            let ts = r
            console.log('message', ts)
            this.setState({
                name: '',
                mail: '',
                phnumber: '',
            })

        })

    }


    render() {
        // console.log('-------', this.props.location)
        let { name, mail, phnumber } = this.state;


        let url3 = "/addresslist"

        return (
            <div>
                <button className="ant-btn"  onClick={this.onSubmit} >保存</button>

                <Link  to={{pathname: url3,  } }>  <button className="ant-btn" role="button">返回</button></Link>

                <br/>
                <br/>
                <div>  姓名 <input onChange={this._changeValue } value={name} name='name' /></div>
                <div>  邮箱 <input onChange={this._changeValue}  value={mail} name='mail' /></div>
                <div>  电话 <input  onChange={this._changeValue} value={phnumber} name='phnumber' /></div>


            </div>
        )
    }
}

export default AddressAdd
