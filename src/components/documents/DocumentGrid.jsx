import DocumentCard from "./DocumentCard";

function DocumentGrid({
  documents,

  onDelete,
}) {
  if (documents.length === 0) {
    return (
      <div className="text-center text-slate-400 mt-12">
        No documents uploaded yet.
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
      {documents.map((doc) => (
        <DocumentCard key={doc.id} document={doc} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default DocumentGrid;
