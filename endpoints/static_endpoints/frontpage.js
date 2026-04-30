const app = require('../../server')

app.get('/', (req, res) => {
  res.json({
    info: {
      english: 'Hey there! Check out docs.apis.is in your browser for mor info',
      icelandic: 'Velkominn á apis.is! Kíktu á docs.apis.is í vafranum þínum fyrir frekari upplýsingar!',
    },
  })
})

app.post('/', (req, res) => {
  res.json({
    info: {
      english: 'Hey there! Check out docs.apis.is in your browser for mor info',
      icelandic: 'Velkominn á apis.is! Kíktu á docs.apis.is í vafranum þínum fyrir frekari upplýsingar!',
    },
  })
})
