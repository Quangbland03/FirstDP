
var express = require('express');
const MobileModel = require('../models/MobileModel');
const BrandModel = require('../models/BrandModel');
var router = express.Router();
router.get('/', async (req, res) =>{
    var mobile = await MobileModel.find({}).populate('brand');
    res.render('mobile/index', {mobile})
})

router.get('/add',  async (req,res) =>{
    var brand = await BrandModel.find({});
    res.render('mobile/add', {brand});
    })
    router.post('/add',  (req, res) =>{
    var mobile = req.body;
    MobileModel.create(mobile);
    res.redirect('/mobile');
    })
module.exports = router;
