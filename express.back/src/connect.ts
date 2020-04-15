import {Connection, createConnection} from "typeorm";

export function connectDatabase(
    retryInterval = 1000,
    maxRetries = 10,
): Promise<Connection> {
    return createConnection().catch((error: Error) => {
        if (maxRetries === 0) {
            throw error
        } else {
            return new Promise(resolve => {
                setTimeout(() => resolve(), retryInterval)
            }).then(() => connectDatabase(retryInterval, maxRetries - 1))
        }
    })
}