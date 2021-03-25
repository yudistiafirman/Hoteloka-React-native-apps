const jwt = require("jsonwebtoken");


function createJwt(payload) {
  const token = jwt.sign(payload, "secretkey");
  return token;
}

function decodeToken(token) {
  const data = jwt.verify(token, "secretkey");
  return data;
}

module.exports = {
  createJwt,
  decodeToken,
};
