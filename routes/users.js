//import express from 'express';
//import { v4 as uuidv4 } from 'uuid';
//uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
const uuidv4 = require('uuid/v4');

module.exports = (app) => {

    const router = require('express').Router();

    let users = []
    


    router.get('/', (req,res)=>{
        console.log(users);
        res.send(users);
    });

    router.get('/:id', (req,res)=>{
        const {id} = req.params;
        const foundUser = users.find((user)=> user.id===id);
        res.send(foundUser);
    });

    router.post('/', (req, res) => {
        const user = req.body;
        //userId property
        //const uuidv4 = require('express').uuid();
        const userId = uuidv4();
        //adding id to previous properties of user
        const userWithId = {...user, id:userId}
        users.push(userWithId);
        res.send(`User with the name ${user.firstName} added to the list `);
    });

    router.delete('/:id',(req,res)=>{
        const {id} =req.params;
        users = users.filter((user)=>user.id !== id);
        res.send(`User with the id ${id} deleted from the list`)
    });

    router.patch('/:id', (req,res)=>{
        const {id} = req.params;
        const {firstName, lastName,age} = req.body;

        const user = users.find((user)=> user.id===id);

        if(firstName) user.firstName=firstName;
        if(lastName) user.lastNmae=lastName;
        if(age) user.age=age;

        res.send(`User with the id ${id} has been updated`);
    })

    app.use("/users", router);
    app.use("/users/id", router);

}