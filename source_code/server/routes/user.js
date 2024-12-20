const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const bcrypt = require('bcrypt');
const {User} = require('../models/user');

router.post('/sign-up', async (req, res) => {
  const { name, phone, email, password, isAdmin } = req.body;

  try {
    // Check if the user already exists
    // const existingUserName = await User.findOne({ email: email });
    const existingUserPhone = await User.findOne({ phone: phone });
    const existingUserEmail = await User.findOne({ email: email });
    if (existingUserPhone || existingUserEmail) {
      return res.status(400).json({
        error: true,
        msg: "User already exists!!",
      }); // Add return here to stop further execution
    }

    // Hash the password
    const hashPassword = await bcrypt.hash(password, 10);

    // Create the user
    const result = await User.create({
      name: name,
      phone: phone,
      email: email,
      password: hashPassword,
      isAdmin: isAdmin
    });

    // Generate a token
    const token = jwt.sign(
      { email: result.email, id: result._id },
      process.env.TOKEN_SECRET_KEY
    );

    // Send success response
    return res.status(200).json({
      user: result,
      token: token,
    });
  } catch (err) {
    // Handle unexpected errors
    return res.status(500).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
});


// router.post("/sign-in", async (req,res) => {
//   const {email, password} = req.body;
//   try {
//     const existingUser = await User.findOne({email: email});
//     if(!existingUser) {
//       res.status(400).json({msg: "User not found!!"})
//     }

//     const matchPassword = await bcrypt.compare(password, existingUser.password);
//     if(!matchPassword) {
//       res.status(400).json({
//         msg:" Invalid credentials"
//       })
//     }

//     const token = jwt.sign({
//       email: existingUser.email, 
//       id: existingUser._id
//     }, process.env.TOKEN_SECRET_KEY);

//     res.status(200).json({
//       user: existingUser,
//       token: token,
//       msg: "User Authenticated"
//     })
    
//   } catch (err) {
//     res.json({
//       message : err.message || err  ,
//       error : true,
//       success : false,
//   })
//   }
// })


router.post("/sign-in", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const existingUser = await User.findOne({ email: email });
    if (!existingUser) {
      return res.status(400).json({error: true, msg: "User not found!!" });
    }

    // Compare passwords
    const matchPassword = await bcrypt.compare(password, existingUser.password);
    if (!matchPassword) {
      return res.status(400).json({error: true, msg: "Invalid credentials" }); // Add return here
    }

    // Generate token
    const token = jwt.sign(
      {
        email: existingUser.email,
        id: existingUser._id,
      },
      process.env.TOKEN_SECRET_KEY
    );

    // Send success response
    console.log("Returning successful response:", {
      user: existingUser,
      token: token,
      msg: "User Authenticated",
    });
    return res.status(200).json({
      user: existingUser,
      token: token,
      msg: "User Authenticated",
    });
  } catch (err) {
    // Catch block for unexpected errors
    console.log(err)
    return res.status(500).json({
      msg: err.msg || err,
      error: true,
      
    });
  }
});

router.get('/', async(req, res) => {
  const userList = await User.find();

  if(!userList) {
    res.status(500).json({
      success:false
    })
  }
  res.status(200).send(userList);
})

router.get("/:id", async(req,res) => {
  const user = await User.findById(req.params.id);

  if(!user) {
    return res.status(500).json({
      success: false,
      message:"The User with ID given was not found!!"
    })
  }
  res.status(200).send(user);
})

router.delete('/:id', (req,res) => {
  User.findByIdAndDelete(req.params.id).then(user => {
    if(user) {
      return res.status(200).json({success: true,
        message: 'User is deleted'
      })
    } else {
      return res.status(404).json({
        success: false,
        message: "User delete failed"
      })
    }
  }).catch( err => {
    return res.status(500).json({
      success: false,
      error: err
    })
  })
})

router.get(`/get/count`, async(req,res) => {
  const userCount = await User.countDocuments({})

  if(!userCount) {
    res.status(500).json({success: false})
  }
  res.send({
    userCount: userCount 
  })
})

router.put("/:id", async(req,res) => {
  const {name, phone, email, password } = req.body;

  const userExist = await User.findById(req.params.id);
  let newPassword;

  if(req.body.password) {
    newPassword = bcrypt.hashSync(req.body.password, 10)
  } else {
    newPassword = userExist.passwordHash;
  }

  const user = await User.findByIdAndUpdate(
    req.params.id,
    {
      name: name,
      phone: phone,
      email: email,
      password: newPassword,
    },
    {new: true}
  )

  if(!user) {
    return res.status(400).send('The user cannot be updated!')
  } 
  res.send(user);
})
module.exports = router; 