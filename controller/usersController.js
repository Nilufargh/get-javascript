
//we import model here
const uuidv4 = require('uuid/v4');

 let users = []

const getUsers=(req,res)=>{
    console.log(users);
    res.send(users);
};

const getUser=(req,res)=>{
    const {id} = req.params;
    const foundUser = users.find((user)=> user.id===id);
    res.send(foundUser);
}

const createUser=(req, res) => {
    const user = req.body;
    const userId = uuidv4();
    //adding id to previous properties of user
    const userWithId = {...user, id:userId}
    users.push(userWithId);
    res.send(`User with the name ${user.firstName} added to the list `);
}

const deleteUser=(req,res)=>{
    const {id} =req.params;
    users = users.filter((user)=>user.id !== id);
    res.send(`User with the id ${id} deleted from the list`)
}

const updateUser=(req,res)=>{
    const {id} = req.params;
    const {firstName, lastName,age} = req.body;

    const user = users.find((user)=> user.id===id);

    if(firstName) user.firstName=firstName;
    if(lastName) user.lastNmae=lastName;
    if(age) user.age=age;

    res.send(`User with the id ${id} has been updated`);
};
module.exports={getUser,getUsers,createUser,updateUser,deleteUser}