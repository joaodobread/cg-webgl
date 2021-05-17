import express from 'express'
const app = express()
import path from 'path'

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.get('/rotating-triangle-automatic', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'views', 'rotating-triangle-automatic.html'))
})

app.get('/cube', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'views', 'cube.html'))
})

app.get('/cube-textured', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'views', 'cube-textured.html'))
})

app.get('/rotating-triangle', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'views', 'rotating-triangle.html'))
})
app.get('/triangle', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'views', 'triangle.html'))
})

app.listen("3333", () => {
  console.log("listen at 3333")
})