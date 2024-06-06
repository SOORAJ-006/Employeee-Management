const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        const destination = path.resolve(__dirname , '..' , 'public' , 'uploads')
        cb(null,destination)
    },
    filename:(req,file,cb)=>{
        cb(null, `${req.params.id}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})

module.exports = upload