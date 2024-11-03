const express = require('express')
const router = express.Router();

const MenuItem = require('../models/menuItem');

router.get("/", async (req, res) => {
    try {
        const data = await MenuItem.find();
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
        const newMenu = new MenuItem(data);

        const response = await newMenu.save();
        console.log('Successfully Saved Data');
        res.status(200).json(response);

    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server error." })
    }
})

router.get("/:tasteType", async (req, res) => {
    try {
        const tasteType = req.params.tasteType;
        if (tasteType === "sweet" || tasteType === "spicy" || tasteType === "sour") {
            const data = await MenuItem.find({ taste: tasteType });
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
        const MenuId = req.params.Id;
        const updatedMenuData = req.body;

        const response = await MenuItem.findByIdAndUpdate(MenuId, updatedMenuData, {
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
        res.status(500).json({ err: "Internal Server error." });
    }
})

router.delete("/:Id", async (req, res) => {
    try {
        const MenuId = req.params.Id;
        const response = await MenuItem.findByIdAndDelete(MenuId);

        if (!response) {
            return res.status(400).json({ message: "Incorrect Id" });
        }

        console.log("Data Deleted");
        res.status(200).json({ message: "Menu data deleted Successfully" });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ err: "Internal Server error." })
    }
})

module.exports = router;