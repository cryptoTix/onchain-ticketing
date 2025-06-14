export interface Seller {
    id: string;
    name: string;
    location: string;
    acceptedAssets : Asset[];
}

export interface Asset {
    name : string;
    symbol : string;
    chainId : number;
    address : `0x{string}`;
}
