module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '034269dd584aebdc19b6486fb7bd59dc'),
  },
});
