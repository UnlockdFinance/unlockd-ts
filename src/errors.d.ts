import { AxiosError } from 'axios';
export declare class InvalidAddressFormat extends Error {
}
export declare class InvalidActionRequestParams extends Error {
}
export declare class InvalidSellNowRequestParams extends Error {
}
export declare class InvalidMarketRequestParams extends Error {
}
export declare class InvalidPricesRequestParams extends Error {
}
export declare class InvalidSignatureException extends Error {
}
export declare class UnexpectedException extends Error {
}
export declare class UnauthorizedException extends Error {
}
export declare const mapAxiosException: (error: AxiosError) => never;
