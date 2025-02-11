import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../../server/src/trpc/index';

const trpc = createTRPCProxyClient<AppRouter>({
    links: [
        // () =>
        //     ({ op, next }) => {
        //         console.log('->', op.type, op.path, op.input);

        //         return next(op).pipe(
        //             tap({
        //                 next(result) {
        //                     console.log('<-', op.type, op.path, op.input, ':', result);
        //                 },
        //             }),
        //         );
        //     },
        httpBatchLink({
            url: 'http://localhost:4000/trpc',
        }),
    ],
});

export default trpc;
