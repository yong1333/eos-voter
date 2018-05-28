import * as types from './types';

const Eos = require('eosjs');

export function proxyVote(settings, wif = '5JGGPXHWRAjezaYHNAV4LyPhWhK3Kxy8JPAZykpABLLZ6LARyDj', proxy = 'lioninjungle') {
  return (dispatch: () => void) => {
    const { account, node } = settings;
    console.log(node, account);
    const eos = Eos.Localnet({
      httpEndpoint: node,
      keyProvider: [wif],
      broadcast: false,
      debug: true
    });
    console.log(eos)
    dispatch({
      type: types.SET_ACCOUNT_PROXY_REQUEST,
      payload: { account_name: account }
    });
    if (node || node.length === 0) {
      eos.regproxy(account, proxy).then((results) => {
        console.log(result)
        // // Trigger the action to load this accounts balances
        // dispatch(getCurrencyBalance(settings, loadAccount));
        // // Dispatch the results of the account itself
        // return dispatch({
        //   type: types.SET_ACCOUNT_PROXY_SUCCESS,
        //   payload: { results }
        // });
      }).catch((err) => dispatch({
        type: types.SET_ACCOUNT_PROXY_FAILURE,
        payload: { err, account_name: account },
      }));
      return;
    }
    dispatch({
      type: types.SET_ACCOUNT_PROXY_FAILURE,
      payload: { account_name: account },
    });
  };
}

export default {
  proxyVote
};
