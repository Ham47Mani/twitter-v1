import React, { Fragment } from 'react';
import Image from 'next/image';
import "./page.scss";
import PageHeader from '@/components/pageHeader/PageHeader';
import TweetBox from '@/components/tweetBox/TweetBox';
import Link from 'next/link';
import Tweets from '@/components/tweets/Tweets';
import Toggler from '@/components/toggler/Toggler';
import Spinner from '@/components/spinner/Spinner';

type Props = {}

const Home = (props: Props) => {
  return (
    <Fragment>
      {/* ====== Header ====== */}
      <PageHeader pageName="Home"/>

      {/* ====== Tweet Box ====== */}
      <TweetBox />

      {/* ====== Show Tweet ====== */}
      <Link 
        className='text-center block py-4 bg-white dark:bg-dim-900 border border-gray-200 dark:border-dim-200 cursor-pointer text-blue-400 text-sm capitalize
        transition duration-700 hover:tracking-wide'
        href="#"
      >
        Show 9 Tweet
      </Link>

      {/* ====== Tweets ====== */}
      <Tweets />

      {/* ====== Toggler ====== */}
      <Toggler />

      {/* ====== Spinner ====== */}
      <Spinner />
    </Fragment>
  )
}

export default Home;