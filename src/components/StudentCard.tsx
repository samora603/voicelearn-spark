import { Link } from 'react-router-dom';
import { Student } from '@/data/demoData';
import { User, Trophy, Clock } from 'lucide-react';

interface StudentCardProps {
  student: Student;
}

const StudentCard = ({ student }: StudentCardProps) => {
  return (
    <Link to={`/student/${student.id}`} className="block">
      <div className="card-elevated hover:scale-[1.02] transition-all duration-200 cursor-pointer">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
              <User className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-card-foreground">{student.name}</h3>
              <p className="text-muted-foreground text-sm">{student.class}</p>
            </div>
          </div>
          <div className="flex items-center space-x-1 text-accent">
            <Trophy className="h-4 w-4" />
            <span className="font-bold">{student.points}</span>
          </div>
        </div>

        <div className="flex items-center space-x-1 text-muted-foreground text-sm mb-3">
          <Clock className="h-4 w-4" />
          <span>Last active: {student.lastActive}</span>
        </div>

        {student.weaknesses.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">Needs help with:</p>
            <div className="flex flex-wrap gap-2">
              {student.weaknesses.map((weakness, index) => (
                <span key={index} className="badge-weakness">
                  {weakness}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </Link>
  );
};

export default StudentCard;