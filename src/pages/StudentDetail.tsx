import { useParams, Link } from 'react-router-dom';
import { demoStudents } from '@/data/demoData';
import ActivityTimeline from '@/components/ActivityTimeline';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, User, Trophy, MessageSquare, TrendingDown, TrendingUp } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

const StudentDetail = () => {
  const { id } = useParams();
  const student = demoStudents.find(s => s.id === parseInt(id || ''));

  if (!student) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Student Not Found</h1>
          <Link to="/dashboard">
            <Button className="btn-hero">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const pieData = Object.entries(student.topicScores).map(([topic, score]) => ({
    name: topic,
    value: score,
    color: score < 50 ? '#ef4444' : score < 70 ? '#f97316' : '#22c55e'
  }));

  const barData = Object.entries(student.topicScores).map(([topic, score]) => ({
    topic,
    score
  }));

  const correctAnswers = student.activities.filter(a => a.isCorrect).length;
  const totalAnswers = student.activities.length;
  const accuracyRate = totalAnswers > 0 ? Math.round((correctAnswers / totalAnswers) * 100) : 0;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <Link to="/dashboard">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
        </Link>
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center space-x-4 mb-4 sm:mb-0">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
              <User className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">{student.name}</h1>
              <p className="text-muted-foreground text-lg">{student.class} • Last active: {student.lastActive}</p>
            </div>
          </div>
          
          <Button className="btn-secondary">
            <MessageSquare className="h-5 w-5 mr-2" />
            Send Encouragement SMS
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="card-elevated">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm font-medium">Total Points</p>
                <p className="text-2xl font-bold text-card-foreground">{student.points}</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center">
                <Trophy className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </Card>

        <Card className="card-elevated">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm font-medium">Accuracy Rate</p>
                <p className="text-2xl font-bold text-card-foreground">{accuracyRate}%</p>
              </div>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                accuracyRate >= 70 ? 'bg-gradient-to-br from-secondary to-accent' : 'bg-gradient-to-br from-destructive/80 to-destructive'
              }`}>
                {accuracyRate >= 70 ? (
                  <TrendingUp className="h-6 w-6 text-white" />
                ) : (
                  <TrendingDown className="h-6 w-6 text-white" />
                )}
              </div>
            </div>
          </div>
        </Card>

        <Card className="card-elevated">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm font-medium">Questions Answered</p>
                <p className="text-2xl font-bold text-card-foreground">{totalAnswers}</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </Card>

        <Card className="card-elevated">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm font-medium">Areas to Improve</p>
                <p className="text-2xl font-bold text-card-foreground">{student.weaknesses.length}</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-destructive/80 to-destructive rounded-xl flex items-center justify-center">
                <TrendingDown className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Performance Breakdown - Pie Chart */}
        <div className="card-elevated">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-card-foreground mb-2">Topic Performance</h3>
            <p className="text-muted-foreground">Score breakdown by subject area</p>
          </div>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Topic Scores - Bar Chart */}
        <div className="card-elevated">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-card-foreground mb-2">Detailed Scores</h3>
            <p className="text-muted-foreground">Performance across all math topics</p>
          </div>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="topic" 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={10}
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
                  dataKey="score" 
                  fill="hsl(var(--primary))" 
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Weaknesses Section */}
      {student.weaknesses.length > 0 && (
        <div className="card-elevated mb-8">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-card-foreground mb-2">Areas Needing Attention</h3>
            <p className="text-muted-foreground">Topics where {student.name} is struggling</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {student.weaknesses.map((weakness, index) => (
              <span key={index} className="badge-weakness text-base px-4 py-2">
                {weakness}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Activity Timeline */}
      <ActivityTimeline activities={student.activities} />
    </div>
  );
};

export default StudentDetail;