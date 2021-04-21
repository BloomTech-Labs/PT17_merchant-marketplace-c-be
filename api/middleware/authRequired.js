/*
 * This is an example of using middleware to secure routers.
 */
const Model = require('../globalModel');
const createError = require('http-errors');
const OktaJwtVerifier = require('@okta/jwt-verifier');
const oktaVerifierConfig = require('../../config/okta');
const oktaJwtVerifier = new OktaJwtVerifier(oktaVerifierConfig.config);

const makeProfileObj = (claims) => {
  return {
    id: claims.sub,
    email: claims.email,
    name: claims.name,
  };
};
/**
 * A simple middleware that asserts valid idToken JWT and sends 401 responses
 * if the token is not present or fails validation. If the token is valid its
 * contents are attached to req.profile
 */

const authRequired = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || '';
    const match = authHeader.match(/Bearer (.+)/);
    if (!match) throw new Error('Missing idToken');

    const idToken = match[1];
    oktaJwtVerifier
      .verifyAccessToken(idToken, oktaVerifierConfig.expectedAudience)
      .then(async (data) => {
        const jwtUserObj = makeProfileObj(data.claims);
        const sellerProfile = await Model.findOrCreate(
          'seller_profile',
          jwtUserObj
        );
        const buyerProfile = null;
        // this flow doesnt work, causes unexpected problems of creating a buyer profile when its not needed
        // await Model.findOrCreate(
        //   'buyer_profile',
        //   jwtUserObj
        // );
        if (sellerProfile) {
          req.profile = sellerProfile;
        } else if (buyerProfile) {
          req.profile = sellerProfile;
        } else {
          throw new Error('Unable to process idToken');
        }
        next();
      });
  } catch (err) {
    next(createError(401, err.message));
  }
};

module.exports = authRequired;
