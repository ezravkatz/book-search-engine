import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
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

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($postText: String!) {
    addPost(postTest: $postText) {
      _id
      postText
      createdAt
      username
      reactionCount
      reactions {
        _id
      }
    }
  }
`;

// export const ADD_REACTION = gql`
//   mutation addReaction($postID: ID!, $reactionBody: String!) {
//     addReaction(postID: $postID, reactionBody: $reactionBody) {
//       _id
//       reactionCount
//       reactions {
//         _id
//         reactionBody
//         createdAt
//         username
//       }
//     }
//   }
// `;

export const SAVE_BOOK = gql`
  mutation addBook($id: ID!) {
    addBook(bookID: $id) {
      _id
      title
      bookCount
      books {
        _id
        title
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($id: ID!) {
    removeBook(id: $id) {
      _id
      title
      books {
        _id
        title
      }
    }
  }
`;
