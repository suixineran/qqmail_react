import React, {Component} from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"

import Home from "./common/Home"


import Shouye from "./page/Shouye"
import Write from "./page/Write"
import AddressList from "./page/AddressList"
import Fajianxiang from "./page/Fajianxiang"
import Shoujianxiang from "./page/Shoujianxiang"
import Lajixiang from "./page/Lajixiang"

import Detail from "./common/Detail"
import AddressAdd from "./common/AddressAdd"
import Header1 from "./common/header/Header1"
// import NextLeft from "./common/header/NextLeft"

// import Header1 from "./common/header/Header1"
class App extends Component {
    render() {
        return (
            <div>
                <Header1 />

                <div>
                    <div className={"App-next"}>
                        <div className={"App-next-left"}>
                            <div className={"App-next-left-up"}>
                                <ul className={'App-next-left-up-ul'}>
                                    <li><a href="/write">写信</a></li>
                                    <li><a href="/sjx">收信</a></li>
                                    <li><a href="/addresslist">通讯录</a></li>

                                </ul>

                            </div>
                            <div className={"App-next-left-down" }>

                                <ul className={'App-next-left-down-ul'}>
                                    <li><a href="/sjx">收件箱</a></li>
                                    <li><a href="/fjx">已发邮件</a></li>
                                    <li><a href="/ljx">垃圾箱</a></li>
                                    <li><a href="javascript:;">群邮件</a></li>
                                    <li><a href="javascript:;">星级邮件</a></li>
                                    <li><a href="javascript:;">订阅邮件</a></li>

                                </ul>

                            </div>

                        </div>
                        <div className={"App-next-right"}>

                            <Router>
                                <div>

                                    <Route exact path="/shouye" component={Shouye} />
                                    <Route exact path="/write" component={Write} />
                                    <Route exact path="/fjx" component={Fajianxiang} />
                                    <Route exact path="/sjx" component={Shoujianxiang} />
                                    <Route exact path="/ljx" component={Lajixiang} />
                                    <Route exact path="/addresslist" component={AddressList} />
                                    <Route path="/sjx/:id" component={Detail} />
                                    <Route exact path="/addresslist/add" component={AddressAdd} />

                                    <Route exact path="/sjxdelete/:id" component={Detail} />
                                    <Route exact path="/" component={Home} />

                                </div>
                            </Router>
                            {/*<NextLeft/>*/}
                        </div>

                        </div>
                    </div>
                </div>

        )
    }
}

export default App
