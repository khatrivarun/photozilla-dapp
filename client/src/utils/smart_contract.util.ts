import { ethers } from 'ethers';
import { Image as ImageModel } from '../models/image.model';
import Image from './../artifacts/contracts/Image.sol/Image.json';

const imageAddress = '0xA7f87CD4b3AFc002aa8e6ca71a6E66A53Df50451';

export const requestAccount = async () => {
  if (typeof window.ethereum !== 'undefined') {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }
};

export const fetchImages = async (): Promise<ImageModel[]> => {
  if (typeof window.ethereum !== 'undefined') {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(imageAddress, Image.abi, provider);
    const data = await contract.getImages();

    return data.map((i: any) => new ImageModel(i.owner, i.imgHash));
  } else {
    throw new Error('Not on Blockchain Network.');
  }
};

export const addImage = async (imageHash: string): Promise<void> => {
  if (typeof window.ethereum !== 'undefined') {
    await requestAccount();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(imageAddress, Image.abi, signer);

    const transaction = await contract.addImage(imageHash);
    await transaction.wait();
  } else {
    throw new Error('Not on Blockchain Network.');
  }
};
