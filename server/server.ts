// import * as Path from 'node:path'
// import express from 'express'
// import cors, { CorsOptions } from 'cors'

// const server = express()

// server.get('/api/v1/greeting', (req, res) => {
//   const greetings = ['hola', 'hi', 'hello', 'howdy']
//   const index = Math.floor(Math.random() * greetings.length)
//   console.log(index)
//   res.json({ greeting: greetings[index] })
// })

// server.use(express.json())
// server.use(cors('*' as CorsOptions))

// if (process.env.NODE_ENV === 'production') {
//   server.use(express.static(Path.resolve('public')))
//   server.use('/assets', express.static(Path.resolve('./dist/assets')))
//   server.get('*', (req, res) => {
//     res.sendFile(Path.resolve('./dist/index.html'))
//   })
// }

// export default server

import * as Path from 'node:path'
import * as URL from 'node:url'

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

import express from 'express'
import words from './routes/words.ts'

const server = express()
server.use(express.json())
server.use(express.static(Path.join(__dirname, 'public')))

server.use('/api/v1/words', words)

export default server
