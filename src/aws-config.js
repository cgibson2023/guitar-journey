import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
    Cognito: {
      // REPLACE THESE WITH YOUR ACTUAL VALUES FROM COGNITO
      userPoolId: 'us-east-1_1brwcPto0',     // Found in Cognito User Pool → General Settings
      userPoolClientId: 'mhclh9sd6toga09j61nppms47', // Found in Cognito User Pool → App clients
      identityPoolId: 'us-east-1:abc12345-1234-1234-1234-123456789012', // Found in Cognito → Identity Pools
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
