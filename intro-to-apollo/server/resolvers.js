const { authors, books, publishers } = require('./resolveData.json')

const reviews = []

module.exports = {
  Book: {
    publisher(book) {
      return publishers.find(p => p.id === book.publisherId)
    },
    author(book) {
      return authors.find(a => a.id === book.authorId)
    },
    reviews(book) {
      return reviews.filter(review => review.bookId === book.id)
    }
  },
  Author: {
    books(author) {
      return books.filter(book => book.authorId === author.id)
    }
  },
  Publisher: {
    books(pub) {
      return books.filter(book => book.publisherId === pub.ic)
    }
  },
  Query: {
    book (_, { id }) {
      return books.find(book => book.id === id)
    },
    booksByAuthor (_, { authorId }) {
      return books.filter(book => book.authorId === authorId)
    },
    booksByPublisher (_, { publisherId }) {
      return books.filter(book => book.publisherId === publisherId)
    },
    author (_, { id }) {
      return authors.find(a => a.id === id)
    },
    publisher (_, { id }) {
      return publishers.find(p => p.id === id)
    }
  },
  Mutation: {
    addReview(_, {review}) {
      reviews.push(review)
      return review
    }
  },
  Subscription: {
    newReviewForBook() {}
  }
}