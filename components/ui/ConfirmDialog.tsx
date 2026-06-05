'use client';
import { useEffect, useRef } from 'react';
import { X, AlertTriangle } from 'lucide-react';

interface ConfirmDialogProps {
  open: boolean;
  title: string;
  description: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
  destructive?: boolean;
}

export function ConfirmDialog({
  open,
  title,
  description,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  onConfirm,
  onCancel,
  destructive = false,
}: ConfirmDialogProps) {
  const cancelRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) cancelRef.current?.focus();
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirm-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onCancel}
      />

      {/* Panel */}
      <div className="relative bg-slate-800 border border-slate-700 rounded-2xl p-6 w-full max-w-sm shadow-2xl animate-slide-in">
        <button
          onClick={onCancel}
          className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <div className="flex items-start gap-4 mb-5">
          <span className={`mt-0.5 shrink-0 ${destructive ? 'text-red-400' : 'text-blue-400'}`}>
            <AlertTriangle size={22} />
          </span>
          <div>
            <h2 id="confirm-title" className="font-semibold text-white text-base mb-1">
              {title}
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
          </div>
        </div>

        <div className="flex gap-3 justify-end">
          <button
            ref={cancelRef}
            onClick={onCancel}
            className="px-4 py-2 text-sm font-medium text-slate-400 border border-slate-700
              rounded-lg hover:border-slate-500 hover:text-white transition-all"
          >
            {cancelLabel}
          </button>
          <button
            onClick={onConfirm}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all
              ${destructive
                ? 'bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500/20'
                : 'bg-blue-500/10 text-blue-400 border border-blue-500/30 hover:bg-blue-500/20'
              }`}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
