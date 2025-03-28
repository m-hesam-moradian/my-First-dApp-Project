# Full Stack Ethereum Data Storage dApp

<div align='center' >
 <img width='100%' src='https://github.com/m-hesam-moradian/my-First-dApp-Project/blob/main/Screenshot%202025-03-28%20185922.png?raw=true'>
</div>
A complete decentralized application (dApp) that demonstrates data storage and retrieval on the Ethereum blockchain with a modern web interface.

## Overview

This project is a full-stack dApp that combines:

- Solidity smart contract for blockchain data storage
- Modern web front-end with vanilla JavaScript
- Viem for Ethereum interactions
- Stylish CSS with gradient design

## Features

- Connect to MetaMask wallet
- Store string data on the Ethereum blockchain
- Retrieve data from the blockchain
- Responsive and modern UI design
- Real-time blockchain interactions

## Technical Stack

- **Smart Contract**: Solidity ^0.8.19
- **Blockchain**: Ethereum (Sepolia Network)
- **Front-end**: HTML, CSS, JavaScript
- **Web3 Library**: Viem
- **Wallet Connection**: MetaMask

## Smart Contract

The `SetAndGet` contract provides:

- Data storage functionality
- Public getter and setter methods
- Deployed on Sepolia testnet

## Front-end Components

### UI Features

- Clean and modern interface
- Responsive design
- Interactive buttons for blockchain interactions
- Real-time data display
- MetaMask integration

### File Structure

```
first-dApp/
├── dataStorage.sol    # Smart contract
├── index.html        # Main HTML file
├── app.js           # JavaScript logic
├── styles.css       # Styling
└── README.md        # Documentation
```

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/first-dApp.git
cd first-dApp
```

2. Install MetaMask:

- Install the MetaMask browser extension
- Create or import a wallet
- Connect to Sepolia testnet
- Get some test ETH from a Sepolia faucet

3. Run the application:

- Open index.html in a web browser
- Connect your MetaMask wallet
- Start interacting with the blockchain!

## Usage

1. **Connect Wallet**:

   - The dApp will automatically prompt for wallet connection

2. **Store Data**:

   - Enter text in the input field
   - Click "Set Data"
   - Confirm the transaction in MetaMask

3. **Retrieve Data**:
   - Click "Get Data"
   - The stored data will display on screen

## Contract Address

The smart contract is deployed at:
`0x0DA6452d96628aECBb096784Acd2db9dECa3D15d` (Sepolia Network)

## Security Features

- Secure wallet connection
- Modern Solidity version
- Clean contract architecture
- Protected contract functions

## Development

### Prerequisites

- MetaMask wallet
- Modern web browser
- Node.js (for development)
- Basic knowledge of Ethereum and Web3

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch
3. Submit a pull request
