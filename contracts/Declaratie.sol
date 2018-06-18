pragma experimental ABIEncoderV2;

contract DeclaratieFactory{
    address[] public deployedDeclaraties;

    function createDeclaratie(
    //  address clientaddress,
    	//address verzekeraaraddress,
    	//string[] parCodes,
    	uint[] parPrijzen
    	//string parDatumdeclaratie
    ) public {
        //address newDeclaratie = new Declaratie(clientaddress, verzekeraaraddress, msg.sender, parCodes, parPrijzen, parDatumdeclaratie);
        address newDeclaratie = new Declaratie(parPrijzen);
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
    mapping(address => bool) public magAkkoorderen;

    string[] private codes;
    uint[] private prijzen;
    string private datumdeclaratie;
    bool private isInternGevalideerd;
    bool private isAkkoord;

    constructor (
    	//address clientaddress,
    	//address verzekeraaraddress,
    	//address zorgverleneraddress,
    	//string[] parCodes,
    	uint[] parPrijzen
    	//string parDatumdeclaratie
	) public {
        //stakeholders = Stakeholders({
        //    client:clientaddress,
        //    verzekeraar: verzekeraaraddress,
        //    zorgverlener: zorgverleneraddress
        //});
        //codes = parCodes;
        prijzen = parPrijzen;
        //datumdeclaratie = parDatumdeclaratie;
    }
}
