const { middleware } = require('../app')

const router = require('koa-router')()
const auth = require('../middlewares/auth')
const jwt = require('jsonwebtoken')
const { secret } = require('../configs/secret')
router.prefix('/user')

router.get('/info', auth, function (ctx, next) {
  ctx.body = {
    code: 200,
    data: ctx.state,
    message: ''
  }
})

router.post('/login', function (ctx, next) {
  const token = jwt.sign({ name: '小明', id: 1 }, secret, { expiresIn: '3d' })
  ctx.body = {
    code: 200,
    data: {
      token,
      expires: 3
    },
    message: ''
  }
})

module.exports = router
