const express = require("express")
const router = express.Router();

const Person = require('../models/person');

router.get("/", async (req, res) => {
    try {
        const data = await Person.find();
        console.log("successfully displays data");
        res.status(200).json(data);
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: "Internal Server error." })
    }
})

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new Person(data);

        const response = await newPerson.save();
        console.log('Successfully Saved Data');
        res.status(200).json(response);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server error." })
    }
})

router.get("/:workType", async (req, res) => {
    try {
        const workType = req.params.workType;
        if (workType === "Chef" || workType === "Waiter" || workType === "Manager") {
            const data = await Person.find({ work: workType });
            console.log("fetched data");
            res.status(200).json(data);
        } else {
            res.status(404).json({ error: "Invalid Work Type" });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server error." });
    }
});

router.put("/:Id", async (req, res) => {
    try {
        const PersonId = req.params.Id;
        const updatedPersonData = req.body;

        const response = await Person.findByIdAndUpdate(PersonId, updatedPersonData, {
            new: true, //Return the updated document
            runValidators: true //Run Mongoose validation
        })

        if (!response) {
            return res.status(400).json({ message: "Incorrect Id" })
        }
        console.log("Sucessfully Updates the data");
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server error." });
    }
})

router.delete("/:Id", async (req, res) => {
    try {
        const PersonId = req.params.Id;
        const response = await Person.findByIdAndDelete(PersonId);

        if (!response) {
            return res.status(400).json({ message: "Incorrect Id" })
        }
        console.log("Data Deleted");
        res.status(200).json({ message: "Person data deleted Successfully" });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server error." });
    }
})

module.exports = router;