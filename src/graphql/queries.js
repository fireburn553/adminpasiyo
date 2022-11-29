/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      orders {
        items {
          id
          createdAt
          type
          status
          originLatitude
          originLongitude
          destinationLatitude
          destinationLongitude
          userId
          rideId
          updatedAt
        }
        nextToken
      }
      ride {
        id
        type
        latitude
        longitude
        heading
        isActive
        orders {
          nextToken
        }
        userId
        user {
          id
          username
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        orders {
          nextToken
        }
        ride {
          id
          type
          latitude
          longitude
          heading
          isActive
          userId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRide = /* GraphQL */ `
  query GetRide($id: ID!) {
    getRide(id: $id) {
      id
      type
      latitude
      longitude
      heading
      isActive
      orders {
        items {
          id
          createdAt
          type
          status
          originLatitude
          originLongitude
          destinationLatitude
          destinationLongitude
          userId
          rideId
          updatedAt
        }
        nextToken
      }
      userId
      user {
        id
        username
        email
        orders {
          nextToken
        }
        ride {
          id
          type
          latitude
          longitude
          heading
          isActive
          userId
          createdAt
          updatedAt
        }
        createdAt
        # updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listRides = /* GraphQL */ `
  query ListRides(
    $filter: ModelRideFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRides(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        latitude
        longitude
        heading
        rating
        isActive
        isVerified
        orders {
          nextToken
        }
        userId
        user {
          id
          username
          email
          createdAt
          userDetails{
            firstName
            middleName
            lastName
            profileImage
            phoneNumber
            id
            birthDate
          }
          
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      createdAt
      type
      status
      payment
      originLatitude
      originLongitude
      originName
      destinationLatitude
      destinationLongitude
      destinationName
      message
      rating
      comment
      amount
      userId
      user {
        id
        username
        email
        orders {
          nextToken
        }
        ride {
          id
          type
          latitude
          longitude
          heading
          isActive
          userId
          createdAt
          updatedAt
        }
        createdAt
        # updatedAt
      }
      rideId
      ride {
        id
        type
        latitude
        longitude
        heading
        isActive
        orders {
          nextToken
        }
        userId
        user {
          id
          username
          email
          createdAt
          
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        type
        status
        payment
        originLatitude
        originLongitude
        originName
        destinationLatitude
        destinationLongitude
        destinationName
        message
        rating
        comment
        amount
        userId
        user {
          id
          username
          email
          createdAt
          userDetails {
            firstName
            middleName
            lastName
            profileImage
            phoneNumber
            id
            birthDate
          }
        }
        rideId
        ride {
          id
          type
          latitude
          longitude
          heading
          isActive
          userId
          createdAt
          updatedAt
          user{
            id
            username
            userDetails{
              firstName
              middleName
              lastName
              profileImage
              phoneNumber
              id
              birthDate
            }
          }
        }
        updatedAt
      }
      nextToken
    }
  }
`;

export const getFare = /* GraphQL */ `
  query getFare($id: ID!) {
    getFare(id: $id) {
      id
      createdAt
      updatedAt
      motorcycleBaseFare
      motorcycleAdditionalFare
      tricycleBaseFare
      tricycleAdditionalFare
    }
  }
`;

export const getUserDetails = /* GraphQL */ `
  query getUserDetails($id: ID!) {
    getUserDetails(id: $id) {
      id
      firstName
      middleName
      lastName
      birthDate
      phoneNumber
      userId
      profileImage
      createdAt
      updatedAt
    }
  }
`;