'use client';

export default function Pagination({ currentPage = 1, totalPages = 1, onPageChange }) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  // Show max 7 page buttons: [1] ... [4] [5] [6] ... [10]
  const visiblePages = pages.filter((page) => {
    if (page === 1 || page === totalPages) return true;
    if (page >= currentPage - 1 && page <= currentPage + 1) return true;
    return false;
  });

  const handlePageClick = (page) => {
    if (onPageChange && page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <nav className="flex items-center justify-center gap-1 mt-12" aria-label="Pagination">
      {/* Previous Button */}
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
        className="
          w-10 h-10 flex items-center justify-center
          rounded-md border border-border
          text-text-secondary
          hover:bg-surface-hover
          disabled:opacity-30 disabled:cursor-not-allowed
          transition-colors duration-fast
        "
        aria-label="Предыдущая страница"
      >
        ←
      </button>

      {/* Page Numbers */}
      {visiblePages.map((page, index) => {
        const showEllipsis = index > 0 && page - visiblePages[index - 1] > 1;

        return (
          <div key={page} className="flex items-center gap-1">
            {showEllipsis && (
              <span className="w-10 h-10 flex items-center justify-center text-text-muted">
                ...
              </span>
            )}
            <button
              onClick={() => handlePageClick(page)}
              className={`
                w-10 h-10 flex items-center justify-center
                rounded-md text-sm font-medium
                transition-colors duration-fast
                ${
                  currentPage === page
                    ? 'bg-text-primary text-white'
                    : 'border border-border text-text-secondary hover:bg-surface-hover'
                }
              `}
              aria-label={`Страница ${page}`}
              aria-current={currentPage === page ? 'page' : undefined}
            >
              {page}
            </button>
          </div>
        );
      })}

      {/* Next Button */}
      <button
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="
          w-10 h-10 flex items-center justify-center
          rounded-md border border-border
          text-text-secondary
          hover:bg-surface-hover
          disabled:opacity-30 disabled:cursor-not-allowed
          transition-colors duration-fast
        "
        aria-label="Следующая страница"
      >
        →
      </button>
    </nav>
  );
}
