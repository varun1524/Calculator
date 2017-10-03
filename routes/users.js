var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/doCalculate', function (req, res, next) {
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
            var operation = req.body.operation;
            if(parseFloat(val2)===0 && req.body.operation==="/"){
                req.body.answer=null;
                throw ("Denominator cannot be 0.");
            }
            else {
                switch (operation) {
                    case '+':
                        req.body.answer = val1 + val2;
                        req.body.operationStatus = true;
                        break;
                    case '-':
                        req.body.answer = val1 - val2;
                        req.body.operationStatus = true;
                        break;
                    case '*':
                        req.body.answer = val1 * val2;
                        req.body.operationStatus = true;
                        break;
                    case '/':
                        req.body.answer = val1 / val2;
                        req.body.operationStatus = true;
                        break;
                    default:
                        console.log("Error in Calculating result");
                        break
                }
            }
        }
    }
    catch (e)
    {
        req.body.message = e;
        req.body.answer=null;
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
