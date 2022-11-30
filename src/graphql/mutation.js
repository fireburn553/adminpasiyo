export const updateFare = /* GraphQL */ `
  mutation UpdateFare(
    $input: UpdateFareInput!
    $condition: ModelFareConditionInput
  ) {
    updateFare(input: $input, condition: $condition) {
      createdAt
      id
      motorcycleAdditionalFare
      motorcycleBaseFare
      tricycleAdditionalFare
      tricycleBaseFare
      updatedAt
    }
  }
`;  

export const updateRide = /* GraphQL */ `
  mutation UpdateRide(
    $input: UpdateRideInput!
    $condition: ModelRideConditionInput
  ) {
    updateRide(input: $input, condition: $condition) {
      id
      type
      createdAt
      isActive
      isVerified
      rating
      heading
      latitude
      longitude
      updatedAt
      userId
    }
  }
`;