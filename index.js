'use strict';

function generatePassword(length, useSpecial) {
  const alphabet = [
    ...'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
  ];

  const special = [...'!#$%&()*+,-./:;<=>?@[]^_{|}~'];

  if (useSpecial) {
    alphabet.push(...special);
  }

  let pwd = '';

  for (let i = 0; i < length; i++) {
    pwd += alphabet[Math.floor(Math.random() * alphabet.length)];
  }

  return pwd;
}

module.exports = generatePassword;
