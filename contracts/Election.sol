pragma solidity ^0.4.2;

contract Election {
    // Store candidate
    // Read candidate
    string public candidate; // state variable, accessible within contract. Declared public gives us a getter function

    // Constructor: ran whenever we initialize our contract upon migration
    // define a function with same name as contract
    function Election () public {
        candidate = "Candidate 1";
    }
}
