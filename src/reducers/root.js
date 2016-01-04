import {combineReducers} from 'redux';
import endpointExplorer from './endpointExplorer';
import transactionBuilder from './transactionBuilder';
import transactionSigner from './transactionSigner';
import network from './network';

const rootReducer = combineReducers({
  endpointExplorer,
  transactionBuilder,
  transactionSigner,
  network,
});

export default rootReducer;
