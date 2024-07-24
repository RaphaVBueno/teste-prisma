import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/', express.static('./dist'))

const port = 3000

app.listen(port, () => {
  console.log('Servidor rodando em http://localhost:' + port)
})

async function findEmailByUsername(username) {
  const user = await prisma.pessoa.findUnique({
    where: {
      username: username,
    },
  })

  if (user) {
    return user.email
  } else {
    throw new Error('Usuário não encontrado')
  }
}

app.get('/get', async (req, res) => {
  const { email } = req.query
  console.log(email)

  try {
    const username = await findUsernameByEmail(email)
    res.json({ username: username })
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
})

app.get('/get-elaborado', async (req, res) => {
  const { user } = req.query
  console.log(user)

  try {
    const email = await findEmailByUsername(user)
    res.json({ email: email })
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
})
