import { createWalletClient, custom, getContract } from "https://esm.sh/viem";
import { sepolia } from "https://esm.sh/viem/chains";

// Initialize global variables
window.getDataStorage;
window.setDataStorage;

// Create wallet client
const walletClient = createWalletClient({
  chain: sepolia,
  transport: custom(window.ethereum),
});

// Connect wallet and get address
const connect = async () => {
  const accounts = await walletClient.requestAddresses();
  return accounts[0];
};

// Contract configuration
const dataStorageContractAddress = "0x0DA6452d96628aECBb096784Acd2db9dECa3D15d";
const dataStorageContractABI = [
  {
    inputs: [{ internalType: "string", name: "_dataStorage", type: "string" }],
    name: "setDataStorage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getDataStorage",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
];

// Initialize contract
const initContract = async () => {
  const address = await connect();
  const contract = getContract({
    address: dataStorageContractAddress,
    abi: dataStorageContractABI,
    client: walletClient,
  });

  // Define global functions
  window.getDataStorage = async function () {
    const dataStorage = await contract.read.getDataStorage();
    document.getElementById(
      "showDataStorage"
    ).innerText = `Your Data: ${dataStorage}`;
  };

  window.setDataStorage = async function () {
    const dataStorage = document.getElementById("dataStorage").value;
    await contract.write.setDataStorage([dataStorage], {
      account: address,
    });
  };
};

// Initialize when document is loaded
document.addEventListener("DOMContentLoaded", initContract);
