export type ApiResponse<T> = {
    success: boolean;
    statusCode: number;
    data?: T;
    error?: string;
};

export type ApiRequest<T> = {
    data: T;
};