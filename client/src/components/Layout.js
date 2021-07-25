import Head from "next/head";

const Layout = ({children}) => {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CS Forum</title>
      </Head>
      <main>
      {children}
      </main>

    </div>
  );
};

export default Layout;
