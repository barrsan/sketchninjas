import { FC, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import ReactPaginate from 'react-paginate';
import { useViewport } from '@/hooks/useSmoothScrollViewport';
import { useCursorFollower } from '@/hooks/useCursorFollower';
import { colors } from '@/constants';

interface IProps {
  targetPathname: string;
  pageCount: number;
  currentPage: number;
  pageRangeDisplayed?: number;
  marginPagesDisplayed?: number;
}

const StyledPaginateWrapper = styled.div`
  padding: 20px 15px 50px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  & ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }

  & ul > li a {
    padding: 10px 26px;
    display: block;
    font-size: 22px;
    font-weight: 600;
    color: ${colors.BLUE};
    cursor: pointer;
  }

  & ul > li.selected a {
    pointer-events: none;
    color: ${colors.MINE_SHAFT};
  }

  & .break a {
    pointer-events: none;
    color: ${colors.MINE_SHAFT};
  }

  & .previous,
  & .next {
    display: none;
    pointer-events: none;
  }
`;

const Pagination: FC<IProps> = ({
  pageCount,
  currentPage,
  targetPathname,
  pageRangeDisplayed = 3,
  marginPagesDisplayed = 1,
}: IProps) => {
  const router = useRouter();
  const { scrollBar } = useViewport();
  const { setCursorSize, setCursorType } = useCursorFollower();
  const paginationRef = useRef<HTMLDivElement>();

  useEffect(() => {
    const handleRouteChange = () => {
      const { pathname } = router;
      if (targetPathname === pathname) {
        scrollBar.scrollTo(0, 0, 500);
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [targetPathname, scrollBar]);

  useEffect(() => {
    let links: NodeListOf<HTMLAnchorElement>;

    const handleMouseMove = () => {
      setCursorType('baseLink');
      setCursorSize(50);
    };
    const handleMouseLeave = () => {
      setCursorSize(10);
      setCursorType('default');
    };

    if (paginationRef && paginationRef.current) {
      links = paginationRef.current.querySelectorAll('a');

      if (links) {
        links.forEach((el) => {
          el.removeEventListener('mousemove', handleMouseMove);
          el.removeEventListener('mouseleave', handleMouseLeave);
          el.addEventListener('mousemove', handleMouseMove);
          el.addEventListener('mouseleave', handleMouseLeave);
        });
      }
    }

    return () => {
      if (links) {
        links.forEach((el) => {
          el.removeEventListener('mousemove', handleMouseMove);
          el.removeEventListener('mouseleave', handleMouseLeave);
        });
      }
    };
  }, [paginationRef, currentPage]);

  const handlePageChange = (data: { selected: number }) => {
    const { pathname, query } = router;
    query.page = (data.selected + 1).toString();

    router.push({
      pathname: targetPathname === pathname ? pathname : targetPathname,
      query,
    });
  };

  return (
    <>
      {pageCount <= 1 ? null : (
        <StyledPaginateWrapper ref={paginationRef}>
          <ReactPaginate
            initialPage={currentPage - 1}
            pageCount={pageCount}
            breakLabel="..."
            pageRangeDisplayed={pageRangeDisplayed}
            marginPagesDisplayed={marginPagesDisplayed}
            onPageChange={handlePageChange}
            disableInitialCallback
          />
        </StyledPaginateWrapper>
      )}
    </>
  );
};

export default Pagination;
