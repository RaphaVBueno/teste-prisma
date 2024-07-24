import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [algo, setAlgo] = useState('')
  const [algoMelhor, setAlgoMelhor] = useState('')
  const [input, setInput] = useState('')

  function getByEmail(event) {
    event.preventDefault()
    const fetchDados = async () => {
      try {
        const response = await axios.get(`/get?email=${input}`)
        setAlgo(response.data.email)
        console.log(response.data.email)
      } catch (error) {
        console.error('Erro ao buscar dados:', error)
      }
    }

    fetchDados()
  }

  function getByUser(event) {
    event.preventDefault()
    const fetchDados = async () => {
      try {
        const response = await axios.get(`/get-elaborado?user=${input}`)
        setAlgoMelhor(response.data.email)
        console.log(response.data)
      } catch (error) {
        console.error('Erro ao buscar dados:', error)
      }
    }

    fetchDados()
  }

  return (
    <div>
      <h1>Teste do prisma</h1>
      <div>
        <div>
          <h1>{algo}</h1>
        </div>
      </div>
      <div>
        <form role="group" onSubmit={getByUser}>
          <input
            type="text"
            name="busca"
            id="buscaUser"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <button type="submit">Busca por usuário</button>
        </form>
        <div>
          <h1>{algoMelhor}</h1>
        </div>
      </div>
    </div>
  )
}

export default App
