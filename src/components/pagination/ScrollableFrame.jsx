import { PaginationControlled } from "./component/Paginate";

const ScrollableFrame = ({
  children,
  loading,
  limit,
  count,
  total,
  setLimit,
  setPage,
  hidePagination,
  page,
}) => {
  return (
    <div className="space-y-4 pb-4">
      <div className={"md:h-[calc(100vh-250px)] overflow-y-auto"}>
        {children}
      </div>
      <div className="text-white">
        {!hidePagination && (
          <PaginationControlled
            loading={loading}
            setPage={setPage}
            page={page}
            setLimit={setLimit}
            limit={limit}
            total={total}
            count={count}
          />
        )}
      </div>
    </div>
  );
};

export default ScrollableFrame;
