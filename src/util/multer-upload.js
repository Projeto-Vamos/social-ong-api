const multer = require('multer')

function createUpload(path, fileField, JSONField) {
    const storage = multer.diskStorage({
        destination: function(req, file, cb) {
            cb(null, path)
        },
        filename: function name(req, file, cb) {
            let body = req.body
            let person 
            if(body.publicoAtendido != undefined){
                person = body.publicoAtendido
            }else {
                person = body.servidor
            }

            
            //let filename = file.originalname
            //let extension = filename.substring(filename.indexOf('.'), filename.length)
            cb(null, JSON.parse(person).cpf + '.jpg') 
        }
    })
    
    const fileFilter = (req, file, cb) => {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            cb(null, true)
        }else{
            cb(null, false)
        }
    }
    
    const upload = multer({
        storage: storage,
        limits: {
            fileSize: 1024 * 1024 * 5
        },
        fileFilter: fileFilter
    }).fields([{name: fileField, maxCount: 1}, {name: JSONField, maxCount: 1}])
    
    return upload
}


module.exports = createUpload