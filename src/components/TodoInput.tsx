import { useState } from 'react';
import { Plus } from 'lucide-react';
import clsx from 'clsx';
import { Priority } from '@/types';

type TodoInputProps = {
  onAdd: (text: string, priority: Priority) => void;
};

const PRIORITIES: { label: string; value: Priority; color: string }[] = [
  { label: 'Low', value: 'low', color: 'text-emerald-600 bg-emerald-50 border-emerald-200' },
  { label: 'Med', value: 'medium', color: 'text-amber-600 bg-amber-50 border-amber-200' },
  { label: 'High', value: 'high', color: 'text-rose-600 bg-rose-50 border-rose-200' },
];

export default function TodoInput({ onAdd }: TodoInputProps) {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState<Priority>('medium');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text, priority);
    setText('');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-4"
    >
      <div className="flex gap-2 mb-3">
        {PRIORITIES.map((p) => (
          <button
            key={p.value}
            type="button"
            onClick={() => setPriority(p.value)}
            className={clsx(
              'px-3 py-1 rounded-full text-xs font-semibold border transition-all',
              p.color,
              priority === p.value ? 'ring-2 ring-offset-1 ring-current opacity-100' : 'opacity-50 hover:opacity-80'
            )}
          >
            {p.label}
          </button>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
          placeholder="What needs to be done?"
          className="flex-1 rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-gray-700 placeholder-gray-300 outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 transition"
        />
        <button
          type="submit"
          disabled={!text.trim()}
          className="bg-indigo-500 hover:bg-indigo-600 disabled:opacity-40 text-white rounded-xl px-4 py-2.5 flex items-center gap-1 text-sm font-semibold shadow-sm transition-colors"
        >
          <Plus size={16} />
          Add
        </button>
      </div>
    </form>
  );
}
