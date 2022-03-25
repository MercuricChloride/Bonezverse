pragma solidity >=0.8.0 <0.9.0;
//SPDX-License-Identifier: MIT

//import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
//learn more: https://docs.openzeppelin.com/contracts/3.x/erc721

/*
.-. .-')                    .-') _   ('-.     .-') _  
\  ( OO )                  ( OO ) )_(  OO)   (  OO) ) 
 ;-----.\  .-'),-----. ,--./ ,--,'(,------.,(_)----.  
 | .-.  | ( OO'  .-.  '|   \ |  |\ |  .---'|       |  
 | '-' /_)/   |  | |  ||    \|  | )|  |    '--.   /   
 | .-. `. \_) |  |\|  ||  .     |/(|  '--. (_/   /    
 | |  \  |  \ |  | |  ||  |\    |  |  .--'  /   /___  
 | '--'  /   `'  '-'  '|  | \   |  |  `---.|        | 
 `------'      `-----' `--'  `--'  `------'`--------' 
 Made by @blind_nabler with scaffold-eth
 Fork this project on github!

*/

contract Bonez is ERC721  {

  mapping (uint256 => uint256) public death;
  mapping (uint256 => uint256) public uriRef;
  event minted(address owner, uint256 tokenId);
  address public constant blindNabler = 0x807a1752402D21400D555e1CD7f175566088b955;
  uint256 public price = 1 ether;

  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;

  constructor() ERC721("Bones", "BONEZ") {
  }


  function claim() public payable returns (uint256) {
      require(msg.value >= price);
      price = (price * 1005) / 1000;
      (bool success,) = blindNabler.call{value:msg.value}("");
      require( success, "could not send");
      _tokenIds.increment();
      uint256 id = _tokenIds.current();
      _mint(msg.sender, id);
      death[id] = block.timestamp; 
      uint256 pseudoRandom = uint256(keccak256(abi.encodePacked(address(this),id,blockhash(block.number-1))));
      uint256 _uriRef = pseudoRandom % 800;
      uriRef[id] = _uriRef;
      emit minted(msg.sender, id);
      return id;
  }

  function uint2str(uint _i) internal pure returns (string memory _uintAsString) {
          if (_i == 0) {
              return "0";
          }
          uint j = _i;
          uint len;
          while (j != 0) {
              len++;
              j /= 10;
          }
          bytes memory bstr = new bytes(len);
          uint k = len;
          while (_i != 0) {
              k = k-1;
              uint8 temp = (48 + uint8(_i - _i / 10 * 10));
              bytes1 b1 = bytes1(temp);
              bstr[k] = b1;
              _i /= 10;
          }
          return string(bstr);
      }


  function tokenURI(uint256 tokenId) public view override returns (string memory) {
      require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
      string memory base = _baseURI();
      uint256 _age = block.timestamp-death[tokenId];
      uint256 _tokenURI;
      if(_age < 1 days){
       _tokenURI = 1;
      }else if(_age < 2 days){
        _tokenURI = 2;
      }else if(_age < 3 days){
        _tokenURI = 3;
      }else if(_age < 7 days){
       _tokenURI = 4;
      }else {
        _tokenURI = uriRef[tokenId];
  }
      return string(abi.encodePacked(base, uint2str(_tokenURI), ".json"));
}

}