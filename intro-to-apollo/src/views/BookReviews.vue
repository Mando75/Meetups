<template>
  <v-container v-if="bookLoading">
    <v-skeleton-loader></v-skeleton-loader>
  </v-container>
  <v-container v-else>
    <v-row>
      <h1>Reviews for {{book.title}}</h1>
    </v-row>
    <v-row>
      <v-col
        v-for="review in book.reviews"
        :key="review.id"
        cols="4"
      >
        <ReviewCard :review="review"/>
      </v-col>
      <span v-if="book.reviews.length === 0">There are no reviews</span>
      <v-btn
          color="blue"
          dark
          fixed
          bottom
          right
          fab
          @click="showAddReview = !showAddReview"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-row>
    <AddReviewDialog v-model="showAddReview" :book-id="book.id"/>
  </v-container>
</template>

<script>
  import ReviewCard from '@/components/ReviewCard'
  import AddReviewDialog from '@/components/AddReviewDialog'
  import gql from 'graphql-tag'

  export default {
    name: 'BookReviews',
    components: { AddReviewDialog, ReviewCard },
    apollo: {
      book: {
        query: gql`
          query book($id: ID!) {
            book(id: $id) {
              id
              title
              reviews {
                id
                title
                reviewerName
                reviewText
                rating
              }
            }
          }
        `,
        loadingKey: 'bookLoading',
        variables () {
          return {
            id: this.$route.params.id
          }
        },
        subscribeToMore: {
          document: gql`subscription newReview($bookId: ID!) {
             newReviewForBook(bookId: $bookId) {
                id
                title
                reviewerName
                reviewText
                rating
             }
          }`,
          variables () {
            return { bookId: this.$route.params.id }
          },
          updateQuery ({book}, { subscriptionData: {data} }) {
            // eslint-disable-next-line no-debugger
            return {
              book: {
                ...book,
                reviews: [
                  ...book.reviews,
                  data.newReviewForBook
                ]
              }
            }
          }
        }
      }
    },
    data () {
      return {
        bookLoading: 0,
        showAddReview: false,
      }
    }
  }
</script>

