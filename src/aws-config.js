import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
    Cognito: {
      // REPLACE THESE WITH YOUR ACTUAL VALUES FROM COGNITO
      userPoolId: 'us-east-1_1brwcPto0',     // Found in Cognito User Pool → General Settings
      userPoolClientId: 'mhclh9sd6toga09j61nppms47', // Found in Cognito User Pool → App clients
      identityPoolId: 'us-east-1:0f75e6c4-4f9b-4ff7-9b07-11d948655b27', // Found in Cognito → Identity Pools
      loginWith: {
        email: true,
      },
      signUpVerificationMethod: 'code',
      userAttributes: {
        email: {
          required: true,
        },
      },
      passwordFormat: {
        minLength: 8,
        requireLowercase: true,
        requireUppercase: true,
        requireNumbers: true,
      },
    },
  },
});

export default Amplify;
