# BankApplication - Hosted on Ethereum Private Blockchain network

Bank Application made using:

| Node JS | Solidity | Ganache | Truffle | 
|---------|----------|---------|---------|


## To run this application locally: 

1. Git clone the repository.
2. Navigate to the folder of this application.
3. Using vscode, go to 'File' -> 'Open Folder' -> Select the folder where the source code resides
4. Update the the following variables present under /src/js/app.js file
       - const contractAddress [copy and paste the adress where this smart contract is deployed. You can find this info from the Ganache UI]
       - const abi [you can fnd the value of abi from the file "Bank.json" present under ./build directory.]
5. Make sure to setup metamask chrome extension and connect it with your Ganache network.
6. To run the sample, execute the server.js file, present under the /src directory. Use the following command:
        `node server.js`
