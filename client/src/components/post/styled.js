import styled from 'styled-components';
export const EachPostCard = styled.div`
  margin: 1em 0 2em;
  padding: 0.5em 1em 2em;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 0 1px rgba(8, 9, 10, 0.1);
  cursor: pointer;

  a {
    margin: 0;
  }

  i {
    font-size: 12px;
  }

  .post_arthur {
    display: flex;
    align-items: center;

    img {
      border-radius: 50%;
      margin-right: 1em;
    }
  }

  .post_info {
    margin-top: 16px;
    .post_title {
      font-size: 120%;
      font-weight: 700;
    }

    i {
      margin-right: 1em;
    }

    .react_bar_icons {
      display: flex;
      flex-direction: row;
      align-items: center;
      line-height: 1;

      div {
        margin-right: 2em;
      }
    }
  }
`;
