import '../styles/globals.css';
import App from 'next/app';

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

MyApp.getInitialProps = async (ctx) => {
    const { test } = await fetch(`${process.env.BASE_URL}/api/hello`).then(
        (res) => res.json()
    );

    console.log("I'll use this...", test);

    return App.getInitialProps(ctx);
};

export default MyApp;
