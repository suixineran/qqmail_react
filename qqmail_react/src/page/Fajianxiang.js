import React, { Component } from 'react'
import TodoApi from "../api/mail";
import List from "../common/List"
import TopButton from "../common/TopButtons";
import MailMenu from "../common/MailMenu";
import {Link} from "react-router-dom";
const log = console.log.bind(console)

class Fajianxiang extends Component {
    constructor(props) {
        super(props)
        this.api = new TodoApi()
        this.state = {
            mails: [],
            ids:[],
        }
        this.selectedmail = this.selectedmail.bind(this)

    }

    componentDidMount() {
        this.api.sjx((r) => {
            let mails = r
            // log('后台数据',mails)
            this.setState({
                mails,
            })
        })
    }

    selectedmail(record, selected) {
        let ids = this.state.ids
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

    render() {
        // console.log('准备渲染的ids', this.state.ids)
        let mails = this.state.mails
        let mail1 = mails.filter(e => e.type === "yifu")
        function compareDescSort(property){
            return function(a,b){
                var value1 = a[property];
                var value2 = b[property];
                return  value2 - value1;
            }
        }

        let mail2 = mail1.sort(compareDescSort("id"))



        var columns = [
            {
                title: '收件人',
                dataIndex: 'addresser',
                render: function(text, record, index ) {
                    let id = record.id
                    let url = `/sjx/${id}`
                    return (
                        <div>
                            <Link  to={{pathname: url,}}> {text} </Link>
                        </div>
                    )
                }
            },
            {
                title: '主题',
                dataIndex: 'mailSubject',
                render: function(text, record, index ) {
                    let id = record.id
                    let url = `/sjx/${id}`
                    return (
                        <div>
                            <Link  to={{pathname: url,}}> {text} </Link>
                        </div>
                    )
                }
            },
            {
                title: '时间',
                dataIndex: 'time',
                render: function(text, record, index ) {
                    let id = record.id
                    let url = `/sjx/${id}`
                    return (
                        <div>
                            <Link  to={{pathname: url,}}> {text} </Link>
                        </div>
                    )
                }
            }
        ];

        return (
            <div>
                <MailMenu />
                <h1> 已发邮件 </h1>
                <TopButton ids={this.state.ids} />

                <List
                    selectedmail={this.selectedmail}
                    columns={columns}
                    data={mail2}
                />
            </div>
        )
    }
}

export default Fajianxiang
