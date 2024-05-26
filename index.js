const express = require('express');
const app = express();
const multer  = require('multer')

const PORT = 4000;
app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}));


app.get('/',(req,res)=>{
 res.render('index');
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      cb(null, uniqueSuffix+file.originalname);
    }
  })
  
  const upload = multer({ storage: storage })

app.post('/upload',upload.single('image'),(req,res)=>{
   console.log(req.body);
   console.log(req.file);
   res.end('uploaded')
});


app.listen(PORT,function(){
    console.log(`Server running in PORT ${PORT}`);
});