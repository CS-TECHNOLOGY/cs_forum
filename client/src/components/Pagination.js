import Image from 'next/image';
import styled from 'styled-components';

const PaginationSwapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const PageButton = styled.button`
  background-color: #fff;
  border: hidden;
  outline: none;
  cursor: pointer;
  margin: 0 2px;
  width: 36px;
  height: 36px;
`;

const Pagination = ({ now = 1, amount, step = 10, selectPage, back, next }) => {
  const renderPagination = Array.from(
    { length: amount / step },
    (_, i) => i + 1
  );

  return (
    <PaginationSwapper>
      {now !== 1 && (
        <PageButton onClick={back}>
          <Image
            alt="previous"
            src="/icons/previous.svg"
            width={16}
            height={16}
          />
        </PageButton>
      )}

      {renderPagination.map((page) => (
        <PageButton onClick={() => selectPage(page)} key={page}>
          {page}
        </PageButton>
      ))}
      {now !== renderPagination.slice(-1)[0] && (
        <PageButton onClick={next}>
          <Image alt="previous" src="/icons/next.svg" width={16} height={16} />
        </PageButton>
      )}
    </PaginationSwapper>
  );
};

export default Pagination;
