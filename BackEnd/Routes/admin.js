const express = require("express");

const router = express.Router();

const adminController = require("../Controller/admin")

router.get("/get-products", adminController.getCandies)
router.post("/add-product", adminController.postData);
router.get("/alter-productOne/:candyId", adminController.alterOne);
router.get("/alter-productTwo/:candyId", adminController.alterTwo)
router.get("/alter-productThree/:candyId", adminController.alterThree)
router.delete("/delete-product/:itemId", adminController.deleteItem);

module.exports = router;