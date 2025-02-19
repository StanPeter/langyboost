import { logtail } from './logtail'; // Import the Logtail instance

export async function logError(error: Error, context?: object) {
    await logtail.error(error.message, {
        stack: error.stack,
        timestamp: new Date().toISOString(),
        ...context, // Optional extra details
    });

    logtail.flush();
}

export async function logErrorFromClient(error: Error) {
    await fetch('/api/log-error', {
        method: 'POST',
        body: JSON.stringify({ message: error.message, stack: error.stack }),
        headers: { 'Content-Type': 'application/json' },
    });
}
