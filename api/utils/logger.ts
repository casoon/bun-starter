// utils/logger.ts

export function logRequest(method: string, url: string) {
    console.log(`[${new Date().toISOString()}] ${method} ${url}`);
}

export function logError(error: Error) {
    console.error(`[${new Date().toISOString()}] ERROR: ${error.message}`);
}

export function logInfo(message: string) {
    console.info(`[${new Date().toISOString()}] INFO: ${message}`);
}
