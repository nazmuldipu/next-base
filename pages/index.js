import Head from 'next/head'
import AppLayout from '../components/layouts/appLayout';

const Home = () => {
  return (
    <AppLayout>
      <Head>
        <title>Nextjs | Start your coding from here</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-white dark:bg-gray-800">
          <div className="text-start py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
            <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
              <span className="block">
                Next.js ?
              </span>
              <span className="block text-indigo-500">
                Start your coding from here.
              </span>
            </h2>
            <p className="py-10">
              This is startup project for next.js. Developer can start build project from here. This project includes packages with Tailwindcss, Redux, axios, joi-browser. Moreover, authentication process already included in Redux.
            </p>
            <div className="lg:mt-0 lg:flex-shrink-0">
              <div className="mt-12 inline-flex rounded-md shadow">
                <a href="https://nextjs.org/" target="_blank" className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                  Get started
                </a>
              </div>
            </div>
          </div>
          <img src="logo.svg" className="w-full max-w-1/2 hidden lg:block right-0 top-0" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 bg-white dark:bg-gray-800">
          <div className="px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Tailwindcss</h2>
            <p className="leading-relaxed text-base mb-4">A utility-first CSS framework packed with classes. Rapidly build modern websites without ever leaving your HTML.</p>
            <a href="https://tailwindcss.com/" target="_blank" className="text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Redux</h2>
            <p className="leading-relaxed text-base mb-4">A Predictable State Container for JS Apps. Features includes Predictable, Centralized, Debuggable, Flexible</p>
            <a href="https://redux.js.org/" target="_blank" className="text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Axios</h2>
            <p className="leading-relaxed text-base mb-4">Axios is a simple promise based HTTP client for the browser and node.js. Axios provides a simple to use library in a small package with a very extensible interface.</p>
            <a href="https://axios-http.com/" target="_blank" className="text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">joi-browser</h2>
            <p className="leading-relaxed text-base mb-4">joi object schema validation bundled for the browser (babelified and bundled)</p>
            <a href="https://www.npmjs.com/package/joi-browser" target="_blank" className="text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default Home;
