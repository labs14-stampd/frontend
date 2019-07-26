pragma solidity >=0.4.21 <0.6.0;

contract SimpleCounter {

  uint public count = 0;

  event AddCount(uint _count);

  function addCount() public {
      count++;
      emit AddCount(count);
  }

}
