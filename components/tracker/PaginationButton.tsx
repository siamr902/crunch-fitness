import { useRouter } from "next/router";
import React from "react";

type Props = {
  page: number;
  setPage: (v: number) => void;
  pageNumber: number;
};

const PaginationButton = ({ page, setPage, pageNumber }: Props) => {
  const { push } = useRouter();
  const handlePage = () => {
    setPage(pageNumber);
    push("/tracker");
  };

  return (
    <button
      onClick={() => handlePage()}
      className={`text-lg text-center p-3 w-14 h-14 rounded-xl font-banner font-semibold shadow-md bg-gradient-to-tl from-pink-500 to-orange-500 text-white ${
        pageNumber === page && "bg-opacity-80"
      }`}
      disabled={page === pageNumber}
    >
      {pageNumber}
    </button>
  );
};

export default PaginationButton;
