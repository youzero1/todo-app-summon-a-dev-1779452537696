import { useState } from 'react';
import { Trash2, Pencil, Check, X } from 'lucide-react';
import clsx from 'clsx';
import { Todo } from '@/types';

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, text: string) => void;
};

const PRIORITY_STYLES: Record<string, string> = {
  low: 'bg-emerald-50 border-l-4 border-l-emerald-400',
  medium: 'bg-amber-50 border-l-4 border-l-amber-400',
  high: 'bg-rose-50 border-l-4 border-l-rose-400',
};

const PRIORITY_BADGE: Record<string, string> = {
  low: 'text-emerald-600 bg-emerald-100',
  medium: 'text-amber-600 bg-amber-100',
  high: 'text-rose-600 bg-rose-100',
};

export default function TodoItem({ todo, onToggle, onDelete, onEdit }: TodoItemProps) {
  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  function handleSave() {
    if (editText.trim()) {
      onEdit(todo.id, editText);
    }
    setEditing(false);
  }

  function handleCancel() {
    setEditText(todo.text);
    setEditing(false);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') handleSave();
    if (e.key === 'Escape') handleCancel();
  }

  return (
    <li
      className={clsx(
        'rounded-2xl border border-gray-100 shadow-sm px-4 py-3 flex items-center gap-3 transition-all',
        PRIORITY_STYLES[todo.priority] || 'bg-white'
      )}
    >
      {/* Checkbox */}
      <button
        onClick={() => onToggle(todo.id)}
        className={clsx(
          'w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors',
          todo.completed
            ? 'bg-indigo-500 border-indigo-500 text-white'
            : 'border-gray-300 hover:border-indigo-400'
        )}
        aria-label="Toggle todo"
      >
        {todo.completed && <Check size={11} strokeWidth={3} />}
      </button>

      {/* Content */}
      <div className="flex-1 min-w-0">
        {editing ? (
          <input
            autoFocus
            value={editText}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditText(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full rounded-lg border border-indigo-300 px-2 py-1 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-indigo-300"
          />
        ) : (
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className={clsx(
                'text-sm leading-snug truncate',
                todo.completed ? 'line-through text-gray-400' : 'text-gray-700'
              )}
            >
              {todo.text}
            </span>
            <span
              className={clsx(
                'text-xs px-2 py-0.5 rounded-full font-medium',
                PRIORITY_BADGE[todo.priority]
              )}
            >
              {todo.priority}
            </span>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-1 flex-shrink-0">
        {editing ? (
          <>
            <button
              onClick={handleSave}
              className="p-1.5 rounded-lg text-emerald-500 hover:bg-emerald-100 transition-colors"
              aria-label="Save"
            >
              <Check size={15} />
            </button>
            <button
              onClick={handleCancel}
              className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 transition-colors"
              aria-label="Cancel"
            >
              <X size={15} />
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => { setEditing(true); setEditText(todo.text); }}
              className="p-1.5 rounded-lg text-gray-400 hover:text-indigo-500 hover:bg-indigo-50 transition-colors"
              aria-label="Edit"
            >
              <Pencil size={15} />
            </button>
            <button
              onClick={() => onDelete(todo.id)}
              className="p-1.5 rounded-lg text-gray-400 hover:text-rose-500 hover:bg-rose-50 transition-colors"
              aria-label="Delete"
            >
              <Trash2 size={15} />
            </button>
          </>
        )}
      </div>
    </li>
  );
}
