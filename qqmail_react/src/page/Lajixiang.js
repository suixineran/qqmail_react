import React, { Component } from 'react'
import TodoApi from "../api/mail";
import List from "../common/List"
import Button from "../common/Buttons";

class Lajixiang extends Component {
    constructor(props) {
        super(props)
        this.api = new TodoApi()
        this.state = {
            todos: [],
            text: '',
        }
    }

    render() {



        return (
            <div>
                <div> 垃圾箱 </div>
                <Button/>
                {/*<List/>*/}
            </div>
        )
    }
}

export default Lajixiang
