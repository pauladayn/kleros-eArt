// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

 contract Artwork is ERC721 {
  string[] public artworks;
  mapping(string => bool) _artworkExists;

  constructor() public ERC721("Artwork", "ARTWORK") {
  }


  function getTokens() public view returns (string [] memory) { return artworks;}
  
  function mint(string memory _artwork) public {
    require(!_artworkExists[_artwork]);
    artworks.push(_artwork);
    uint _id = artworks.length - 1;
    _mint(msg.sender, _id);
    _artworkExists[_artwork] = true;
  }
}