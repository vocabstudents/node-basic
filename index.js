const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

const profiles = [
    {
        id:1,
        insta: "instabasheer",
        name: "Basheer",
        desc: "I am Hacker.",
    },
    {
        id:2,
        name: "Prince",
        insta: "instaprince",
        desc: "I am Developer.",
    },
    {
        id:3,
        name: "Nawaf",
        insta: ".shaikh_4",
        desc: "I am Student.",
    }
];

app.get('/',(req,res)=>{
    res.send("Test 5")
})

app.get('/home',(req,res)=>{
    res.send("home")
})

app.get('/home/page',(req,res)=>{
    res.send("home page")
})

app.get('/profiles',(req,res)=>{
    res.status(200).json(profiles);
})

app.get('/profile/:id',(req,res)=>{
    const id = req.params.id;
    const profile = profiles.find((profile)=>{
        return profile.id == id
    })
    res.send(profile ?? "Not Found.");
});

app.listen('8000',()=>{
    console.log("Server is running on port 8000..node .")
})