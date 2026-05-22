import { ListTodo, CheckCircle2 } from 'lucide-react';

type TodoStatsProps = {
  activeCount: number;
  completedCount: number;
};

export default function TodoStats({ activeCount, completedCount }: TodoStatsProps) {
  return (
    <div className="grid grid-cols-2 gap-3 mb-6">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center gap-3">
        <div className="bg-indigo-50 text-indigo-500 rounded-xl p-2">
          <ListTodo size={20} />
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-800">{activeCount}</p>
          <p className="text-xs text-gray-400">Tasks remaining</p>
        </div>
      </div>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center gap-3">
        <div className="bg-emerald-50 text-emerald-500 rounded-xl p-2">
          <CheckCircle2 size={20} />
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-800">{completedCount}</p>
          <p className="text-xs text-gray-400">Completed</p>
        </div>
      </div>
    </div>
  );
}
