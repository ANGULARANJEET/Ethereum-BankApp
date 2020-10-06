// Source code to interact with smart contract

// web3 provider with fallback for old version
window.addEventListener('load', async () => {
    // New web3 provider
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            // ask user for permission
            await ethereum.enable();
            // user approved permission
            console.log("user approved permission");
        } catch (error) {
            // user rejected permission
            console.log('user rejected permission');
        }
    }
    // Od web3 provider
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        // no need to ask for permission
    }
    // No web3 provider
    else {
        console.log('No web3 provider detected');
    }
  });
  console.log (window.web3.currentProvider)

  //Contract Address and ABI are settled after contract deploy
  $(document).ready(function() {
    const contractAddress = '0x1687Da0915435868D0e14f33598Bfc7AB8AA05F4';
    const abi = [
        // {
        //   "inputs": [],
        //   "payable": false,
        //   "stateMutability": "nonpayable",
        //   "type": "constructor"
        // },
        {
        "constant": true,
        "inputs": [],
        "name": "getBalance",
        "outputs": [
            {
            "name": "",
            "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
        },
        {
        "constant": false,
        "inputs": [
            {
            "name": "_amount",
            "type": "uint256"
            }
        ],
        "name": "withdraw",
        "outputs": [
            {
            "name": "",
            "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "constant": false,
        "inputs": [
            {
            "name": "_amount",
            "type": "uint256"
            }
        ],
        "name": "deposit",
        "outputs": [
            {
            "name": "",
            "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
        }
    ];
    const parsedAbi = JSON.parse(JSON.stringify(abi));
    console.log(contractAddress);
    console.log(parsedAbi);
    const contract = new web3.eth.Contract(parsedAbi, contractAddress);
    console.log(contract);
    console.log(web3.version);

    /** Get Balance */
    var getbalance = () => {
        contract.methods.getBalance().call().then(function(balance){
            console.log("Balance: ", balance);
            $('#balance').html(balance);
        }).catch(function(err){
            console.log(err);
        })
    }

    getbalance();

    /** Deposit Money */
    $('#deposit').click(function(){
        let depositAmount = 0;

        depositAmount = parseInt($('#depositAmt').val());
        console.log("Deposit Amount: ", depositAmount);
         web3.eth.getAccounts().then(async function(accounts){
             const account = accounts[0];
             console.log(account);
             var result = await contract.methods.deposit(depositAmount).send({from: account});
             console.log(result);
             getbalance();
            return result;
         }).then(function(tx){
             console.log(tx);
         }).catch(function(tx){
             console.log(tx);
         })
     })

     /** Withdraw Money */
     $('#withdraw').click(function(){
        let withdrawalAmount = 0;

        withdrawalAmount = parseInt($('#withdrawAmt').val());
        console.log("Withdrawal Amount: ", withdrawalAmount);
        web3.eth.getAccounts().then(async function(accounts){
            const account = accounts[0];
            console.log(account);
            var result = await contract.methods.withdraw(withdrawalAmount).send({from: account});
            getbalance();
            return result;
        }).then(function(tx){
            console.log(tx);
        }).catch(function(tx){
            console.log(tx);
        })
     })

  });