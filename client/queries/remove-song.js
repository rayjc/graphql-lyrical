import { gql } from '@apollo/client';

export default gql`
  mutation DELETE_SONG($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;