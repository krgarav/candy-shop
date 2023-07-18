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
    })
        .then(() => {
            res.json();
            console.log("USER CREATED")
        })
        .catch((err) => { console.log(err) })

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
            if (item.quantity >= 1) {
                item.quantity = item.quantity - 1
                return item.save()
            } else {
                res.status(500).json({ error: "An error occured" })
            }
        })
        .then(() => {
            res.json()
        })
        .catch((err) => { console.log(err) })
}
exports.alterTwo = (req, res, next) => {
    const prodId = req.params.candyId;
    Candy.findByPk(prodId)
        .then((item) => {
            if (item.quantity >= 2) {
                item.quantity = item.quantity - 2
                return item.save()
            } else {
                res.status(500).json({ error: "An error occured" })
            }

        })
        .then(() => {
            res.json()
        })
        .catch((err) => { console.log(err) })
}
exports.alterThree = (req, res, next) => {
    const prodId = req.params.candyId;
    Candy.findByPk(prodId)
        .then((item) => {
            if (item.quantity >= 3) {
                item.quantity = item.quantity - 3
                return item.save()
            } else {
                res.status(500).json({ error: "An error occured" })
            }
        }).then(() => {
            res.json()
        })
        .catch((err) => { console.log(err) })
}
exports.deleteItem = (req, res, next) => {
    const itemId = req.params.itemId;
    if (itemId !== null) {
        Candy.findByPk(itemId)
            .then((product) => {
               
                    return product.destroy();
                
            })
            .then(() => {
                res.json()
            })
            .catch((err) => { console.log(err) })
    } else {
        res.json()
    }
}