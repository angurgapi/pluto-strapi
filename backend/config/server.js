module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'https://ca1a9440529a.ngrok.io',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '82e95618766711b791536daf6a947b84'),
    },
  },
});
