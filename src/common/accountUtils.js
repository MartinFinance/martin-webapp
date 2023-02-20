import {generateMnemonic} from "bip39";
import {privateToAddress, privateToPublic, publicToAddress} from 'ethereumjs-util';
import {addHexPrefix, formatAddress, formatKey, toBuffer} from './formatter';
import {decryptKeystoreToPkey, pkeyToKeystore} from './keystore';
import {mnemonictoPrivatekey} from "./mnemonic";
import {makeBlob, getFileName} from "./Blob";
import validator from './validator';

const DEFAULT_DPATH = "m/44'/60'/0'/0/0";

export function privateKeytoAddress(privateKey) {
  try {
    if (typeof privateKey === 'string') {
      validator.validate({value: privateKey, type: 'PRIVATE_KEY'});
      privateKey = toBuffer(addHexPrefix(privateKey));
    } else {
      validator.validate({value: privateKey, type: 'PRIVATE_KEY_BUFFER'});
    }
  } catch (e) {
    throw new Error('Invalid private key');
  }
  return formatAddress(privateToAddress(privateKey));
}

export function publicKeytoAddress(publicKey, sanitize) {
  return formatAddress(publicToAddress(publicKey, sanitize));
}

export function privateKeytoPublic(privateKey) {
  try {
    if (typeof privateKey === 'string') {
      validator.validate({value: privateKey, type: 'PRIVATE_KEY'});
      privateKey = toBuffer(addHexPrefix(privateKey));
    } else {
      validator.validate({value: privateKey, type: 'PRIVATE_KEY_BUFFER'});
    }
  } catch (e) {
    throw new Error('Invalid private key');
  }
  return formatKey(privateToPublic(privateKey));
}

export function create(password, dpath) {
  const mnemonic = generateMnemonic(256);
  const privateKey = mnemonictoPrivatekey(mnemonic, password, dpath || DEFAULT_DPATH);
  const publicKey = privateToPublic(privateKey);
  const address = privateToAddress(privateKey);

  return {
    mnemonic,
    password,
    privateKey: formatKey(privateKey),
    publicKey: formatKey(publicKey),
    address: formatAddress(address),
  };
}

export function encrypt(privateKey, password) {
  try {
    if (typeof privateKey === 'string') {
      validator.validate({value: privateKey, type: 'PRIVATE_KEY'});
      privateKey = toBuffer(addHexPrefix(privateKey))
    } else {
      validator.validate({value: privateKey, type: 'PRIVATE_KEY_BUFFER'});
    }
  } catch (e) {
    throw new Error('Invalid private key');
  }
  return pkeyToKeystore(privateKey, password) // keystoreJsonV3
}

export function decrypt(keystoreJsonV3, password) {
  const privateKey = decryptKeystoreToPkey(keystoreJsonV3, password); // privateKey
  const publicKey = privateToPublic(privateKey);
  const address = publicToAddress(publicKey);
  return {
    privateKey: formatKey(privateKey),
    publicKey: formatKey(publicKey),
    address: formatAddress(address),
  };
}

export function fromMnemonic(mnemonic, password, dpath) {

  const privateKey = mnemonictoPrivatekey(mnemonic, password, dpath || DEFAULT_DPATH);
  const publicKey = privateToPublic(privateKey);
  const address = privateToAddress(privateKey);


  return {
    mnemonic,
    privateKey: formatKey(privateKey),
    publicKey: formatKey(publicKey),
    address: formatAddress(address),
  }
}

export function fromPrivateKey(privateKey) {
  try {
    if (typeof privateKey === 'string') {
      validator.validate({value: privateKey, type: 'PRIVATE_KEY'});
      privateKey = toBuffer(addHexPrefix(privateKey))
    } else {
      validator.validate({value: privateKey, type: 'PRIVATE_KEY_BUFFER'});
    }
  } catch (e) {
    throw new Error('Invalid private key')
  }
  const publicKey = privateToPublic(privateKey);
  const address = privateToAddress(privateKey);
  return {
    privateKey: formatKey(privateKey),
    publicKey: formatKey(publicKey),
    address: formatAddress(address),
  }
}

export function download(privateKey, password, mime) {
  if (typeof privateKey === 'string') {
    privateKey = toBuffer(addHexPrefix(privateKey));
  }
  const address = privateKeytoAddress(privateKey);
  const fileName = getFileName(address);
  const content = encrypt(privateKey, password);
  const blob = makeBlob(content, mime || 'text/json;charset=UTF-8');
  return { fileName, blob, content };
}
