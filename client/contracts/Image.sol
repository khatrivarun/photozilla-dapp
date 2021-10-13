//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

contract Image {
  struct SharedImage {
    address owner;
    string imgHash;
  }

  SharedImage[] private images;

  function getImages() public view returns (SharedImage[] memory) {
    return images;
  }

  function addImage(string memory _hash) public {
    images.push(SharedImage({ owner: msg.sender, imgHash: _hash }));
  }
}
