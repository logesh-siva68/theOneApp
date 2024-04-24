import { RequestHandler } from "express";

export interface Route {
    path: string;
    handler: RequestHandler;
}