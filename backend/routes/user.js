const express = require("express");
const z = require("zod");
const jwt = require("jsonwebtoken")
const { JWT_Secret} = require("../config")
const router = express.Router();
const { User, Account } = require("../db/db");
const { authmiddleware, authcheck } = require("../middlewares/middleware");

const signupInput = z.object({
    username: z.string().email(),
    firstName: z.string(),
    lastName: z.string(),
    password: z.string().min(6)
})

const siginInput = z.object({
    username: z.string().email(),
    password: z.string()
})

router.get("/test", (req,res)=>{
    res.send("Hello!")
})

router.post("/signup", async (req,res) => {
    const success = signupInput.safeParse(req.body)
    if(!success){
        return res.status(411).json({
            msg: "Password must be 5 characters"
        })
    }
    const existingUser = await User.findOne({
        username: req.body.username
    })

    if(existingUser){
        return res.status(411).json({
            msg: "Email already exists"
        })
    }

    const user = await User.create({username: req.body.username, firstName: req.body.firstName, lastName: req.body.lastName, password: req.body.password})

    const username = req.body.username
    const firstName =req.body.firstName

    const userId = user._id;

    await Account.create({
        userId,
        balance: 1 + Math.random() * 10000
    })

    const token = jwt.sign({
        userId, username, firstName
    }, JWT_Secret, {expiresIn: 86400});

    res.json({
        msg: "Account created successfully",
        token: token
    })
})

router.post("/signin", async(req,res) => {

    const succees = siginInput.safeParse(req.body)
    if(!succees){
        return res.status(400).json({
            msg: "Invalid credentials"
        })
    }

    const user = await User.findOne({
        username: req.body.username, password: req.body.password
    })
 
    const username = user.username
    const firstName = user.firstName

    if(!user){
        return  res.status(411).json({
            msg: "Login error, please try again"
        })
    }
    const userId = user._id;

    const token = jwt.sign({
        userId, username, firstName
    },JWT_Secret, {expiresIn: 86400})

    res.json({
        msg: "Successfully logged in",
        token
    })
})

const updateBody = z.object({
	password: z.string().optional(), firstName: z.string().optional(), lastName: z.string().optional(),
})

router.put("/", authmiddleware, async(req,res)=>{
    const success = updateBody.safeParse(req.body)
    if (!success) {
        res.status(411).json({
            message: "Failed to update"
        })
    }
    const userId = req.userId;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const password = req.body.password;

    try {
        const user = await User.findOneAndUpdate(
            {
                _id: userId
            },
            {
                $set: {
                    firstName: firstName, lastName: lastName, password: password
                },
            },
            {
                new: true
            }
        )  
        console.log(user);
        res.status(200).json({
            msg:"Successfully updated!"
        })  
        
    } catch (error) {
        console.log(error);
        res.status(411).json({
            msg: "Failed to update"
        })
    }
})

router.get("/bulk", authcheck, async(req,res)=>{
    const filter = req.query.filter || "";

    const users = await User.find({
        _id: {
            $ne: req.userId
        },
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map(user=>({
            username: user.username, firstName: user.firstName, lastName: user.lastName, _id: user._id
        }))
    })
})

module.exports = router
