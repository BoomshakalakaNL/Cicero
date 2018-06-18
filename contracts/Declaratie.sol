pragma experimental ABIEncoderV2;

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
        address zorgverlener;
    }

    Stakeholders public stakeholders;
    mapping(address => bool) public magLezen;
    mapping(address => bool) public magAccorderen;

    string private codes;
    uint[] private prijzen;
    string private datumdeclaratie;
    bool private isInternGevalideerd;
    bool private isAkkoord;

    constructor ( address clientaddress, address verzekeraaraddress, address zorgverleneraddress, string parCodes, uint[] parPrijzen, string parDatumdeclaratie ) public {
        stakeholders = Stakeholders({
            client:clientaddress,
            verzekeraar: verzekeraaraddress,
            zorgverlener: zorgverleneraddress
        });
        codes = parCodes;
        prijzen = parPrijzen;
        datumdeclaratie = parDatumdeclaratie;
    }

    function getCodes() public view readRestriction returns (string){
        return codes;
    }

    function getPrijzen() public view readRestriction returns (uint[]){
      return prijzen;
    }

    function addReader(address reader) public {
      require(msg.sender == stakeholders.client);
      magLezen[reader] = true;
    }

    function addValidator(address validator) public {
      require(msg.sender == stakeholders.client);
      magLezen[reader] = true;
      magAccorderen[reader] = true;
    }

    modifier readRestriction() {
        require(msg.sender == stakeholders.client || msg.sender == stakeholders.verzekeraar || msg.sender == stakeholders.zorgverlener || magLezen[msg.sender] || magAccorderen[msg.sender]);
        _;
    }
}
