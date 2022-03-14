const express = require("express");
const buySchema = require("../models/buy");
const router = express.Router();

router.post("/buy", (req, res) => {
  const buy = buySchema(req.body);

  buy
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
router.get("/", (req, res) => {
  buySchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

 router.get("/:id", (req, res) => {
  const { id } = req.params;

  buySchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
}); 


router.delete("/:id", (req, res) => {
  const { id } = req.params;

  buySchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { DueDate, dni, Status, Line, Vendedor, TotalAmt } = req.body;

  buySchema
    .updateOne(
      { _id: id },
      { $set: { DueDate, dni, Status, Line, Vendedor, TotalAmt } }
    )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: json }));
});


/* consulta con referencia DEF234*/

router.get("/invoice/:ref", (req, res)=>{

  fun = (ref, buys) =>{
      const filtrado = buys.filter( e => e["Line"]["buy"]["ExpenseDetail"]["Customer"]["Ref"]["value"] == ref)      
      return filtrado
  }
  const {ref} = req.params
  buySchema
  .find()
  .then((data) => res.json(fun(ref, data)))
  .catch((error) => res.json({ message: error }));
})

module.exports = router;
