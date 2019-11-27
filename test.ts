import { Transaction } from './src/transactions/index';
import Lotion from 'lotion';
import appInstance from './app-instance.json';

(async () => {
    try {
        console.log('Create client instance. GCI:', appInstance.GCI);
        const client = await Lotion.connect(appInstance.GCI);
    
        let result = await client.send({
            from: 'A1pk69Pu7DvH3RrrsAXrQvkrYtGsM19aK',
            to: '04oDVBPIYP8h5V1eC1PSc5JU6Vo',
            coin: 'pzil',
            amount: 5,
            type: 'zilliqa',
            action: Transaction.TRANSFER
        })
        
        console.log(result)
    } catch (e) {
        console.log(e);
    } finally {
        process.exit(0);
    }
})();