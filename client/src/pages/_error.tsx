import { NextPageContext } from 'next';

export default function ErrorPage({ statusCode }: { statusCode?: number }) {
    return <h1>{statusCode ? `Error ${statusCode}` : 'An error occurred'}</h1>;
}

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
    const statusCode = res?.statusCode || err?.statusCode || 500;
    return { statusCode };
};
