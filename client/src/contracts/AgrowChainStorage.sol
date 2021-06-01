pragma solidity ^0.5.0;

import "./AgrowChainStorageOwnable.sol";

contract AgrowChainStorage is AgrowChainStorageOwnable {
    
    address public lastAccess;
    constructor() public {
        authorizedCaller[msg.sender] = 1;
        emit AuthorizedCaller(msg.sender);
    }
    
    /* Events */
    event AuthorizedCaller(address caller);
    event sBasicDetails(address batchNo);
    event gBasicDetails(string registrationNo,string farmerName,string manufacturerName,string distributorName,string retailerName);
    event nextaction(string tmpData);
    event farmerdata(string farmerID,string farmerName,string farmLocation,string cropType,string quantity,string date);
    event manufacturerdata(string manufacturerID,string manufacturerName,string factoryLocation,string cropType,string quantity,string date);
    event distributordata(string distributorID,string distributorName,string cropType,string quantity,string date);
    event retailerdata(string retailerID,string retailerName,string storeLocation,string cropType, string quantity,string date);
    
    
    /* Modifiers */
    
    modifier onlyAuthCaller(){
        lastAccess = msg.sender;
        require(authorizedCaller[msg.sender] == 1);
        _;
    }
    
    
    /* Caller Mapping */
    mapping(address => uint8) authorizedCaller;
    
    /* authorize caller */
    function authorizeCaller(address _caller) public onlyOwner returns(bool) 
    {
        authorizedCaller[_caller] = 1;
        emit AuthorizedCaller(_caller);
        return true;
    }
    
    
    
    /* Process Related */
     struct basicDetails {
        string registrationNo;
        string farmerName;
        string manufacturerName;
        string distributorName;
        string retailerName;
        
    }
    
    struct farmer{
        string farmerID;
        string farmerName;
        string farmLocation;
        string cropType;
        string quantity;
        string date;
    }

    struct manufacturer{
        string manufacturerID;
        string manufacturerName;
        string factoryLocation;
        string cropType;
        string quantity;
        string date;

    }

    struct distributor{
        string distributorID;
        string distributorName;
        string cropType;
        string quantity;
        string date;

    }


    struct retailer{
        string retailerID;
        string retailerName;
        string storeLocation;
        string cropType;
        string quantity;
        string date;

    }
    
    
    
    mapping (address => basicDetails) batchBasicDetails;    
    mapping (address => farmer) batchFarmer;
    mapping (address => manufacturer) batchManufacturer;
    mapping (address => distributor) batchDistributor;
    mapping (address => retailer) batchRetailer;
    mapping (address => string) nextAction;
    
    /*Initialize struct pointer*/
    basicDetails basicDetailsData;
    farmer farmerData;
    manufacturer manufacturerData;
    distributor distributorData;
    retailer retailerData;
    
    
    /* Get Next Action  */    
    function getNextAction(address _batchNo) public onlyAuthCaller returns(string memory)
    {
        string memory tmpData = nextAction[_batchNo];
        emit nextaction(tmpData);
        return tmpData;
            
        //return nextAction[_batchNo];
    }
       
    
    
 /*get batch basicDetails*/
    function getBasicDetails(address _batchNo) public  onlyAuthCaller  returns(string memory registrationNo,
                            string memory farmerName,
                            string memory manufacturerName,
                            string memory distributorName,
                            string memory retailerName) {
        
        basicDetails memory tmpData = batchBasicDetails[_batchNo];
        

        emit gBasicDetails(
                tmpData.registrationNo,
                tmpData.farmerName,
                tmpData.manufacturerName,
                tmpData.distributorName,
                tmpData.retailerName);

        return (tmpData.registrationNo,
                tmpData.farmerName,
                tmpData.manufacturerName,
                tmpData.distributorName,
                tmpData.retailerName);
    }
    
    /*set batch basicDetails*/
    function setBasicDetails(string memory _registrationNo,
                            string memory _farmerName,
                            string memory _manufacturerName,
                            string memory _distributorName,
                            string memory _retailerName
                             
                            ) public onlyAuthCaller returns(address) {
        
        uint tmpData = uint(keccak256(abi.encodePacked(msg.sender, now)));
        address batchNo = address(tmpData);
        
        basicDetailsData.registrationNo = _registrationNo;
        basicDetailsData.farmerName = _farmerName;
        basicDetailsData.manufacturerName = _manufacturerName;
        basicDetailsData.distributorName = _distributorName;
        basicDetailsData.retailerName = _retailerName;
        
        
        
        batchBasicDetails[batchNo] = basicDetailsData;
        
        nextAction[batchNo] = 'FARMER' ;   
        
        
        emit sBasicDetails(batchNo);
        
        return batchNo;
    }
    
    
     /*set farmer data*/
    function setFarmerData(address batchNo,string memory _farmerID,string memory _farmerName,string memory _farmLocation, string memory _cropType, string memory _quantity, string memory _date) public onlyAuthCaller returns(bool){
        
        farmerData.farmerID = _farmerID;
        farmerData.farmerName = _farmerName;
        farmerData.farmLocation = _farmLocation;
        farmerData.cropType = _cropType;
        farmerData.quantity = _quantity;
        farmerData.date = _date;
        
        batchFarmer[batchNo] = farmerData;
        
        nextAction[batchNo] = 'MANUFACTURER'; 
        
        return true;
    }


    /*get farmer data*/
    function getFarmerData(address batchNo) public onlyAuthCaller  returns (string memory farmerID,string memory farmerName,string memory farmLocation,string memory cropType, string memory quantity, string memory date){
        
        farmer memory tmpData = batchFarmer[batchNo];

        emit farmerdata(tmpData.farmerID,tmpData.farmerName,tmpData.farmLocation, tmpData.cropType, tmpData.quantity, tmpData.date);
        return (tmpData.farmerID,tmpData.farmerName,tmpData.farmLocation, tmpData.cropType, tmpData.quantity, tmpData.date);
    }


    /*set Manufacturer data*/
    function setManufacturerData(address batchNo,string memory _manufacturerID,string memory _manufacturerName,string memory _factoryLocation,string memory _cropType, string memory _quantity, string memory _date) public onlyAuthCaller returns(bool){
        
        manufacturerData.manufacturerID = _manufacturerID;
        manufacturerData.manufacturerName = _manufacturerName;
        manufacturerData.factoryLocation = _factoryLocation;
        manufacturerData.cropType = _cropType;
        manufacturerData.quantity = _quantity;
        manufacturerData.date = _date;

        batchManufacturer[batchNo] = manufacturerData;
        
        nextAction[batchNo] = 'DISTRIBUTOR'; 
        

        return true;
    }


    /*get manufacturer data*/
    function getManufacturerData(address batchNo) public onlyAuthCaller  returns (string memory manufacturerID,string memory manufacturerName,string memory factoryLocation, string memory cropType, string memory quantity, string memory date){
        
        manufacturer memory tmpData = batchManufacturer[batchNo];

        emit manufacturerdata(tmpData.manufacturerID,tmpData.manufacturerName,tmpData.factoryLocation,tmpData.cropType,tmpData.quantity,tmpData.date);
        return (tmpData.manufacturerID,tmpData.manufacturerName,tmpData.factoryLocation,tmpData.cropType, tmpData.quantity,tmpData.date);
    }


    /*set distributor data*/
    function setDistributorData(address batchNo,string memory _distributorID,string memory _distributorName,string memory _cropType, string memory _quantity, string memory _date) public onlyAuthCaller returns(bool){
        
        distributorData.distributorID = _distributorID;
        distributorData.distributorName = _distributorName;
        distributorData.cropType = _cropType;
        distributorData.quantity = _quantity;
        distributorData.date = _date;

        batchDistributor[batchNo] = distributorData;
        
        nextAction[batchNo] = 'RETAILER'; 
        
        return true;
    }


    /*get distributor data*/
    function getDistributorData(address batchNo) public onlyAuthCaller  returns (string memory distributorID,string memory distributorName, string memory cropType, string memory quantity, string memory date){
        
        distributor memory tmpData = batchDistributor[batchNo];

        emit distributordata(tmpData.distributorID,tmpData.distributorName,tmpData.cropType,tmpData.quantity,tmpData.date);
        return (tmpData.distributorID,tmpData.distributorName,tmpData.cropType,tmpData.quantity,tmpData.date);
    }

    /*set retailer data*/
    function setRetailerData(address batchNo,string memory _retailerID,string memory _retailerName,string memory _storeLocation,string memory _cropType, string memory _quantity,string memory _date) public onlyAuthCaller returns(bool){
        
        retailerData.retailerID = _retailerID;
        retailerData.retailerName = _retailerName;
        retailerData.storeLocation =_storeLocation;
        retailerData.cropType = _cropType;
        retailerData.quantity = _quantity;
        retailerData.date = _date;        
        batchRetailer[batchNo] = retailerData;
        
        nextAction[batchNo] = 'CUSTOMER'; 
        
        return true;
    }


    /*get retailer data*/
    function getRetailerData(address batchNo) public onlyAuthCaller  returns (string memory retailerID,string memory retailerName,string memory storeLocation, string memory cropType, string memory quantity, string memory date){
        
        retailer memory tmpData = batchRetailer[batchNo];

        emit retailerdata(tmpData.retailerID,tmpData.retailerName,tmpData.storeLocation,tmpData.cropType,tmpData.quantity,tmpData.date);

        return (tmpData.retailerID,tmpData.retailerName,tmpData.storeLocation,tmpData.cropType,tmpData.quantity,tmpData.date);
    }
    
   
  
}    
