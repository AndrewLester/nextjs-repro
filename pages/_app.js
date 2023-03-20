import '../styles/globals.css';
import App from 'next/app';

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

MyApp.getInitialProps = async (ctx) => {
    await fetch(`${process.env.BASE_URL}/api/hello`);

    return App.getInitialProps(ctx);
};

export default MyApp;
