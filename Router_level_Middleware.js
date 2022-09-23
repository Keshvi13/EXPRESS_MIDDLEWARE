var express=require ('express')
var app=express()
var router=express.Router();

router.use('/',(req,res,next)=>{console.log('router passed');
             next();
})
router.get('/user',(req,res)=>{
    console.log("/abc request called");
    res.send('welcome router use');
})

app.use('/abc',router);

app.listen(3000,()=>{console.log("server start @localhost:3000")})

// 1) output = http://localhost:3000/abc/user
  // terminal = roter passed  &&  /abc request called
  // browser = welcome router use

// 2) http://localhost:3000/abc
  // terminal = roter passed
  // browser = cannot GET/abc

//  /abc is router so evrey time are called by router.use method
