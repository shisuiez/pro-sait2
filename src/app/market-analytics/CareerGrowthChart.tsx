import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from 'recharts';

const data = [
  { year: '2020', AI_ML: 100, Cloud: 80, Cyber: 60, Data: 70 },
  { year: '2021', AI_ML: 130, Cloud: 100, Cyber: 80, Data: 90 },
  { year: '2022', AI_ML: 170, Cloud: 120, Cyber: 110, Data: 120 },
  { year: '2023', AI_ML: 220, Cloud: 150, Cyber: 140, Data: 160 },
  { year: '2024', AI_ML: 270, Cloud: 180, Cyber: 170, Data: 210 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-900/90 rounded-xl p-4 shadow-xl border border-blue-500">
        <p className="font-bold text-blue-400 mb-2">Год: {label}</p>
        {payload.map((entry: any) => (
          <div key={entry.dataKey} className="flex items-center gap-2 mb-1">
            <span style={{ background: entry.color, width: 10, height: 10, borderRadius: '50%', display: 'inline-block' }}></span>
            <span className="text-white font-semibold">{entry.name}:</span>
            <span className="text-blue-200">{entry.value}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default function CareerGrowthChart() {
  return (
    <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-blue-900 rounded-2xl p-8 shadow-2xl mt-10">
      <h2 className="text-3xl font-bold mb-6 text-blue-300">Динамика карьерного роста по ключевым навыкам</h2>
      <ResponsiveContainer width="100%" height={340}>
        <LineChart data={data} margin={{ top: 30, right: 40, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorAI" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.8}/>
              <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.2}/>
            </linearGradient>
            <linearGradient id="colorCloud" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity={0.8}/>
              <stop offset="100%" stopColor="#10b981" stopOpacity={0.2}/>
            </linearGradient>
            <linearGradient id="colorCyber" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f59e42" stopOpacity={0.8}/>
              <stop offset="100%" stopColor="#f59e42" stopOpacity={0.2}/>
            </linearGradient>
            <linearGradient id="colorData" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#a855f7" stopOpacity={0.8}/>
              <stop offset="100%" stopColor="#a855f7" stopOpacity={0.2}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis dataKey="year" tick={{ fill: '#cbd5e1', fontWeight: 600 }}>
            <Label value="Год" offset={-5} position="insideBottom" fill="#60a5fa" fontSize={16} />
          </XAxis>
          <YAxis tick={{ fill: '#cbd5e1', fontWeight: 600 }}>
            <Label value="Индекс роста" angle={-90} position="insideLeft" fill="#60a5fa" fontSize={16} />
          </YAxis>
          <Tooltip content={<CustomTooltip />} />
          <Legend iconType="circle" wrapperStyle={{ color: '#fff', fontWeight: 600 }} />
          <Line type="monotone" dataKey="AI_ML" stroke="url(#colorAI)" strokeWidth={4} dot={{ r: 6 }} activeDot={{ r: 9 }} name="AI/ML" animationDuration={1200} />
          <Line type="monotone" dataKey="Cloud" stroke="url(#colorCloud)" strokeWidth={4} dot={{ r: 6 }} activeDot={{ r: 9 }} name="Cloud Computing" animationDuration={1200} />
          <Line type="monotone" dataKey="Cyber" stroke="url(#colorCyber)" strokeWidth={4} dot={{ r: 6 }} activeDot={{ r: 9 }} name="Cybersecurity" animationDuration={1200} />
          <Line type="monotone" dataKey="Data" stroke="url(#colorData)" strokeWidth={4} dot={{ r: 6 }} activeDot={{ r: 9 }} name="Data Science" animationDuration={1200} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
} 