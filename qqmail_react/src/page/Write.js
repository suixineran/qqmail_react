import React, { Component } from 'react'
import  {  Tabs} from 'antd'
import 'antd/dist/antd.css'
import '../common/Detail.css'
import Writebutton from "../common/WriteButton"
class Detail extends Component {

    render() {
        var TabPane = Tabs.TabPane;

        function callback(key) {
            console.log(key);
        }
        return (
            <div>
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="普通邮件" key="1">普通邮件<Writebutton/></TabPane>
                    <TabPane tab="群邮件" key="2">群邮件内容<Writebutton/> </TabPane>
                    <TabPane tab="贺卡" key="3">贺卡内容<Writebutton/> </TabPane>
                    <TabPane tab="明信片" key="4">明信片内容<Writebutton/> </TabPane>
                </Tabs>

            </div>
        )
    }
}

export default Detail
