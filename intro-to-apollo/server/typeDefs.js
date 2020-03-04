const { gql } = require('apollo-server')

module.exports = gql`
    type Review {
        id: ID!
        title: String!
        reviewerName: String
        rating: Float
        reviewText: String
    }

    type Book {
        id: ID!
        title: String
        subtitle: String
        summary: String
        numPages: Int
        publisher: Publisher
        author: Author
        reviews: [Review]
    }

    type Author {
        id: ID!
        firstName: String
        lastName: String
        email: String
        books: Book
    }

    type Publisher {
        id: ID!
        name: String
        street: String
        city: String
        state: String
        zip: String
        books: Book
    }

    type Query {
        book(id: ID!): Book
        books: [Book]
        author(id: ID!): Author
        publisher(id: ID!): Publisher
    }

    input NewReview {
        bookId: ID!
        title: String!
        reviewerName: String!
        rating: Float!
        reviewText: String
    }

    type Mutation {
        addReview(review: NewReview): Review
    }

    type Subscription {
        newReviewForBook(bookId: ID!): Review
    }
`