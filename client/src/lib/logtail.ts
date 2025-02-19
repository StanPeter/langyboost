import { Logtail } from '@logtail/node';

console.log('LOGTAIL_TOKEN', process.env.LOGTAIL_TOKEN);

if (!process.env.LOGTAIL_TOKEN) {
    throw new Error('Logtail source token is missing!');
}

export const logtail = new Logtail(process.env.LOGTAIL_TOKEN, {
    endpoint: 'https://s1209950.eu-nbg-2.betterstackdata.com',
});
