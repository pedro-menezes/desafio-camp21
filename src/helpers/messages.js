module.exports.messages = {
  notFound: (resource) => `${resource}-not-found`,
  alreadyExists: (param) => `${param}-already-registered`,
  deleted: (id) => `user-${id}-deleted`,
  invalidFields: "invalid-fields",
  invalidPassword: "invalid-password",
  expiredToken: "expired-token",
  invalidAuthFormat: `invalid-authorization-format`,
  authMissing: `missing-authorization-header`,
  internalError: "internal-server-error",
  userUnauthorized: "user-not-admin",
  userNotExist: "user-not-exist",
};
