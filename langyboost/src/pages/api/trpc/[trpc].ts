import { createNextApiHandler } from '@trpc/server/adapters/next';
import { appRouter } from 'trpc';
import { createContext } from 'trpc/trpcContext';

export default createNextApiHandler({
    router: appRouter,
    createContext,
});
