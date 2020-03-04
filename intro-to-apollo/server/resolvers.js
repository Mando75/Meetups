const { authors, books, publishers } = require('./resolveData.json')
const {PubSub, withFilter} = require('apollo-server')
const pubsub = new PubSub()
const REVIEW_ADDED = 'REVIEW_ADDED'

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
    books () {
      return books
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
      const reviewWithId = {...review, id: reviews.length}
      reviews.push(reviewWithId)
      pubsub.publish(REVIEW_ADDED, {newReviewForBook: reviewWithId})
      return reviewWithId
    }
  },
  Subscription: {
    newReviewForBook: {
      subscribe: withFilter(
        () => pubsub.asyncIterator(REVIEW_ADDED),
        (payload, variables) => {
          console.log({payload, variables})
          return payload.newReviewForBook.bookId === variables.bookId
        }
      )
    }
  }

}