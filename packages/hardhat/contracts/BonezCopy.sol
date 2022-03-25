pragma solidity >=0.8.0 <0.9.0;
//SPDX-License-Identifier: MIT

//import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
//learn more: https://docs.openzeppelin.com/contracts/3.x/erc721

// GET LISTED ON OPENSEA: https://testnets.opensea.io/get-listed/step-two

contract Bonez2 is ERC721  {

  mapping (uint256 => uint256) public death;
  mapping (uint256 => uint256) public rarity;

  string[] public phases = [
    "fresh.json",
    "bloat.json",
    "active_decay.json",
    "advanced_decay.json",
    "dry_remains.json"
  ];

  string[] private uris;

  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;

  constructor() ERC721("Bones", "BONEZ") {
    uris = [
      "1/",
      "2/",
      "3/",
      "4/",
      "5/",
      "6/",
      "7/",
      "8/",
      "9/",
      "10/",
      "11/",
      "12/",
      "13/"
    ];
  }

  event minted(address owner, uint256 tokenId);

  function claim() public returns (uint256) {
      _tokenIds.increment();
      uint256 id = _tokenIds.current();
      _mint(msg.sender, id);
      death[id] = block.timestamp; 

      keccak256(abi.encodePacked(address(this),id,blockhash(block.number-1)));

      emit minted(msg.sender, id);
      return id;
  }

  function tokenURI(uint256 tokenId) public view override returns (string memory) {
      require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");

      string memory _tokenURI = uris[tokenId - 1];

      string memory _phase;

      string memory base = _baseURI();

      uint256 _age = block.timestamp-death[tokenId];

      if(_age < 1 days){
        _phase = phases[0];
      }else if(_age < 2 days){
        _phase = phases[1];
      }else if(_age < 3 days){
        _phase = phases[2];
      }else if(_age < 4 days){
        _phase = phases[3];
      }else {
        _phase = phases[4];
  }
      return string(abi.encodePacked(base, _tokenURI, _phase));
}


}
