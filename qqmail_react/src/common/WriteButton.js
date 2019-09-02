import React, { Component } from 'react'
// import  { Button, Tabs, Form, Iconfont } from 'antd'
import 'antd/dist/antd.css'
import './Detail.css'
import MailMenu from "./MailMenu";
import TodoApi from "../api/mail"
import {Link} from "react-router-dom"
import { Alert } from 'antd'

class Writebutton extends Component {
    constructor(props) {
        super(props)
        this.api = new TodoApi()
        this.state = {
            addresser: "",
            sendingAddress: "",
            mailSubject: "",
            mailcontent: "",
            time: "",
            id: "",
        }
        this.onSubmit = this.onSubmit.bind(this)
        this._changeValue = this._changeValue.bind(this)
    }

    _changeValue(e) {
        // console.log('写信改变',e.target.name, e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault()
        // console.log('写信提交', this.state)


        let  now = new Date

        var formatDate = function(d) {
            var now = new Date(d);
            var year = now.getFullYear();
            var month = now.getMonth() + 1;
            var date = now.getDate();
            var hour = now.getHours();
            var minute = now.getMinutes();
            var second = now.getSeconds();
            return year + "-" + month + "-" + date + " " + hour + ":" + minute;
        }




        let data = {
            addresser:  this.state.addresser,
            sendingAddress:  `<${this.state.addresser}@mail.com>`,
            mailSubject:  this.state.mailSubject,
            mailcontent: this.state.mailcontent,
            id:  Number(new Date),
            time: formatDate(new Date),
            done:  false,
            type:  "yifu",
        }
        this.api.addMail(data, (r) => {
            // console.log('是否包含data.values',data, )
            if(Object.values(data).includes("")) {
                // console.log('是否包含data.values' )
                return
                // (
                //     <div> 测试</div>

              //   <Alert
              //   message="信息不全，请重新输入！"
              //   description="This is a warning notice about copywriting."
              //   type="warning"
              //   showIcon
              // />
            // )

            }
            let ts = r
            // console.log('添加已发信件', ts)
            this.setState({
                addresser: "",
                sendingAddress: "",
                mailSubject: "",
                mailcontent: "",
                time: "",
                id: "",
            })

        })

    }
    render() {
        // function handleSelectChange(value) {
        //     console.log('selected ' + value);
        // }
        let url = '/addmail'
        let { addresser, sendingAddress, mailSubject, mailcontent, } = this.state;

        return (
            <div>
                <Link  to={{
                    pathname: url,
                }}
                >   <button className="ant-btn" onClick={this.onSubmit}>发送</button> </Link>


                <button className="ant-btn">定时发送</button>
                <button className="ant-btn">存稿</button>
                <button className="ant-btn">关闭</button>

                <form className="ant-form-horizontal">
                    <div className="ant-form-item">
                        <label htmlFor="control-input1" className="col-6">收件人：</label>
                        <div className="col-14">
                            <input type="text" className="ant-input" id="control-input1" placeholder="收件人"
                                   onChange={this._changeValue } value={addresser} name='addresser'
                            />
                        </div>
                        <div>增加抄送|增加密送|分别发送</div>
                    </div>

                    <div className="ant-form-item">
                        <label htmlFor="control-input2" className="col-6">主题：</label>
                        <div className="col-14">
                            <input type="text" className="ant-input" id="control-input2" placeholder="主题描述"
                                   onChange={this._changeValue } value={mailSubject} name='mailSubject'
                            />
                        </div>
                    </div>

                    <div className="ant-form-item">
                        <label htmlFor="control-textarea" className="col-6">正文：</label>
                        <div className="col-14">
                            <textarea className="ant-input" id="control-textarea"
                                      onChange={this._changeValue } value={mailcontent} name='mailcontent'
                            > </textarea>
                        </div>
                    </div>

                </form>

            </div>
        )
    }
}

export default Writebutton
