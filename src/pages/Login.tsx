import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { BookOpen, Lock, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const [email, setEmail] = useState('teacher@demo.com');
  const [password, setPassword] = useState('password123');
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Demo authentication
    if (email === 'teacher@demo.com' && password === 'password123') {
      toast({
        title: "Login successful!",
        description: "Welcome to VoiceLearn dashboard.",
      });
      navigate('/dashboard');
    } else {
      toast({
        title: "Login failed",
        description: "Please use demo credentials: teacher@demo.com / password123",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/20 to-primary/5 px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <BookOpen className="h-12 w-12 text-primary" />
            <span className="text-3xl font-bold gradient-text">VoiceLearn</span>
          </div>
          <p className="text-muted-foreground">Teacher Dashboard Login</p>
        </div>

        {/* Login Card */}
        <Card className="card-elevated">
          <div className="p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-center mb-2">Welcome Back</h2>
              <p className="text-muted-foreground text-center">Sign in to access your dashboard</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>Email</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="teacher@demo.com"
                  className="h-12 text-base"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium flex items-center space-x-2">
                  <Lock className="h-4 w-4" />
                  <span>Password</span>
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password123"
                  className="h-12 text-base"
                  required
                />
              </div>

              <Button type="submit" className="w-full btn-hero">
                Sign In
              </Button>
            </form>

            {/* Demo Info */}
            <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border/50">
              <p className="text-sm font-medium text-muted-foreground mb-2">Demo Credentials:</p>
              <p className="text-sm text-card-foreground">
                <span className="font-medium">Email:</span> teacher@demo.com<br />
                <span className="font-medium">Password:</span> password123
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;