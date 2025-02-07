import { referenceAuth } from '@aws-amplify/backend';

export const auth = referenceAuth({
  // userPoolId: 'us-east-1_mJh2FK3cj',
  // identityPoolId: 'us-east-1:6f8e58e6-d0c1-4a42-bd24-758d3b93251e',
  // authRoleArn: 'arn:aws:iam::973897519106:role/amplify-du728qifzdkyb-mai-amplifyAuthauthenticatedU-LdfSv6Uz4iHR',
  // unauthRoleArn: 'arn:aws:iam::973897519106:role/amplify-du728qifzdkyb-mai-amplifyAuthunauthenticate-bHz8eWkhbMeK',
  // userPoolClientId: '2shtlj443b1ac5o92g04c7qiai',

  userPoolId: 'us-east-1_XUjwxCiBE',
  identityPoolId: 'us-east-1:7600c9b5-05c9-4329-86ae-f8ccd66766b8',
  authRoleArn: 'arn:aws:iam::973897519106:role/amplify-du728qifzdkyb-mai-amplifyAuthauthenticatedU-LdfSv6Uz4iHR',
  unauthRoleArn: 'arn:aws:iam::973897519106:role/amplify-du728qifzdkyb-mai-amplifyAuthunauthenticate-bHz8eWkhbMeK',
  userPoolClientId: '7cgsmgcfmc2ceasurtscn7duef',
});
