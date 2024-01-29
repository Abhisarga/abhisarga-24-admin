import { gql } from "@apollo/client";

// Mutation to create an event
export const CREATE_EVENT_MUTATION = gql`
  mutation CreateEvent($event: EventInput!) {
    CreateEvent(event: $event) {
      status
      data {
        _id
      }
    }
  }
`;

// Mutation to create a theme
export const CREATE_THEME_MUTATION = gql`
  mutation CreateTheme($input: ThemeInput!) {
    CreateTheme(input: $input) {
      status
      data {
        _id
      }
    }
  }
`;

// Mutation to create a sponsor
export const CREATE_SPONSOR_MUTATION = gql`
  mutation CreateSponsor($input: SponsorInput!) {
    CreateSponsor(input: $input) {
      status
      data {
        _id
      }
    }
  }
`;

// Mutation to login
export const LOGIN_MUTATION = gql`
  mutation Login($password: String!, $email: String!) {
    Login(password: $password, email: $email) {
      status
      data {
        _id
      }
    }
  }
`;

// Mutation to register
export const REGISTER_MUTATION = gql`
  mutation Register($user: UserInput!) {
    Register(user: $user) {
      status
      data {
        _id
      }
    }
  }
`;

// Mutation to create a club
export const CREATE_CLUB_MUTATION = gql`
  mutation CreateClub($input: ClubInput!) {
    CreateClub(input: $input) {
      status
      data {
        _id
      }
    }
  }
`;

export const CREATE_PERSON_MUTATION = gql`write mutation here`;

// Add similar exports for other mutations
