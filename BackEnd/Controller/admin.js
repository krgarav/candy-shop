const Candy = require("../Models/candy");


exports.postData = (req, res, next) => {
    const enteredName = req.body.name;
    const enteredDescription = req.body.description;
    const enteredPrice = req.body.price;
    const enteredQuantity = req.body.quantity;
    Candy.create({
        name: enteredName,
        description: enteredDescription,
        price: enteredPrice,
        quantity: enteredQuantity
    }).then(() => {
        res.json();
        console.log("USER CREATED")
    }).catch((err) => { console.log(err) })

}

exports.getCandies = (req, res, next) => {
    Candy.findAll()
        .then((candies) => {
            res.json(candies);
        })
        .catch((err) => { console.log(err) })
}

exports.alterOne = (req, res, next) => {
    const prodId = req.params.candyId;

    Candy.findByPk(prodId)
        .then((item) => {
            item.quantity = item.quantity - 1
            return item.save()
        }).then((item) => {
            res.json()
        })
}
exports.alterTwo = (req, res, next) => {
    const prodId = req.params.candyId;

    Candy.findByPk(prodId)
        .then((item) => {
            item.quantity = item.quantity - 3
            return item.save()
        }).then((item) => {
            res.json()
        })
}
exports.alterThree = (req, res, next) => {
    const prodId = req.params.candyId;

    Candy.findByPk(prodId)
        .then((item) => {
            item.quantity = item.quantity - 3
            return item.save()
        }).then((item) => {
            res.json()
        })
}