const _ajax = function(method, path, data, callback) {
    let r = new XMLHttpRequest()
    r.open(method, path, true)
    r.setRequestHeader('Content-Type', 'application/json')
    r.onreadystatechange = () => {
        if (r.readyState === 4) {
            callback(r.response)
        }
    }
    r.send(data)
}

class Api {
    constructor() {
        this.baseUrl = 'http://localhost:8000/api/mail'
    }
    get(path, callback) {

        // let method = 'GET'
        let url = this.baseUrl + path
        _ajax('GET', url, '', (r) => {
            let t = JSON.parse(r)
            callback(t)
        })
    }

    post(path, data, callback) {
        let url = this.baseUrl + path
        data = JSON.stringify(data)
        _ajax('POST', url, data, (r) => {
            let t = JSON.parse(r)
            callback(t)
        })
    }
}

export default Api
