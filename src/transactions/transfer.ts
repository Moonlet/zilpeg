export const transferTransaction = (state, tx, context) => {
    if (!tx.coin) throw new Error('Coin must be present.');
    if (!tx.from && !tx.to) throw new Error('From and To address must be present.');
    if (isNaN(tx.amount)) throw new Error('Amount should be a number.');
    if (tx.amount <= 0) throw new Error('Amount should be a positibe numberl.');
    if ((state[tx.coin].accounts[tx.from] || 0)  < tx.amount) throw new Error('Insufficient funds');
    // todo check nonce

    state[tx.coin].accounts[tx.from] -= tx.amount;
    state[tx.coin].accounts[tx.to] = (state[tx.coin].accounts[tx.to] || 0) + tx.amount;
}