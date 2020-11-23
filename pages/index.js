import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { signIn, signOut, useSession } from 'next-auth/client';

export default function Home() {
  const [session, loading] = useSession();

  return (
    <>
      <Head>
        <title>Auth Demo</title>
      </Head>
      {loading ? (
        <p>Loading..</p>
      ) : (
        <nav>
          {!session && (
            <>
              Not sign in <br />
              <button onClick={() => signIn('github')}>Github Connect</button>
            </>
          )}
          {session && (
            <>
              Signed in as {session.user.name} <br />
              {session.user.image && <img src={session.user.image} />}
              <button onClick={signOut}>Sign Out</button>
            </>
          )}
        </nav>
      )}
    </>
  );
}
