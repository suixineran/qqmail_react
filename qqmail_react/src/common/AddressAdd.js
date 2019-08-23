import React, { Component } from 'react'
import  { Button, Tabs, Form, Iconfont, Dropdown, Menu } from 'antd'
import 'antd/dist/antd.css'
import './Detail.css'
import TodoApi from "../api/mail";

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
        console.log('change11',e.target.name, e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault()
        console.log('onSubmitonSubmit', this.state)

        let data = {
            name: this.state.name,
            mail: this.state.mail,
            phnumber: this.state.phnumber,
        }
        this.api.add(data, (r) => {
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
        console.log('-------', this.state)
        let { name, mail, phnumber } = this.state;
        return (
            <div>
                <button className="ant-btn"  onClick={this.onSubmit} >保存</button>
                <button className="ant-btn">取消</button>
                <br/>
                <br/>
                <div>  姓名 <input onChange={this._changeValue } value={name} name='name'   /></div>
                <div>  邮箱 <input onChange={this._changeValue}  value={mail} name='mail' /></div>
                <div>  电话 <input  onChange={this._changeValue} value={phnumber} name='phnumber' /></div>

                {/*<div>  姓名 <input onChange={this._changeValue }  name='name'   /></div>*/}
                {/*<div>  邮箱 <input onChange={this._changeValue}  name='mail' /></div>*/}
                {/*<div>  电话 <input  onChange={this._changeValue} name='phnumber' /></div>*/}

            </div>
        )
    }
}

export default AddressAdd
