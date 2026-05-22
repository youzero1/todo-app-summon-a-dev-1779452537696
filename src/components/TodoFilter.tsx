import clsx from 'clsx';
import { FilterType } from '@/types';

type TodoFilterProps = {
  filter: FilterType;
  setFilter: (f: FilterType) => void;
};

const FILTERS: { label: string; value: FilterType }[] = [
  { label: 'All', value: 'all' },
  { label: 'Active', value: 'active' },
  { label: 'Completed', value: 'completed' },
];

export default function TodoFilter({ filter, setFilter }: TodoFilterProps) {
  return (
    <div className="flex gap-1 mb-4 bg-white rounded-xl border border-gray-100 shadow-sm p-1">
      {FILTERS.map((f) => (
        <button
          key={f.value}
          onClick={() => setFilter(f.value)}
          className={clsx(
            'flex-1 py-1.5 rounded-lg text-sm font-medium transition-all',
            filter === f.value
              ? 'bg-indigo-500 text-white shadow'
              : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
          )}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
