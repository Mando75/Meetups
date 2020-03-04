<template>
  <v-card>
    <v-card-title>
      <h2 class="title">{{book.title}}</h2>
    </v-card-title>
    <v-card-subtitle>
      <h3 class="subtitle-1">{{book.subtitle}}</h3>
    </v-card-subtitle>
    <v-card-text>
      <p>
        <v-icon>mdi-book</v-icon>
        {{book.summary}}
      </p>
    </v-card-text>
    <v-divider/>
    <BookInfoPanel :book="book"/>
    <v-card-actions>
      <v-btn
          color="blue"
          text
          :to="`/book/${book.id}/reviews`">Reviews</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
  import BookInfoPanel from '@/components/BookInfoPanel'

  export default {
    name: 'BookCard',
    components: { BookInfoPanel },
    props: {
      book: {}
    }
  }
</script>
