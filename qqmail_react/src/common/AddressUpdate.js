import React, { Component } from 'react'
// import  { Button, Tabs, Form, Iconfont, Dropdown, Menu } from 'antd'
import 'antd/dist/antd.css'
import './Detail.css'
import TodoApi from "../api/mail"
import { Link } from 'react-router-dom'

class AddressUpdate extends Component {
    constructor(props) {
        super(props)
        this.api = new TodoApi()
        this.state = {
            name: '',
            mail: '',
            phnumber: '',

        }
        this.updateAdd = this.updateAdd.bind(this)
        this._changeValue = this._changeValue.bind(this)
    }

    _changeValue(e) {
        // console.log('change11',e.target.name, e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    updateAdd(e) {
        e.preventDefault()
        // console.log('onSubmitonSubmit', this.state)
        let id = this.props.location.state.ids[0]
        console.log('idididid', id)
        let data = {
            name: this.state.name,
            mail: this.state.mail,
            phnumber: this.state.phnumber,
            key: new Date,

        }
        this.api.updateAdd(id, data, (r) => {
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
        let d = this.props.location.state
        let { ids, data} = d
        console.log("更新单页父级",ids, data )
        let index = data.findIndex(e => e.id === ids[0])
        console.log("父级",index, data[index] )

        // let name1 = data[index].name
        // let mail1 = data[index].mail
        // let phnumber1 = data[index].phnumber

        let { name, mail, phnumber } = this.state
        console.log("gengxin",name, mail, phnumber )

        return (
            <div>
                <h1>更新界面</h1>
                <Link  to={{pathname: '/succe',  } }>
                    <button className="ant-btn" role="button" onClick={this.updateAdd}>保存</button></Link>

                <Link  to={{pathname: "/addresslist",  } }>
                    <button className="ant-btn" role="button">返回</button></Link>

                <br/>
                <br/>

                <div>  姓名 <input onChange={this._changeValue } value={name} name='name'
                                 // placeholder= {`${name1}`}
                /></div>
                <div>  邮箱 <input onChange={this._changeValue}  value={mail} name='mail'
                                 // placeholder={`${mail1}`}
                /></div>
                <div>  电话 <input  onChange={this._changeValue} value={phnumber} name='phnumber'
                                  // placeholder={`${phnumber1}`}
                /></div>


            </div>
        )
    }
}

export default AddressUpdate
