const express = require('express');
const router = express.Router();
const Post = require('../models/Post'); // Importo el modelo de Post

router.get('/', async (req, res) => {  //llama todas los pots de la base de datos
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
router.get('/:documentoId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.documentoId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json(post);
    } catch (err) {
        res.json({ message: err.message });
    }
});
router.post('/', async (req, res) => { //crea un nuevo post
    const post = new Post({
        // Defino los campos que voy a recibir del cuerpo de la petición
        documento: req.body.documento,
        nombre: req.body.nombre,
        apellido: req.body.apellido
    });

    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err.message });
    }
});
router.patch('/:documentoId', async (req, res) => { //actualiza un post
    try {
        const updatedPost = await Post.updateOne( 
            { _id: req.params.documentoId }, { $set: { nombre: req.body.nombre, apellido: req.body.apellido } }); // son bases de datos no relacionales, por lo que no se actualiza un campo en particular, sino que se actualiza todo el objeto
        res.json(updatedPost);
    } catch (err) {
        res.json({ message: err.message });
    }  
});
router.delete('/:documentoId', async (req, res) => { //elimina un post
    try {
        const removedPost = await Post.findByIdAndDelete({ _id: req.params.documentoId });
        if (!removedPost) {
            return res.status(404).json({ message: 'Post no encontrado' });
        }
        res.json(removedPost);
    } catch (err) {
        res.status(500).json({ message: "Error de conexion" });
    }
});


module.exports = router; // Exporto las rutas para que puedan ser utilizadas en index.js

