
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');
const userModel = require('../models/userModel')

const addUser = async (req, res) => {

    try {

        const userInfo = req.body

        const pswcrypt = bcrypt.hashSync(req.body.password)

        const infoToSave = {

            userName: userInfo.userName.toLowerCase(),
            telNumber: userInfo.telNumber,
            email: userInfo.email.toLowerCase(),
            password: pswcrypt

        }

        const findUser = await userModel.find({ email: infoToSave.email })

        console.log("finduser: ", infoToSave);

        if (findUser[0] === undefined) {

            await userModel.create(infoToSave)

            res.status(200).json("user added")
        }

        res.json("user already exist")

    } catch (error) {

        res.status(400).json(error)


    }

}

const login = async (req, res) => {

    try {

        const email = req.body.email.toLowerCase()

        const password = req.body.password


        const findUser = await userModel.findOne({ email })

        console.log(findUser);

        if (findUser === null) {
            res.status(400).json('user not found')
        }

        const checkPassowrd = bcrypt.compareSync(password, findUser.password)

        if (checkPassowrd) {

            const assignToken = await jwt.sign({ _id: findUser._id }, config.key, { expiresIn: 3600000 })

            res.status(200).json({ userID: findUser._id, userName: findUser.firstName, userLastname: findUser.lastName, token: assignToken })

        }

        res.status(400).json("passord incorrect")

    } catch (error) {

        res.status(400).json(error)


    }
}

const oneUserByID = async (req, res ) => {

    
}



module.exports = { addUser, login, oneUserByID }