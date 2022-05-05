export interface Response {
    [x: string]: any;
    success: boolean,
    message: string,
    status?: any,
    data: Record<string, unknown>
}