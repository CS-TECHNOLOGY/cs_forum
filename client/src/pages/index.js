import { useRouter } from 'next/router';

import Layout from '../components/Layout';
import { getService } from '../common/callApi';
import PostCard from '../components/post/PostCard';

export default function Home({ posts }) {
  const router = useRouter();
  return (
    <Layout>
      {posts.map((item) => (
        <PostCard item={item}  key={item._id} />
      ))}
    </Layout>
  );
}

export async function getStaticProps(context) {

  const posts = await getService(`/post/newFeed/1`);
  if (!posts) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      posts,
    },
  };
}
