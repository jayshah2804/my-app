import express from 'express';
import {v4 as uuidv4} from 'uuid';

const router = express.Router();

let users = [{ studentFirstname: 'Jay' }];

router.get('/', (req, res) => {
    res.send(users);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    const foundUser = users.find(user => user.id === id);

    res.send(foundUser);
})

router.post('/', (req, res) => {
    const user = req.body;
    console.log("user",user);

    users.push({ ...user, id: uuidv4() });
   
    res.send(`User with the name ${user.firstName} is inserted successfully`);
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    users = users.filter(user => user.id !== id );

    res.send(`User with the id ${id} deleted successfully`);
})

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const user = users.find(user => user.id === id);

    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;

    res.send(`USer with the id ${id} has been updated`);
})


export default router;