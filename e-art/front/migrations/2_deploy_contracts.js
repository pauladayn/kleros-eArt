const Artwork = artifacts.require("Artwork");

module.exports = function (deployer) {
  deployer.deploy(Artwork);
};