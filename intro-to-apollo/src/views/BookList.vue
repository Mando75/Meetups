<template>
  <v-container>
    <v-row>
      <v-col
          v-for="book in books"
          :key="book.id + book.title"
          cols="4"
      >
        <BookCard :book="book"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import BookCard from '@/components/BookCard'
  import gql from 'graphql-tag'

  export default {
    name: 'BookList',
    components: { BookCard },
    apollo: {
      books: {
        query: gql`
         query getBooks {
           books {
             id
             title
             subtitle
             summary
             numPages
             publisher {
               id
               name
               street
               city
               state
               zip
             }
             author {
               id
               firstName
               lastName
               email
             }
           }
         }
        `
      }
    }
  }
</script>

