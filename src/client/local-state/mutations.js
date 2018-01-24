import gql from 'graphql-tag'
import client from '../apollo-client'

export const UPDATE_NETWORK_STATUS = gql`
  mutation updateNetworkStatus($isConnected: Boolean) {
    updateNetworkStatus(isConnected: $isConnected) @client
  }
`;

export function updateNetworkStatus(isConnected) {
  client.mutate({
    mutation: UPDATE_NETWORK_STATUS,
    variables: {
      isConnected
    }
  })
}
