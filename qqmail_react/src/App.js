import React, {Component} from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./common/Home"
import Hello from "./page/Hello"
import Write from "./page/Write"
import AddressList from "./page/AddressList"
import Fajianxiang from "./page/Fajianxiang"
import Shoujianxiang from "./page/Shoujianxiang"
import Lajixiang from "./page/Lajixiang"
import Detail from "./common/Detail"
import AddressAdd from "./common/AddressAdd"
import Writeyifa from "./common/Writeyifa"

import Header1 from "./common/header/Header1"
// import NextLeft from "./common/header/NextLeft"
// // import Header1 from "./common/header/Header1"

class App extends Component {
    render() {
        return (
            <div>
                {/*<Header1 />*/}

                <div>
                    <div className={"App-next"}>
                        {/*<div className={"App-next-left"}>*/}
                        {/*    <div className={"App-next-left-up"}>*/}
                        {/*        <ul className={'App-next-left-up-ul'}>*/}
                        {/*            <li><a href="/write">写信</a></li>*/}
                        {/*            <li><a href="/sjx">收信</a></li>*/}
                        {/*            <li><a href="/addresslist">通讯录</a></li>*/}
                        {/*        </ul>*/}
                        {/*    </div>*/}

                        {/*    <div className={"App-next-left-down" }>*/}

                        {/*        <ul className={'App-next-left-down-ul'}>*/}
                        {/*            <li><a href="/sjx" key='down01'>收件箱</a></li>*/}
                        {/*            <li><a href="/fjx" key='down02'>已发邮件</a></li>*/}
                        {/*            <li><a href="/ljx" key='down03'>垃圾箱</a></li>*/}
                        {/*            <li><a href="javascript:;"  key='down05'>群邮件 (2)</a></li>*/}
                        {/*            <li><a href="javascript:;" key='down06'>群邮件 (2)</a></li>*/}
                        {/*            <li><a href="javascript:;" key='down07'>群邮件 (2)</a></li>*/}
                        {/*            <li><a href="javascript:;" key='down08'>群邮件 (2)</a></li>*/}
                        {/*        </ul>*/}

                        {/*    </div>*/}

                        {/*</div>*/}
                        <div className={"App-next-right"}>
                            {/*下面的是注册路由的部分，显示什么内容 还需要看访问的具体路径*/}


                            <Router>
                                <div>
                                    <Route exact path="/" component={Home} />
                                    <Route exact path="/hello" component={Hello} />
                                    <Route exact path="/write" component={Write} />
                                    <Route exact path="/fjx" component={Fajianxiang} />
                                    <Route exact path="/sjx" component={Shoujianxiang} />
                                    <Route exact path="/ljx" component={Lajixiang} />
                                    <Route exact path="/addresslist" component={AddressList} />

                                    <Route exact path="/addresslist/add" component={AddressAdd} />
                                    <Route exact path="/addmail" component={Writeyifa} />
                                    <Route path="/sjxdelete/:id" component={Detail} />
                                    <Route path="/sjx/:id" component={Detail} />

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
