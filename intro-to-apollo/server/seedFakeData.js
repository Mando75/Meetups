const faker = require('faker')
const fs = require('fs')
const path = require('path')

const seedFakeData = () => {
  const publishers = [];
  const authors = [];
  const books = [];
  // seed publishers
  for (let i = 0; i < 2; i++) {
    publishers.push({
      id: String(i),
      name: faker.company.companyName(),
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.stateAbbr(),
      zip: faker.address.zipCode()
    })
  }
  // seed authors
  for (let i = 0; i < 5; i++) {
    authors.push({
      id: String(i),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email()
    })
  }
  // seed books
  for (let i = 0; i < 10; i++) {
    const publisherId = String(i % 2)
    const authorId = String(i % 5)
    books.push({
      id: String(i),
      title: faker.lorem.words(3),
      subtitle: faker.lorem.words(5),
      summary: faker.lorem.paragraph(),
      numPages: faker.random.number(),
      publisherId,
      authorId
    })
  }

  const data = JSON.stringify({
    publishers,
    authors,
    books
  })
  fs.writeFileSync(path.resolve(__dirname, 'resolveData.json'), data)
}

seedFakeData()