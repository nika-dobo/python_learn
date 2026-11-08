import React from "react";
import { AlertTriangle, Trash2, X } from "lucide-react";

export const ResetModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl relative text-left">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center mb-4">
          <AlertTriangle className="w-6 h-6" />
        </div>

        <h3 className="text-lg font-bold text-white mb-2">
          პროგრესის განულება (Reset)
        </h3>

        <p className="text-sm text-slate-300 mb-6 leading-relaxed">
          ნამდვილად გსურთ კურსის პროგრესის თავიდან დაწყება? გასუფთავდება ყველა დასრულებული გაკვეთილის სტატუსი, ქვიზის მიღებული ქულა და შენახული კოდები.
        </p>

        <div className="flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            გაუქმება
          </button>
          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="px-4 py-2 rounded-xl text-sm font-medium bg-rose-600 hover:bg-rose-500 text-white flex items-center gap-2 shadow-lg shadow-rose-600/20 transition-all cursor-pointer"
          >
            <Trash2 className="w-4 h-4" />
            დიახ, განულება
          </button>
        </div>
      </div>
    </div>
  );
};

