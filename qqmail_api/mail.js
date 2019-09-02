const fs = require('fs')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const log = console.log.bind(console)


const app = express()

app.use(express.static('static'))
app.use(cors())
app.use(bodyParser.json())


const sendHtml = (path, response) => {
    let options = {
        encoding: 'utf-8',
    }
    fs.readFile(path, options, (error, data) => {
        log(`读取的 html 文件 ${path} 内容是`, typeof data)
        response.send(data)
    })
}

const sendJSON = (data, response) => {
    let r = JSON.stringify(data, null, 2)
    response.send(r)
}



const loadAddress = () => {
    let data = fs.readFileSync('address.json')
    let address = JSON.parse(data)
    return address
}
const address = loadAddress()


const todoUpdate = (id, form) => {
    id = Number(id)
    let todo = todoList.find(e => e.id === id)
    if (todo === undefined) {
        return {}
    } else {
        todo.updatedTime = Date.now()
        Object.entries(form).forEach(entry => {
            let [k, v] = entry
            todo[k] = v
        })
        saveTodos(todoList)
        return todo
    }
}

const mailDelete = (id) => {
    id = Number(id)
    let index = mails.findIndex(e => e.id === id)
    if (index > -1) {
        let t = mails.splice(index, 1)[0]
        savemail(t)
        return t
    } else {
        return {}
    }
}

const addressDelete = (id) => {
    id = Number(id)
    let index = todoList.findIndex(e => e.id === id)
    if (index > -1) {
        let t = todoList.splice(index, 1)[0]
        saveTodos(todoList)
        return t
    } else {
        return {}
    }
}

app.get('/', (request, response) => {
    // console.log('debug 111')
    let path = 'index.html'
    sendHtml(path, response)
})

app.get('/api/mail/all', (request, response) => {
    // console.log('todoList in todo', todoList)
    sendJSON(todoList, response)
})


app.get('/api/mail/sjxdelete/:id', (request, response) => {
    let id = request.params.id
    let mail = mailDelete(id)
    console.log('sjxdelet',mail)
    sendJSON(mail, response)
})

const todoFetch = (id) => {
    id = Number(id)
    let todo = todoList.find(e => e.id === id)
    if (todo === undefined) {
        return {}
    } else {
        return todo
    }
}

const todoFetch1 = (id) => {
    id = Number(id)
    let mail = mails.find(e => e.id === id)
    if (mail === undefined) {
        return {}
    } else {
        return mail
    }
}

app.get('/api/mail/sjx/:id', (request, response) => {
    // log('id')
    let id = request.params.id
    log('ididid', id )
    let mail = todoFetch1(id)
    log('idmail', mail)
    sendJSON(mail, response)

})

app.get('/api/mail/addresslist', (request, response) => {
    log('address api', address)
    sendJSON(address, response)

})

const loadMail = () => {
    let data = fs.readFileSync('mails.json')
    let sjx = JSON.parse(data)
    return sjx
}
const mails = loadMail()

app.get('/api/mail/sjx', (request, response) => {
    log('邮件信息',mails)
    sendJSON(mails, response)
})


const saveaddress = (address) => {
    let s = JSON.stringify(address, null, 2)
    fs.writeFileSync('address.json', s)
}
const addressAdd = (form) => {
    if (address.length === 0) {
        form.id = 1
    } else {
        let tail = address[address.length - 1]
        form.id = tail.id + 1
    }
    form.done = false
    address.push(form)
    saveaddress(address)
    return form
}

app.post('/api/mail/addresslist/add', (request, response) => {
    let form = request.body
    console.log('form in add', form)
    let mail = addressAdd(form)
    sendJSON(mail, response)
})


const savemail = (mail) => {
    let s = JSON.stringify(mail, null, 2)
    fs.writeFileSync('mails.json', s)
}
const mailAdd = (form) => {
    // if (address.length === 0) {
    //     form.id = 1
    // } else {
    //     let tail = address[address.length - 1]
    //     form.id = tail.id + 1
    // }
    // form.done = false
    mails.push(form)
    savemail(mails)
    return form
}
app.post('/api/mail/addmail', (request, response) => {
    let form = request.body
    console.log('form in add', form)
    let mail = mailAdd(form)
    sendJSON(mail, response)
})




const main = () => {
    let server = app.listen(8000, () => {
        let host = server.address().address
        let port = server.address().port

        log(`应用实例，访问地址为 http://${host}:${port}`)
    })
}

if (require.main === module) {
    main()
}
