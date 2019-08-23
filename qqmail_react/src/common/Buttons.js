import React, { Component } from 'react'
import  { Button } from 'antd'
import 'antd/dist/antd.css'


class Buttons extends Component {

    render() {
        return (
            <div>
                <a href="javascript:;" className="ant-btn" role="button">返回</a>
                <a href="javascript:;" className="ant-btn" role="button">删除</a>
                <a href="javascript:;" className="ant-btn" role="button">转发</a>
                <a href="javascript:;" className="ant-btn" role="button">举报</a>
                <a href="javascript:;" className="ant-btn" role="button">全部标记为已读</a>
                <a href="javascript:;" className="ant-btn" role="button">标记...</a>
                <a href="javascript:;" className="ant-btn" role="button">移动到...</a>
            </div>
        )
    }
}

export default Buttons
