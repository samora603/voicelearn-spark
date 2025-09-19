import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const weeklyData = [
  { day: 'Mon', avgScore: 68 },
  { day: 'Tue', avgScore: 72 },
  { day: 'Wed', avgScore: 75 },
  { day: 'Thu', avgScore: 71 },
  { day: 'Fri', avgScore: 78 },
  { day: 'Sat', avgScore: 73 },
  { day: 'Sun', avgScore: 76 }
];

const ScoreTrendChart = () => {
  return (
    <div className="card-elevated">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-card-foreground mb-2">Weekly Performance Trend</h3>
        <p className="text-muted-foreground">Average class scores over the past week</p>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={weeklyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="day" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
                color: 'hsl(var(--card-foreground))'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="avgScore" 
              stroke="hsl(var(--primary))" 
              strokeWidth={3}
              dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, fill: 'hsl(var(--secondary))' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ScoreTrendChart;