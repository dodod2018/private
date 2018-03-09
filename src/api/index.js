import sa from 'superagent'
import Vue from 'vue'

var serverURI = 'http://106.14.193.59:3000/api/';
// var serverURI = 'http://106.14.193.59:80/api/';
// var serverURI = 'http://127.0.0.1:3000/api/';
var cookieHandler = {
  set: function (name, value, days) {
    var d = new Date;
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
    window.document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
  },

  get: function (name) {
    var v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;

  },
  delete: function (name) {
    this.set(name, '', -1);
  }
}
export default {
  request(method, uri, data = null) {
    return new Promise((resolve, reject) => {
      var resHandler = res => {
        resolve(res.body)
      }
      var url = serverURI + uri
      method = method.toLowerCase()
      if (method === 'get') {
            sa
                .get(url)
                .query(data)
                .end((err, res) => {
                    resHandler(res);
                });
        } else if (method === 'post') {
            sa
                .post(url)
                .send(data)
                .end((err, res) => {
                    resHandler(res);
                })
        }
    })
  }
}
