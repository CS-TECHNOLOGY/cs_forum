import Image from 'next/image';
import moment from 'moment';

// import styles from '../styles/Home.module.scss';
import Layout from '../components/Layout';
import { EachPostCard } from '../styles/Home.styled';

export default function Home() {
  return (
    <Layout>
      {/* <div> */}
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <EachPostCard key={item}>
          <div className="post_arthur">
            <img
              src="https://source.unsplash.com/random"
              width={48}
              height={48}
            />
            <div>
              <a>Nguyen Duc Huynh </a>
              <br />
              <i>{moment().calendar()}</i>
            </div>
          </div>

          <div className="post_info">
            <a className="post_title">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea illo
              et atque voluptatibu
            </a>
            <div>
              <i>#javascript</i>
              <i>#javascript</i>
              <i>#javascript</i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae cum
              hic iste velit facere, eos, ullam architecto laudantium deleniti
              amet dolore incidunt in porro numquam ad praesentium nemo. Fugit,
              eos.
            </p>
            <div className="react_bar_icons">
              <div>
                <Image
                  src="/icons/like.svg"
                  alt="like"
                  height={16}
                  width={16}
                />
                12
              </div>
              <div>
                <Image
                  src="/icons/comment.svg"
                  alt="comment"
                  height={16}
                  width={16}
                />
                3
              </div>
              <div>
                <Image src="/icons/share.svg" height={16} width={16} />
                <Image src="/icons/mark.svg" height={16} width={16} />
              </div>
            </div>
          </div>
        </EachPostCard>
      ))}
      {/* </div> */}
    </Layout>
  );
}

// export async function getStaticProps(context) {
//   const res = await fetch(`https://.../data`)
//   const data = await res.json()

//   if (!data) {
//     return {
//       notFound: true,
//     }
//   }

//   return {
//     props: { data }, // will be passed to the page component as props
//   }
// }
