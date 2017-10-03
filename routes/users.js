var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/doCalculate', function (req, res, next) {
    try {
        console.log(req.body);
        var val1=req.body.value1;
        var val2=req.body.value2;
        if(isNaN(val1) || isNaN(val2))
        {
            throw "Incorrect Input Values. Please enter Numeric values only"
        }
        switch (req.body.operation) {
            case '+':
                req.body.answer = parseFloat(req.body.value1) + parseFloat(req.body.value2);
                req.body.operationStatus = true;
                break;
            case '-':
                req.body.answer = parseFloat(req.body.value1) - parseFloat(req.body.value2);
                req.body.operationStatus = true;
                break;
            case '*':
                req.body.answer = parseFloat(req.body.value1) * parseFloat(req.body.value2);
                req.body.operationStatus = true;
                break;
            case '/':
                req.body.answer = parseFloat(req.body.value1) / parseFloat(req.body.value2);
                req.body.operationStatus = true;
                break;
            default:
                console.log("Error in Calculating result");
                break
        }
    }
    catch (e)
    {
        req.body.message = e;
        req.body.operationStatus = false;
        console.log(e.message);
        console.log(e);
        console.log(e.stack);
    }
    console.log("After Calculation:");
    console.log(req.body);
    res.status(200).send(req.body);
});


module.exports = router;
