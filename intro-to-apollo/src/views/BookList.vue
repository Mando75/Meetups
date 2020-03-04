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

  export default {
    name: 'BookList',
    components: { BookCard },
    data () {
      return {
        books: [{
          id: 0, title: 'Hardcoded',
          subtitle: 'We are going to change this',
          summary: 'This is a summary for a non existent book Lorem ipsum This is a summary for a non existent book Lorem ipsumThis is a summary for a non existent book Lorem ipsumThis is a summary for a non existent book Lorem ipsumThis is a summary for a non existent book Lorem ipsumThis is a summary for a non existent book Lorem ipsum',
          numPages: 19,
          publisher: {
            id: 0,
            name: 'My Book Publisher',
            street: '123 Sesame St',
            city: 'New York',
            state: 'NY',
            zip: 12345
          },
          author: {
            id: 0,
            firstName: 'Bob',
            lastName: 'Author',
            email: 'bob@author.com'
          },
          reviews: []
        },
          {
            id: 1, title: 'Hardcoded',
            subtitle: 'We are going to change this',
            summary: 'This is a summary for a non existent book Lorem ipsum This is a summary for a non existent book Lorem ipsumThis is a summary for a non existent book Lorem ipsumThis is a summary for a non existent book Lorem ipsumThis is a summary for a non existent book Lorem ipsumThis is a summary for a non existent book Lorem ipsum',
            numPages: 19,
            publisher: {
              id: 0,
              name: 'My Book Publisher',
              street: '123 Sesame St',
              city: 'New York',
              state: 'NY',
              zip: 12345
            },
            author: {
              id: 0,
              firstName: 'Bob',
              lastName: 'Author',
              email: 'bob@author.com'
            },
            reviews: []
          },
          {
            id: 2, title: 'Hardcoded',
            subtitle: 'We are going to change this',
            summary: 'This is a summary for a non existent book Lorem ipsum This is a summary for a non existent book Lorem ipsumThis is a summary for a non existent book Lorem ipsumThis is a summary for a non existent book Lorem ipsumThis is a summary for a non existent book Lorem ipsumThis is a summary for a non existent book Lorem ipsum',
            numPages: 19,
            publisher: {
              id: 0,
              name: 'My Book Publisher',
              street: '123 Sesame St',
              city: 'New York',
              state: 'NY',
              zip: 12345
            },
            author: {
              id: 0,
              firstName: 'Bob',
              lastName: 'Author',
              email: 'bob@author.com'
            }
          }
        ]
      }
    }
  }
</script>

