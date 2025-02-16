"use strict";
const user = {
    address: '123',
    age: 12,
    name: 'sedfw',
};
const address = {
    index: 12,
    street: 'ewrwer',
};
const common = Object.assign(Object.assign({}, address), user);
