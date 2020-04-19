const Block = require("../models/blockModel");

//GET BY DB ID
exports.block_details_bydbid = (req, res) => {
  //send the block if found
  Block.findById(req.params.id, (err, block) => {
    if (err) return err;
    res.send(block);
  });
};

//GET BY ID
exports.block_details_byid = (req, res) => {
  Block.findOne({ page: req.params.page }, (err, block) => {
    if (err) return err;
    res.send(block);
  });
};

//GET BY PAGE NAME
exports.block_details_bypage = (req, res) => {
  Block.findOne({ page: req.params.page }, (err, block) => {
    if (err) return err;
    res.send(block);
  });
};

//GET BY TYPE
exports.block_details_bytype = (req, res) => {
  Block.findOne({ type: req.params.type }, (err, block) => {
    if (err) return err;
    res.send(block);
  });
};

//CREATE BLOCK
exports.block_create = async (req, res) => {
  let block = new Block({
    //determine id to assign, placeholder is 1 for now
    id: req.body.id,
    page: req.body.page,
    type: req.body.type,
    text: req.body.text,
    media: req.body.media,
    images: req.body.images,
    direction: req.body.direction,
    header: req.body.header,
  });

  //if id exists return 400 status (mainly for testing, this shouldn't happen because id will be generated)
  const idExists = await Block.findOne({ id: req.body.id }); //change to id: req.body.id
  if (idExists) {
    return res.status(400).send("block id already exists!");
  }

  block.save((err) => {
    if (err) return err;
    res.send("Block created!");
  });
};

//UPDATE BLOCK BY DB ID
exports.block_update = (req, res) => {
  Block.findByIdAndUpdate(req.params.id, { $set: req.body }, (err) => {
    if (err) return err;
    res.send("Block udpated!");
  });
};

//DELETE BLOCK
exports.block_delete = async (req, res) => {
  const blockExists = await Block.findById(req.params.id);
  //if block exists, remove it
  if (blockExists) {
    Block.findByIdAndRemove(req.params.id, (err) => {
      if (err) return err;
      res.send("Block was deleted successfully!");
    });
  } else {
    res.send("Block does not exist!");
  }
};

//Simple version, without validation or sanitation
exports.test = function (req, res) {
  res.send("Greetings from the Test controller!");
};
