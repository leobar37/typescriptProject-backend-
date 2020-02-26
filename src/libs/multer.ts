 import multer from 'multer';
import{ v4 as uuid} from 'uuid';
import path from 'path'
 const storage =multer.diskStorage( {
   destination : 'uploads',
   filename : (req, file , cb )=> {
        cb(null , uuid() + path.extname( file.originalname));
   } 
});
//el disk storage es una configuracion de multer
//que actua como un middleware en las rutas
export default multer({storage}) ;