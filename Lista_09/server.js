const express = require ('express')
const mongoose = require ('mongoose')
const app = express()
const port = 9050
const connectionString = "mongodb+srv://admin:admin123@appdb.iw8cced.mongodb.net/" 
const Bebida = require('./models/bebida')
const Lanche = require('./models/lanche')
const bebida = require('./models/bebida')

app.use(express.json())

app.post('/adicionar-bebida', async (req, res) => {
    let{nome, descricao, fabricante, emEstoque, publicadoEm} = req.body
    let bebida = {
        nome,
        descricao,
        fabricante,
        emEstoque,
        publicadoEm
    }
    try{
        await Bebida.create(bebida)
        return res.status(201).json({mensage: "Bebida cadastrada."})
    } catch(error){
        return res.status(500).json({mensage: error.mensage})
    }
})
app.get('/listar-bebidas', async (req, res) => {
    try{let bebidas = await bebida.find()
    return res.status(200).json(bebidas)
    }catch (error){
        return res.status(500).json(error)
    }
} )

app.post('/adicionar-lanche', async (req, res) => {
    let{nome, descricao, vegano, emEstoque, publicadoEm} = req.body
    let lanche = {
        nome,
        descricao,
        vegano,
        emEstoque,
        publicadoEm
    }
    try {
        await Lanche.create(lanche)
        return res.status(201).json({mensage: "Lanche cadastrado."})
    } catch (error) {
        return res.status(500).json({mensage: error.mensage})
    }
})

app.get('/listar-lanches', async (req,res) => {
    try {
        let lanches = await lanche.find()
        return res.status (200).json(error)
    } catch (error) {
        return res.status(500).json(error)
    }
})

mongoose.connect(connectionString, {
    dbName: "DevsBar"
}). then(() => {
    console.log("MongoDB UP!")
    console.log(`http:lcalhost:${port}`)
    app.listen(port)
}). catch((error) => {
    console.log(error)
})
