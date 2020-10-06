pragma solidity ^0.5.9;

contract Bank{
    uint balance;
    
    constructor() public{
        balance = 1;
    }
    
    function getBalance() view external returns(uint){
        return balance;
    }
    
    function withdraw(uint _amount) external returns(uint){
        balance = balance - _amount;
        return balance;
    }
    
    function deposit(uint _amount) external returns(uint){
        balance = balance + _amount;
        return balance;
    }
    
    
}