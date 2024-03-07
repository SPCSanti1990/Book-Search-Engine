// Import gql
import gql from "graphql-tag";

// Expoort LOGIN_USER
export const LOGIN_USER = gql `
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
    `;

// Export SAVE_BOOK
export const SAVE_BOOK = gql `
    mutation saveBook($book: SavedBookInput!) {
        saveBook: $book) {
            username
            email
            bookCount
            savedBooks {
                authors
                description
                bookId
                image
                link
                title
            }
        }
    }
    `;

// Export REMOVE_BOOK
