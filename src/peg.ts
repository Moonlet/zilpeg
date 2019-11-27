import { Transaction, transferTransaction } from './transactions/index';
interface IZilPegOptions {
    coins: {
        [coin: string]: {
            initialBalances: {
                [address: string]: number
            }
        }
    }
}

export const ZilPeg = (options: IZilPegOptions) => {
    function initializer(state) {
        for(const coin in options.coins) {
            const coinInitialState = {
                accounts: options.coins[coin]?.initialBalances || {}
            };

            state[coin] = coinInitialState;
        }
    }

    function txHandler(state, tx, context) {
        console.log('zilliqa txHandler', JSON.stringify({state, tx, context}, null, 4));

        if (!tx.action) tx.action = Transaction.TRANSFER;

        switch (tx.action) {
            case Transaction.TRANSFER:
                transferTransaction(state, tx, context);
                break;
        }
        
    }

    function blockHandler(state, context) {
        // console.log('new block', {state, context});
    }

    return {
        initializers: [initializer],
        transactionHandlers: [txHandler],
        blockHandlers: [blockHandler],

        methods: {

        }
    }
}