import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link'

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.svg" />
        <title>CS Forum</title>
      </Head>
      <main>
        <header>
          <Link href="/" >
            <Image alt="logo cs-tech" src="/logo.jpg" width={180} height={60} />
          </Link>
        </header>

        <article className="container">
          {children}
        </article>

        <footer></footer>
      </main>
    </div>
  );
};

export default Layout;
