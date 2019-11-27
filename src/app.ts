import Lotion from 'lotion';
import {ZilPeg} from './peg';
import {writeFileSync} from 'fs';

let app = Lotion({
    // keyPath: require.resolve(process.argv[2]),
    // peers: [],
    // genesisPath: require.resolve('./genesis.json'),
    logTendermint: false,
    p2pPort: 23456,
    rpcPort: 8123
}) as any;

app.use('zilliqa', ZilPeg({
    coins: {
        pzil: {
            initialBalances: {
                'A1pk69Pu7DvH3RrrsAXrQvkrYtGsM19aK': 21000000
            }
        }
    }
}));

app.start().then(res => {
    console.log(res)
    writeFileSync('./app-instance.json', JSON.stringify(res));
})