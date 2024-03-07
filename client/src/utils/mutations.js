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


// Export REMOVE_BOOK
