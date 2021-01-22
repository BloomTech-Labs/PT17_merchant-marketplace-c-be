const faker = require('faker');

const profiles = [...new Array(5)].map(() => ({
  id: faker.random.alphaNumeric(20),
  avatarUrl: faker.image.avatar(),
  email: faker.internet.email(),
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  billing_address: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()} ${faker.address.zipCode()}`,
}));

exports.seed = function (knex) {
  // Inserts seed entries
  return knex('profiles').insert([
    {
      id: '00ulthapbErVUwVJy4x6',
      avatarUrl: faker.image.avatar(),
      email: 'llama001@maildrop.cc',
      name: 'Test001 User',
      billing_address: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()} ${faker.address.zipCode()}`,
      merchant: true,
    },
    {
      id: '00ultwew80Onb2vOT4x6',
      avatarUrl: faker.image.avatar(),
      email: 'llama002@maildrop.cc',
      name: 'Test002 User',
      billing_address: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()} ${faker.address.zipCode()}`,
      merchant: true,
    },
    {
      id: '00ultx74kMUmEW8054x6',
      avatarUrl: faker.image.avatar(),
      email: 'llama003@maildrop.cc',
      name: 'Test003 User',
      billing_address: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()} ${faker.address.zipCode()}`,
      merchant: true,
    },
    ...profiles,
  ]);
};
