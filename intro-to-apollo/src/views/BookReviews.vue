<template>
  <v-container>
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
    <AddReviewDialog v-model="showAddReview"/>
  </v-container>
</template>

<script>
  import ReviewCard from '@/components/ReviewCard'
  import AddReviewDialog from '@/components/AddReviewDialog'

  export default {
    name: 'BookReviews',
    components: { AddReviewDialog, ReviewCard },
    data () {
      return {
        showAddReview: false,
        book: {
          title: 'My Book',
          reviews: [{
            id: 0,
            title: 'Title',
            reviewerName: 'Stanley Johnson',
            rating: 4.5,
            reviewText: 'Lorem Ipsum'
          }]
        },
      }
    }
  }
</script>

