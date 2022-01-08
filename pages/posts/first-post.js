
// Delete it


// import Head from "next/head";
// import Link from "next/link";
// import Script from 'next/script'
// import Layout from '../../components/layout'


// const FirstPost = () => {
//   return (
//     <Layout>
//       <Head>
//         <title>First Post</title>
//       </Head>
//       <Script
//         src="https://connect.facebook.net/en_US/sdk.js"
//         strategy="lazyOnload"
//         onLoad={() =>
//           console.log(`script loaded correctly, window.FB has been populated`)
//         }
//       />
//       <h1>First Post</h1>
//       <h2>
//         <Link href="/">
//           <a>Back to home</a>
//         </Link>
//       </h2>
//     </Layout>
//   )
// }

// export default FirstPost;





// Next.js does code splitting automatically, so each page only loads what’s necessary for that page. That means when the homepage is rendered, the code for other pages is not served initially.
// This ensures that the homepage loads quickly even if you have hundreds of pages. 
// Ques: Is this code-splitting not what React.lazyload() do??

// Only loading the code for the page you request also means that pages become isolated. If a certain page throws an error, the rest of the application would still work.

// Furthermore, in a production build of Next.js, whenever Link components appear in the browser’s viewport, Next.js automatically prefetches the code for the linked page in the background. By the time you click the link, the code for the destination page will already be loaded in the background, and the page transition will be near-instant!