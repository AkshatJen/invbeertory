const { name, description, author } = require('./package.json');

require('dotenv').config();

const buildCredentials = ({
  SPREADSHEET_ID,
  PROJECT_ID,
  PRIVATE_KEY,
  PRIVATE_KEY_ID,
  CLIENT_EMAIL,
}) => ({
  spreadsheetId: SPREADSHEET_ID,
  credentials: {
    type: 'service_account',
    project_id: PROJECT_ID,
    private_key_id: PRIVATE_KEY_ID,
    private_key: PRIVATE_KEY.replace(/(\\r)|(\\n)/g, '\n'),
    client_email: CLIENT_EMAIL,
    client_id: '',
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${PROJECT_ID}%40appspot.gserviceaccount.com`,
  },
});

module.exports = {
  siteMetadata: {
    title: name,
    description,
    author,
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name,
        short_name: name,
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
      },
    },
    {
      resolve: 'gatsby-source-google-spreadsheet',
      options: buildCredentials(process.env),
    },
    'gatsby-plugin-offline',
  ],
};
