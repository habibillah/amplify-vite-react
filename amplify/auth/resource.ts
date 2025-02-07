import { referenceAuth } from '@aws-amplify/backend';

export const auth = referenceAuth({
  userPoolId: 'us-east-1_mJh2FK3cj',
  identityPoolId: 'us-east-1:6f8e58e6-d0c1-4a42-bd24-758d3b93251e',
  authRoleArn: 'arn:aws:iam::973897519106:role/amplify-du728qifzdkyb-mai-amplifyAuthauthenticatedU-LdfSv6Uz4iHR',
  unauthRoleArn: 'arn:aws:iam::973897519106:role/amplify-du728qifzdkyb-mai-amplifyAuthunauthenticate-LdfSv6Uz4iHR',
  userPoolClientId: '2shtlj443b1ac5o92g04c7qiai',
});
