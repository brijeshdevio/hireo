export function Loading({ isPending = false }: { isPending: boolean }) {
  if (!isPending) return null;

  return (
    <div className="my-4 gap-2 text-center">
      <span className="spinner-border spinner-border-md"></span>
      <br />
      <span>Loading...</span>
    </div>
  );
}
