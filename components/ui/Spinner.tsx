export function Spinner() {
  return (
    <div className="flex justify-center py-20">
      <div className="relative">
        <div className="w-10 h-10 border-2 border-slate-700 rounded-full" />
        <div className="absolute inset-0 w-10 h-10 border-2 border-transparent border-t-blue-500 rounded-full animate-spin" />
      </div>
    </div>
  );
}
