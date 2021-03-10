const dev = {
  api: {
    HOST: '',
    VERSION: '/graphql/',
    GRAPH_QL: 'http://localhost:8080/graphql'
  },
  auth: {
    GRANT_TYPE: 'password',
    CLIENT_ID: 'client1',
    CLIENT_SECRET: 'secret',
  },
  microsoft: {
    auth: {
      clientId: '5f471bd1-ac06-4f49-88d7-d852c2e14fb5',
      authority: 'https://login.microsoftonline.com/402d0e12-de7f-4ed6-8704-7d02bc11fac0',
      redirectUri: 'http://localhost:3000/login',
    },
    cache: {
      cacheLocation: 'sessionStorage',
      storeAuthStateInCookie: true,
    },
    scopes: ['openid', 'profile', 'email'],
  }
};

const prod = {
  api: {
    HOST: 'https://react-inspinia.free.beeceptor.com',
    VERSION: '/api/',
  },
  auth: {
    GRANT_TYPE: 'password',
    CLIENT_ID: 'client_id',
    CLIENT_SECRET: 'client_secret',
  },
  microsoft: {
    auth: {
      clientId: '5f471bd1-ac06-4f49-88d7-d852c2e14fb5',
      authority: 'https://login.microsoftonline.com/402d0e12-de7f-4ed6-8704-7d02bc11fac0',
      redirectUri: 'http://localhost:3000/auth',
    },
    cache: {
      cacheLocation: 'sessionStorage',
      storeAuthStateInCookie: true,
    },
    scopes: 'openid profile email',
  }
};

const config = process.env.REACT_APP_STAGE === 'production' ? prod : dev;
// const config = process.env.REACT_APP_STAGE === 'production' ? dev : prod;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config,
};
