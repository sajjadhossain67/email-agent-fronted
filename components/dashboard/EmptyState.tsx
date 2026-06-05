export function EmptyState() {
  return (
    <div className="text-center py-24 select-none">
      <div className="text-7xl mb-5 opacity-20 animate-bounce-slow">📭</div>
      <h3 className="text-lg font-semibold text-white mb-2">No notifications yet</h3>
      <p className="text-sm text-slate-500 max-w-xs mx-auto leading-relaxed">
        No important emails have been classified yet. The agent polls your inbox automatically.
      </p>
    </div>
  );
}
