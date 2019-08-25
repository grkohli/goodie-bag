const express = require('express');
const router = express.Router();

const Candy = require('../db/models/Candy')

//getting all the candies in the database
router.get('/', async (req, res, next) => {
    console.log('in get!')
    try {
        const allCandies = await Candy.findAll();
        // console.log('All Candies', allCandies)
        res.send(allCandies);
    } catch (error) {
        console.log('Uh Oh! Something went wrong')        
        next(error);
    }
})

//getting candy by id
router.get('/:id', async (req, res, next) => {
    console.log('in get!')
    try {
        const id = req.params.id;
        const candyById = await Candy.findOne({
            where: {
                id: id
            }
        });
        if (candyById) {
            res.send(candyById);
        } else {
            res.send('That candy does not exist!!')
        }

    } catch (error) {
        console.log('Uh Oh! Something went wrong')        
        next(error);
    }
})

//creating a new candy
router.post('/', async (req, res, next) => {
    try {
        const newCandy = await Candy.create(req.body);
        res.send(newCandy);
    } catch (error) {
        console.log('Uh Oh! Something went wrong')
        next(error);
    }
})

//delete an existing candy given the ID
router.delete('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const candyToDelete = await Candy.findOne({
            where: {
                id: id
            }
        });

        if (candyToDelete) {
            await candyToDelete.destroy();
            res.send('Candy was deleted');
        } else {
            res.send('You cannot delete a candy that doess not exist!');
        }
        
    } catch (error) {
        console.log('Uh Oh! Something went wrong')
        next(error);
    }
})


//updating an existing candy given the ID
// router.put('/:id', async (req, res, next) => {
//     try {
//         const id = req.params.id;
//         const newUpdate = req.body;
//         console.log("req.body", req.body);
//     } catch (error) {
//         console.log('Uh Oh! Something went wrong')
//         next(error);   
//     }
// })


module.exports = router;
