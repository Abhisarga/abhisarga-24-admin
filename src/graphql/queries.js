export const GET_CLUB_LEADS_QUERY = `
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
`

export const GET_ALL_CLUB_NAMES_QUERY = `
  query GetAllClubNames {
    AllClubs {
      status
      data {
        name
      }
    }
  }
`

export const GET_ALL_COLEAD_PEOPLE_QUERY = `
  query GetAllCoLeadPeople {
    AllPersons(filter: { type: COLEAD }) {
      _id
      name
  }
`
