import Image from 'next/image';
import moment from 'moment';
import { EachPostCard } from './styled';

const PostCard = ({ item }) => {
  return (
    <EachPostCard>
      <div className="post_arthur">
        <img
          src={item.avatar_arthur || 'https://source.unsplash.com/random'}
          width={48}
          height={48}
        />
        <div>
          <a>{item.name_arthur}</a>
          <br />
          <i>{moment(item.createdAt).calendar()}</i>
        </div>
      </div>

      <div className="post_info">
        <a className="post_title">{item.title}</a>
        <div>
          <i>#javascript</i>
          <i>#javascript</i>
          <i>#javascript</i>
        </div>
        <p>{item.content}</p>
        <div className="react_bar_icons">
          <div>
            <Image src="/icons/like.svg" alt="like" height={16} width={16} />
            {item.likes.length}
          </div>
          <div>
            <Image
              src="/icons/comment.svg"
              alt="comment"
              height={16}
              width={16}
            />
            {item.comments.length}
          </div>
          <div>
            <Image src="/icons/share.svg" alt="share" height={16} width={16} />
            <Image src="/icons/mark.svg" alt="share" height={16} width={16} />
          </div>
        </div>
      </div>
    </EachPostCard>
  );
};

export default PostCard;
