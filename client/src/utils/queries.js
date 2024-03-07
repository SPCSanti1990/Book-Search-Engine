// Import gql
import gql from "graphql-tag";

// Export GET_ME
export const GET_ME = gql `
    {
        me {
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                authors
                description
                title
                image
                link
            }
        }
    }
    `;