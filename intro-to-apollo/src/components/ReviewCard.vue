<template>
  <v-card>
    <v-card-title>
      {{review.title}}
    </v-card-title>
    <v-card-text>
      <p>
        {{review.reviewText}}
      </p>
    </v-card-text>
    <v-card-actions>
      {{review.reviewerName}}
      <v-spacer/>
      <span class="grey--text caption mr-2">
              ({{review.rating}})
            </span>
      <v-rating
          v-model="review.rating"
          dense
          color="blue"
          half-increments
          readonly
          size="18"
      >

      </v-rating>
    </v-card-actions>
  </v-card>
</template>
<script>
  export default {
    name: 'ReviewCard',
    props: {
      review: {}
    }
  }
</script>
