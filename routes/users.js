//import express from 'express';
const express = require('express');

const router = express.Router();

const users = [
    {
        firstName: "Nil",
        lastName: "Nili",
        age:30
    }
]
router.get('/', (req,res)=>{
    console.log(users);
    res.send(users);
});

export default router;