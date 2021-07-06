import Head from 'next/head'
import AppLayout from '../components/layouts/appLayout';

const Home = () => {
  return (
      <AppLayout>
        <Head>
          <title>Ship | Online ship ticketing</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>

          <div className="cotainer">
            <h1>Home index</h1>
          </div>
        </div>
      </AppLayout>
  )
}

export default Home;
