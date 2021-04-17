const express = require("express");
const router = express.Router();

// Require the controllers
const block_controller = require("../controllers/blockController");

//GET BY DB ID
router.get("/getByDBId/:id", block_controller.block_details_bydbid);

//GET BY ID
router.get("/getById/:id", block_controller.block_details_byid);

//GET BY PAGE NAME
router.get("/getByPage/:page", block_controller.block_details_bypage);

//GET BY TYPE
router.get("/getByType/:type", block_controller.block_details_bytype);

//CREATE BLOCK
router.post("/create", block_controller.block_create);

//UPDATE BLOCK BY DB ID
router.put("/updateByDBid/:id", block_controller.block_update_db_id);

//UPDATE BLOCK BY CUSTOM ID
router.put("/update/:id", block_controller.block_update_id);

//DELETE BLOCK BY DB ID
router.put("/delete/:id", block_controller.block_delete);

//DELETE BLOCK BY PARAMS
router.put("/delete/", block_controller.block_delete_params);

module.exports = router;
