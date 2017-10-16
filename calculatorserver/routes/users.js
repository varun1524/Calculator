var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/doAdd', function (req, res, next) {
    try {
        console.log(req.body);

        if(isNaN(req.body.value1) || isNaN(req.body.value2))
        {
            req.body.answer=null;
            throw ("Incorrect Input Values. Please enter Numeric values only");
        }
        else
        {
            var val1 = parseFloat(req.body.value1);
            var val2 = parseFloat(req.body.value2);
            req.body.answer = val1 + val2;
            req.body.operationStatus = true;
            console.log(req.body);
            res.status(200).send(req.body);
        }
    }
    catch (e)
    {
        req.body.message = e;
        req.body.answer=null;
        req.body.operationStatus = false;
        console.log(e);
        res.status(301).send(req.body);
    }
});

router.post('/doSub', function (req, res, next) {
    try {
        console.log(req.body);

        if(isNaN(req.body.value1) || isNaN(req.body.value2))
        {
            req.body.answer=null;
            throw ("Incorrect Input Values. Please enter Numeric values only");
        }
        else
        {
            var val1 = parseFloat(req.body.value1);
            var val2 = parseFloat(req.body.value2);
            req.body.answer = val1 - val2;
            console.log(req.body);
            req.body.operationStatus = true;
            res.status(200).send(req.body);
        }
    }
    catch (e)
    {
        req.body.message = e;
        req.body.answer=null;
        req.body.operationStatus = false;
        console.log(e);
        res.status(301).send(req.body);
    }
});

router.post('/doMul', function (req, res, next) {
    try {
        console.log(req.body);

        if(isNaN(req.body.value1) || isNaN(req.body.value2))
        {
            req.body.answer=null;
            throw ("Incorrect Input Values. Please enter Numeric values only");
        }
        else
        {
            var val1 = parseFloat(req.body.value1);
            var val2 = parseFloat(req.body.value2);
            req.body.answer = val1 * val2;
            req.body.operationStatus = true;
            console.log(req.body);
            res.status(200).send(req.body);
        }
    }
    catch (e)
    {
        req.body.message = e.message;
        req.body.answer=null;
        req.body.operationStatus = false;
        console.log(e.message);
        res.status(301).send(req.body);
    }
});

router.post('/doDiv', function (req, res, next) {
    try {
        console.log(req.body);

        if(isNaN(req.body.value1) || isNaN(req.body.value2))
        {
            req.body.answer=null;
            throw ("Incorrect Input Values. Please enter Numeric values only");
        }
        else
        {
            var val1 = parseFloat(req.body.value1);
            var val2 = parseFloat(req.body.value2);
            if(val2===0 && req.body.operation==="/"){
                req.body.answer=null;
                throw ("Denominator cannot be 0.");
            }
            else {
                req.body.answer = val1 / val2;
                req.body.operationStatus = true;
                console.log(req.body);
                res.status(200).send(req.body);
            }
        }
    }
    catch (e)
    {
        req.body.message = e;
        req.body.answer=null;
        req.body.operationStatus = false;
        console.log(e);
        res.status(301).send(req.body);
    }
});

module.exports = router;
