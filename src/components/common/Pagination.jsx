function Pagination({
  page,

  totalPages,

  onPage,
}) {
  return (
    <div className="flex justify-center gap-2 mt-8">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => onPage(index)}
          className={`px-4 py-2 rounded-lg ${
            page === index ? "bg-blue-600" : "bg-slate-800"
          }`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
