export type Network = number;
export type Currency = string;

export type SupportedCurrency = {
    tokens : Record<Network, Currency[]>
}

export type SellerCurrencyRequestInterface = {
    sellerId : string;
}

export type SellerCurrencyResponseInterface = SupportedCurrency;