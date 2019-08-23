import Api from './api'

class MailApi extends Api {
    add(data, callback) {
        // 使用 ajax 发送数据给服务器
        let path = '/add'
        this.post(path, data, callback)
    }

    delete(todoId, callback) {
        let path = '/delete/' + todoId
        this.get(path, callback)
    }

    update(todoId, data, callback) {
        let path = '/update/' + todoId
        this.post(path, data, callback)
    }

    sjx(callback) {
        let path = '/sjx'
        this.get(path, callback)
    }

    addresslist(callback) {
        let path = '/addresslist'
        this.get(path, callback)
    }


    getone(id, callback) {
        let path = '/sjx/' + id
        this.get(path, callback)
    }
}

export default MailApi
