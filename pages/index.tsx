// pages/index.tsx
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Vercel App</title>
      </Head>
      <h1>Welcome to my Vercel App!</h1>
      <p>This content is rendered as HTML.</p>
    </div>
  );
}

// If you need data fetched at build time (SSG):
// export async function getStaticProps() {
//   const data = await fetchData(); // Replace with your data fetching logic
//   return {
//     props: { data },
//   };
// }
