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