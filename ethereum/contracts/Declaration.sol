pragma solidity ^0.4.24;

contract DeclarationFactory{
    address[] private declarations;

    function createDeclaration (address Insurance, address Client, string CareCodes, string CareAmount, string CarePrices, string DateDeclaration, string DateEndDeclaration) public {
        address declaration = new Declaration(Insurance, Client, msg.sender, CareCodes, CareAmount, CarePrices, DateDeclaration, DateEndDeclaration);
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
    string private careAmounts;
    string private carePrices;
    string private dateDeclaration;
    string private dateEndDeclaration;

    constructor (address Insurance, address Client, address CareAdminOff, string CareCodes, string CareAmounts, string CarePrices, string DateDeclaration, string DateEndDeclaration) public {
        insurance = Insurance;
        client = Client;
        careAdminOff = CareAdminOff;
        careCodes = CareCodes;
        careAmounts = CareAmounts;
        carePrices = CarePrices;
        dateDeclaration = DateDeclaration;
        dateEndDeclaration = DateEndDeclaration;
    }

    function validate() public {
        require(msg.sender == careAdminOff);
        isValidated = true;
    }

    function accept() public {
        require(msg.sender == client && isValidated);
        isAccepted = true;
    }

    function editDeclaration (address Insurance, address Client, string CareCodes, string CareAmounts, string CarePrices, string DateDeclaration, string DateEndDeclaration) public {
        require(msg.sender == careAdminOff && !isValidated);
        insurance = Insurance;
        client = Client;
        careCodes = CareCodes;
        careAmounts = CareAmounts;
        carePrices = CarePrices;
        dateDeclaration = DateDeclaration;
        dateEndDeclaration = DateEndDeclaration;
    }

    function getDeclaration() public readAutherization view returns(address, address, address, string, string ,string, string, string, bool, bool) {
        return(insurance, client, careAdminOff, careCodes, careAmounts, carePrices, dateDeclaration, dateEndDeclaration, isValidated, isAccepted);
    }

    modifier readAutherization() {
        require( msg.sender == client || msg.sender == insurance || msg.sender == careAdminOff);
        require( isValidated || msg.sender == careAdminOff);
        _;
    }
}
