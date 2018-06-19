pragma solidity ^0.4.24;

contract DeclarationFactory{
    address[] private declarations;

    function createDeclaration (address Insurance, address Client, string CareCodes, string CarePrices, string DateDeclaration) public {
        address declaration = new Declaration(Insurance, Client, msg.sender, CareCodes, CarePrices, DateDeclaration);
        declarations.push(declaration);
    }

    function getDeclarations() public view returns(address[]){
        return declarations;
    }
}


contract Declaration{
    address public insurance;
    address public client;
    address public careAdminOff;
    bool public isValidated;
    bool public isAccepted;
    string private careCodes;
    string private carePrices;
    string private dateDeclaration;

    constructor (address Insurance, address Client, address CareAdminOff, string CareCodes, string CarePrices, string DateDeclaration) public {
        insurance = Insurance;
        client = Client;
        careAdminOff = CareAdminOff;
        careCodes = CareCodes;
        carePrices = CarePrices;
        dateDeclaration = DateDeclaration;
    }

    function validate() public {
        require(msg.sender == careAdminOff);
        isValidated = true;
    }

    function accept() public {
        require(msg.sender == client && isValidated);
        isAccepted = true;
    }

    function editDeclaration (address Insurance, address Client, string CareCodes, string CarePrices, string DateDeclaration) public {
        require(msg.sender == careAdminOff && !isValidated);
        insurance = Insurance;
        client = Client;
        careCodes = CareCodes;
        carePrices = CarePrices;
        dateDeclaration = DateDeclaration;
    }

    function getDeclaration() public readAutherization view returns(address, address, address, string, string, string, bool, bool) {
        return(insurance, client, careAdminOff, careCodes, carePrices, dateDeclaration, isValidated, isAccepted);
    }

    modifier readAutherization() {
        require( msg.sender == client || msg.sender == insurance || msg.sender == careAdminOff);
        require( isValidated || msg.sender == careAdminOff);
        _;
    }
}
