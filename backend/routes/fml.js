const router = require("express").Router();
const Member = require("../models/member")


router.get("/add", (req, res) => {
    //new Member({req.body})
    new Member({
        name: "strawberry princess",
        team: "goddammit kill me make it stop everything hurts"
    })
    .save()
    .then(newMember => {
        res.send("new member created " + newMember.name)
    })
    .catch(function(){
        res.send("you fucked up")
    }
    )
})

router.get("/find", (req, res) => {
    var poo = Member.find().where('name').equals('strawberry princess')
    .then(function(props) {console.log(props)})
    .catch(console.log)
    res.send("AIN'T NOTHIN BUT A HEARRRRRTACHE")
})

router.post("/newperson", (req, res) => {
    console.log(req.body)
    new Member(req.body)
    .save()
    .then(newMember => {
        res.send("new member created " + newMember.name)
    })
    .catch(function(){
        res.send("you fucked up")
    }
    )
})

router.get("/get/team/:teamname", (req, res) => {
    res.send(req.params.teamname)
})

module.exports = router