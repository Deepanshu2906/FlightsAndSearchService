const ClientErrorCodes = {
  BAD_REQUEST: 400,
  UNAUTHORISED: 401,
  NOT_FOUND: 404,
};
const ServerErrorCodes = {
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
};
const SucessCodes = {
  OK: 200,
  CREATED: 201,
};
module.exports = {
  ClientErrorCodes,
  ServerErrorCodes,
  SucessCodes,
};
