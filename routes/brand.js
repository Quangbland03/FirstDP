var express = require('express');
const BrandModel = require('../models/BrandModel');
const MobileModel = require('../models/MobileModel');
var router = express.Router();

router.get('/', async (req, res) =>{
    var mobile = await BrandModel.find({});
    res.render('brand/index', {mobile})
})
router.get('/add',  (req,res) =>{
res.render('brand/add');
})
router.post('/add', async (req, res) =>{
var brand = req.body;
await BrandModel.create(brand);
res.redirect('/brand');
})
router.get('/detail/:id', async (req, res) => {
    var id = req.params.id;
    var mobile = await MobileModel.find({brand:id});
    res.render('brand/detail', {mobile})
})
module.exports = router;
