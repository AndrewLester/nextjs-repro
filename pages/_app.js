import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async () => {
  const { test } = await fetch(`${process.env.BASE_URL}/api/hello`).then(
    (res) => res.json()
  );

  console.log('I need to use this...', test);

  return {};
};

export default MyApp;
