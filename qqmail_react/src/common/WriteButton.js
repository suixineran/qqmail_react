import React, { Component } from 'react'
// import  { Button, Tabs, Form, Iconfont } from 'antd'
import 'antd/dist/antd.css'
import './Detail.css'

class Writebutton extends Component {

    render() {
        // function handleSelectChange(value) {
        //     console.log('selected ' + value);
        // }

        return (
            <div>
                <button className="ant-btn">发送</button>
                <button className="ant-btn">定时发送</button>
                <button className="ant-btn">存稿</button>
                <button className="ant-btn">关闭</button>

                <form className="ant-form-horizontal">
                    <div className="ant-form-item">
                        <label htmlFor="control-input" className="col-6">收件人：</label>
                        <div className="col-14">
                            <input type="text" className="ant-input" id="control-input" placeholder="收件人" />
                        </div>
                        <div>增加抄送|增加密送|分别发送</div>
                    </div>

                    <div className="ant-form-item">
                        <label htmlFor="control-input" className="col-6">主题：</label>
                        <div className="col-14">
                            <input type="text" className="ant-input" id="control-input" placeholder="主题描述" />
                        </div>
                    </div>

                    <div className="ant-form-item">
                        <label htmlFor="control-textarea" className="col-6">正文：</label>
                        <div className="col-14">
                            <textarea className="ant-input" id="control-textarea" > </textarea>
                        </div>
                    </div>

                </form>

            </div>
        )
    }
}

export default Writebutton
