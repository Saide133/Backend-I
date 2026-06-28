import express from 'express'
import { env } from './config/env.js'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Servidor funcionando')
})

app.get('/turnos', (req, res) => {
    res.json({ mensaje: 'Lista de turnos' })
})

app.post('/turnos', (req, res) => {
    const datos = req.body
    res.json({ mensaje: 'Turno creado', datos })
})

app.put('/turnos/123', (req, res) => {
    const datos = req.body
    res.json({ mensaje: 'Turno 123 modificado', datos })
})

app.delete('/turnos/123', (req, res) => {
    res.json({ mensaje: 'Turno 123 eliminado' })
})

app.listen(env.PORT, () => {
    console.log(`Servidor escuchando en el puerto ${env.PORT}`)
})