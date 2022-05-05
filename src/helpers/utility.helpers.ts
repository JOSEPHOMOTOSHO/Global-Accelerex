import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Response } from "src/interfaces/response.interface";

@Injectable()
export class Helpers {

    /**
     * Sends default JSON resonse to client
     * @param {*} res
     * @param {*} content
     * @param {*} message
     */
    static sendJsonResponse (content: any, message: string): Response {
        const data = {
            success: true,
            message,
            data: content
        };
        return data;
    }

    /**
     * Sends error resonse to client
     * @param {*} content
     * @param {*} message
     * @param {*} status
     */
    static sendErrorResponse (content: any, message: string, status: string): Response {
        const data = {
            success: false,
            message,
            data: content
        }

        throw new HttpException(data, HttpStatus[status])
    }
}