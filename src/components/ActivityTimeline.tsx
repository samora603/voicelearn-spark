import { Activity } from '@/data/demoData';
import { CheckCircle2, XCircle, Clock } from 'lucide-react';

interface ActivityTimelineProps {
  activities: Activity[];
}

const ActivityTimeline = ({ activities }: ActivityTimelineProps) => {
  return (
    <div className="card-elevated">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-card-foreground mb-2">Recent Activity</h3>
        <p className="text-muted-foreground">Latest questions and answers</p>
      </div>
      
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-4 p-4 rounded-lg border border-border/50 hover:bg-muted/30 transition-colors">
            <div className={`mt-1 ${activity.isCorrect ? 'text-secondary' : 'text-destructive'}`}>
              {activity.isCorrect ? (
                <CheckCircle2 className="h-5 w-5" />
              ) : (
                <XCircle className="h-5 w-5" />
              )}
            </div>
            
            <div className="flex-1 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-accent">{activity.topic}</span>
                <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>{activity.timestamp}</span>
                </div>
              </div>
              
              <div>
                <p className="text-sm text-card-foreground mb-1">
                  <span className="font-medium">Q:</span> {activity.question}
                </p>
                <p className="text-sm">
                  <span className="font-medium">A:</span> {activity.answer}
                  {!activity.isCorrect && activity.correctAnswer && (
                    <span className="text-destructive ml-2">
                      (Correct: {activity.correctAnswer})
                    </span>
                  )}
                  {activity.isCorrect && (
                    <span className="text-secondary ml-2 font-medium">✓ Correct!</span>
                  )}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityTimeline;