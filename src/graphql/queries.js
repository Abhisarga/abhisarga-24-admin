import { gql } from '@apollo/client';

export const GET_CLUB_LEADS_QUERY = gql`
  query GetClubLeads {
    AllClubs {
      status
      data {
        lead {
          name
        }
      }
    }
  }
`;

export const GET_ALL_CLUB_NAMES_QUERY = gql`
  query GetAllClubNames {
    AllClubs {
      status
      data {
        name
      }
    }
  }
`;

export const GET_ALL_COLEAD_PEOPLE_QUERY = gql`
  query GetAllCoLeadPeople {
    AllPersons(filter: { type: COLEAD }) {
      _id
      name
  }
`;