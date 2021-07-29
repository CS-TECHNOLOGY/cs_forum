import Image from 'next/image';
import moment from 'moment';

import styles from '../styles/Home.module.scss';
import Layout from '../components/Layout';


export default function Home() {
  return (
    <Layout>
      {/* <div> */}
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div className={styles.each_post_card} key={item}>
          <div className={styles.post_arthur}>
            <img
              src="https://source.unsplash.com/random"
              width={48}
              height={48}
            />
            <div>
              <a>Nguyen Duc Huynh </a>
              <i>{moment().calendar()}</i>
            </div>
          </div>

          <div className={styles.post_info}>
            <a className={styles.post_title}>
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
            <div className={styles.react_bar_icons}>
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
        </div>
      ))}
      {/* </div> */}
    </Layout>
  );
}
