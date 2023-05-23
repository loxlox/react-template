/* Constants */
const common = {
  ssoLoginKey: '',
};

const production = {
  ...common,
  urls: {
    apiBaseUrl: '',
  },
  reduxPersistConfig: {
    key: '#-PROD',
  },
};

const staging = {
  ...common,
  urls: {
    apiBaseUrl: '',
  },
  reduxPersistConfig: {
    key: '#-STAG',
  },
};

// available environment
const purpose_list = {
  0: production,
  1: staging,
};

const config = purpose_list[1];

export default config;
