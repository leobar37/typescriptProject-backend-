import  {connect} from 'mongoose'

 export async function starConnection(){
    await connect('mongodb://localhost:27017/galeryDb' , {
         useNewUrlParser :  true,
         useUnifiedTopology : true,
         useFindAndModify : false
    })
    console.log('Bd is connected');
    
}