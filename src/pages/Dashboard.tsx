import { demoStudents, weeklyProgress } from '@/data/demoData';
import StudentCard from '@/components/StudentCard';
import ScoreTrendChart from '@/components/ScoreTrendChart';
import ActivityTimeline from '@/components/ActivityTimeline';
import { Card } from '@/components/ui/card';
import { Users, BookOpen, TrendingUp, AlertTriangle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const totalStudents = demoStudents.length;
  const activeToday = demoStudents.filter(s => s.lastActive === 'Today').length;
  const totalPoints = demoStudents.reduce((sum, s) => sum + s.points, 0);
  const allActivities = demoStudents.flatMap(s => s.activities).sort((a, b) => 
    new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  ).slice(0, 8);

  const weaknessData = demoStudents
    .flatMap(s => s.weaknesses)
    .reduce((acc, weakness) => {
      acc[weakness] = (acc[weakness] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

  const chartData = Object.entries(weaknessData).map(([topic, count]) => ({
    topic,
    students: count
  }));

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Teacher Dashboard</h1>
        <p className="text-muted-foreground">Monitor student progress and identify learning opportunities</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="card-elevated">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm font-medium">Total Students</p>
                <p className="text-2xl font-bold text-card-foreground">{totalStudents}</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </Card>

        <Card className="card-elevated">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm font-medium">Active Today</p>
                <p className="text-2xl font-bold text-card-foreground">{activeToday}</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </Card>

        <Card className="card-elevated">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm font-medium">Total Points</p>
                <p className="text-2xl font-bold text-card-foreground">{totalPoints.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </Card>

        <Card className="card-elevated">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm font-medium">Need Help</p>
                <p className="text-2xl font-bold text-card-foreground">{Object.keys(weaknessData).length}</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-destructive/80 to-destructive rounded-xl flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Students List - Scrollable */}
        <div className="lg:col-span-1">
          <div className="card-elevated">
            <div className="p-6 border-b border-border/50">
              <h3 className="text-xl font-semibold text-card-foreground">Students</h3>
              <p className="text-muted-foreground text-sm">Click to view detailed progress</p>
            </div>
            <div className="p-4 space-y-4 max-h-96 lg:max-h-[600px] overflow-y-auto">
              {demoStudents.map((student) => (
                <StudentCard key={student.id} student={student} />
              ))}
            </div>
          </div>
        </div>

        {/* Charts and Data - 2 columns */}
        <div className="lg:col-span-2 space-y-8">
          {/* Score Trend Chart */}
          <ScoreTrendChart />

          {/* Weakness Analysis */}
          <div className="card-elevated">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-card-foreground mb-2">Topic Weaknesses</h3>
              <p className="text-muted-foreground">Number of students struggling with each topic</p>
            </div>
            
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="topic" 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    angle={-45}
                    textAnchor="end"
                    height={80}
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
                  <Bar 
                    dataKey="students" 
                    fill="hsl(var(--destructive))" 
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Activity Timeline */}
          <ActivityTimeline activities={allActivities} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;