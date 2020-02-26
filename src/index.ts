import app from './app';
import {starConnection} from './database';
async function main(){
    starConnection();
    await  app.listen(app.get('port'));
    console.log('server on port' + 3000)
}
main();
