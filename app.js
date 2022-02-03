const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const Campground = require('./models/campground')

const url = 'mongodb://127.0.0.1:27017/playground'

// mongoose.connect(url, {
//   family: 4,
// })

// const Cat = mongoose.model('Cat', { name: String })
// const connect = async () => {
//   try {
//     await mongoose.connect('mongodb://127.0.0.1:27017/playground', {
//       family: 4,
//     })
//   } catch (error) {
//     handleError(error)
//   }
// }
// connect()

mongoose
  .connect('mongodb://127.0.0.1:27017/playground')
  .then(() => {
    console.log('connected')
  })
  .catch(err => {
    console.log(err)
  })
mongoose.connection.on('error', err => {
  logError(err)
})

// const camp = new Campground({ title: 'Camp' })
// await camp.createCollection()
// console.log(camp.title)
// camp.save()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/makecampground', async (req, res) => {
  // res.send(greeting)
})

app.listen(3000, () => {
  console.log('serving on port')
})
