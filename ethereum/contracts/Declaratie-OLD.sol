pragma solidity ^0.4.24;

contract DeclaratieFactory{
    address[] public deployedDeclaraties;

    function createDeclaratie( address clientaddress, address verzekeraaraddress, string parCodes, uint[] parPrijzen, string parDatumdeclaratie ) public {
        address newDeclaratie = new Declaratie(clientaddress, verzekeraaraddress, msg.sender, parCodes, parPrijzen, parDatumdeclaratie);
        deployedDeclaraties.push(newDeclaratie);
    }

    function getDeployedDeclaraties() public view returns(address[]) {
      return deployedDeclaraties;
    }
}

contract Declaratie{
    struct Stakeholders {
        address client;
        address verzekeraar;
        address zorgkantoor;
    }

    Stakeholders public stakeholders;
    mapping(address => bool) public magLezen;
    mapping(address => bool) public magAccorderen;

    address[] public lezers;
    address[] public accordeerders;

    string private codes;
    uint[] private prijzen;
    string private datumdeclaratie;
    bool private isInternGevalideerd;
    bool private isAkkoord;

    constructor ( address clientaddress, address verzekeraaraddress, address zorgkantooraddress, string parCodes, uint[] parPrijzen, string parDatumdeclaratie ) public {
        stakeholders = Stakeholders({
            client:clientaddress,
            verzekeraar: verzekeraaraddress,
            zorgkantoor: zorgkantooraddress
        });
        codes = parCodes;
        prijzen = parPrijzen;
        datumdeclaratie = parDatumdeclaratie;
        isInternGevalideerd = false;
        isAkkoord = false;
    }

    function editDeclaratie(address clientaddress, address verzekeraaraddress, string parCodes, uint[] parPrijzen, string parDatumdeclaratie) public {
      require(msg.sender == stakeholders.zorgkantoor && !isInternGevalideerd);
      stakeholders.client = clientaddress;
      stakeholders.verzekeraar = verzekeraaraddress;
      codes = parCodes;
      prijzen = parPrijzen;
      datumdeclaratie = parDatumdeclaratie;
    }

    function addReader(address reader) public {
      require(msg.sender == stakeholders.client);
      magLezen[reader] = true;
      lezers.push(reader);
    }

    function addValidator(address validator) public {
      require(msg.sender == stakeholders.client);
      magLezen[validator] = true;
      lezers.push(validator);
      magAccorderen[validator] = true;
      accordeerders.push(validator);
    }

    function validate() public {
      require(msg.sender == stakeholders.zorgkantoor);
      isInternGevalideerd = true;
    }

    function getIsInternGevalideerd() public view readRestriction validationRestriction returns(bool) {
      return isInternGevalideerd;
    }

    function accorderen() validationRestriction public {
      require(msg.sender == stakeholders.client || magAccorderen[msg.sender]);
      isAkkoord = true;
    }

    function getIsAkkoord() public view readRestriction validationRestriction returns(bool) {
      return isAkkoord;
    }


    function getSummary() public view readRestriction validationRestriction returns( address, address, address, string, uint[], string, bool, bool, address[], address[] ){
        return(
          stakeholders.client,
          stakeholders.verzekeraar,
          stakeholders.zorgkantoor,
          codes,
          prijzen,
          datumdeclaratie,
          isInternGevalideerd,
          isAkkoord,
          lezers,
          accordeerders
          );
    }

    modifier readRestriction() {
        require(msg.sender == stakeholders.client || msg.sender == stakeholders.verzekeraar || msg.sender == stakeholders.zorgkantoor || magLezen[msg.sender] || magAccorderen[msg.sender]);
        _;
    }

    modifier validationRestriction() {
      require( isInternGevalideerd || msg.sender == stakeholders.zorgkantoor );
      _;
    }
}
