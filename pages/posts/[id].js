import { useEffect, useState, useContext } from "react";
import Head from "next/head";
// Components
import Page from "../../components/UI/General/Page";
import Card from "../../components/Post/Core/Card";
// Contexts

const Post = ({ post }) => {
  console.log(post);

  const createDescription = (description) => {};

  return (
    <Page top={100}>
      <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <Head>
          <title>{post._id}</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            property="og:title"
            content={post.author.firstname + " " + post.author.lastname}
            key="title"
          />
          <meta property="og:image" content={post.author.photo} key="image" />
          <meta
            property="og:description"
            content={post.text}
            key="description"
          />
        </Head>

        <Card post={post} displayLink={false} />
      </div>
    </Page>
  );
};

// export async function getStaticPaths() {
//   let res = await fetch("https://pivotinfo.herokuapp.com/api/users/all");
//   res = await res.json();
//   const users = res.data;

//   const paths = users.map((user) => ({
//     params: { id: user._id },
//   }));

//   return { paths: paths, fallback: false };
// }

// This also gets called at build time
export async function getServerSideProps({ params }) {
  let res = await fetch(
    `https://pivotinfo.herokuapp.com/api/posts/${params.id}`
  );
  res = await res.json();
  const post = res.data;

  // Pass post data to the page via props
  return { props: { post } };
}

export default Post;
