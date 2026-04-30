const app = require('../../server')

app.get('/', (req, res) => {
  res.json({
    info: 'Velkominn á apis.is! Kíktu á docs.apis.is í vafranum þínum fyrir frekari upplýsingar!',
  })
})

app.post('/', (req, res) => {
  res.json({
    info: 'Velkominn á apis.is! Kíktu á docs.apis.is í vafranum þínum fyrir frekari upplýsingar!',
  })
})
