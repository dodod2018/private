import sa from 'superagent'

export default {
  state: {},
  mutations: {},
  actions: {
    request(context, payload) {
      let {
        method,
        uri,
        data,
        success,
        target
      } = payload
      data = data || {}
      const resHandler = (err, res) => {
        if (err) {
          target.$message(err)
          return
        }
        if (res.logout) {
          target.$router.push('/login')
          return
        }
        if (res.resultCode != 0) {
          target.$message({
            message: res.errMsg,
            type: 'error'
          })
        } else {
          success(res.result)
        }
      }
      switch (method.toLowerCase()) {
        case 'get':
          sa
            .get(url)
            .query(data)
            .end((err, res) => {
              resHandler(err, res);
            })
          break;
        case 'post':
          sa
            .post(url)
            .send(data)
            .end((err, res) => {
              resHandler(err, res);
            })
          break;
        default:
          target.$message('不支持此请求方式')
      }
    }
  },
  getters: {}
}
