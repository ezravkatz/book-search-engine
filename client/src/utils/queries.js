import { gql } from '@apollo/client';

export const GET_POST = gql`
  query post($username: String) {
    post(username: $username) {
      _id
      postText
      createdAt
      username
      reactionCount
      reactions {
        _id
        createdAt
        username
        reactionBody
      }
    }
  }
`;

export const GET_POST = gql`
  query post($id: ID!) {
    post(_id: $id) {
      _id
      postText
      createdAt
      username
      reactionCount
      reactions {
        _id
        createdAt
        username
        reactionBody
      }
    }
  }
`;

export const GET_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      bookCount
      books {
        _id
        title
      }
      posts {
        _id
        postText
        createdAt
        reactionCount
      }
    }
  }
`;

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      bookCount
      posts {
        _id
        postText
        createdAt
        reactionCount
        reactions {
          _id
          createdAt
          reactionBody
          username
        }
      }
      books {
        _id
        title
      }
    }
  }
`;

export const GET_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
      bookCount
      books {
        _id
        title
      }
    }
  }
`;
