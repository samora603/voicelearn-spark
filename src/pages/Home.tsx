import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MessageSquare, Phone, Sparkles, Users, BarChart3 } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-primary/5">
      {/* Hero Section */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
              <span className="gradient-text">VoiceLearn</span>
              <br />
              <span className="text-foreground">Math via SMS & Voice</span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8">
              Accessible learning for every child, anywhere in Kenya
            </p>
          </div>

          {/* Demo Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button className="btn-hero group">
              <MessageSquare className="h-6 w-6 mr-2 group-hover:animate-bounce-gentle" />
              Simulate SMS Learning
            </Button>
            <Button className="btn-secondary group">
              <Phone className="h-6 w-6 mr-2 group-hover:animate-bounce-gentle" />
              Simulate IVR Call
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <div className="card-elevated text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">SMS Learning</h3>
              <p className="text-muted-foreground">
                Students receive math questions via SMS and respond with answers. Works on any phone.
              </p>
            </div>

            <div className="card-elevated text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Voice Calls</h3>
              <p className="text-muted-foreground">
                Interactive voice responses make learning accessible to non-readers and remote areas.
              </p>
            </div>

            <div className="card-elevated text-center group hover:scale-105 transition-transform duration-300 md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Progress Tracking</h3>
              <p className="text-muted-foreground">
                Teachers monitor student progress and identify learning gaps in real-time.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl border border-primary/20">
            <h2 className="text-2xl font-bold mb-4">Ready to transform math education?</h2>
            <p className="text-muted-foreground mb-6">
              Join our demo to see how VoiceLearn makes math accessible to every Kenyan child.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard">
                <Button className="btn-hero">
                  <Users className="h-5 w-5 mr-2" />
                  View Teacher Dashboard
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" className="px-8 py-3 hover:bg-primary/5">
                  <Sparkles className="h-5 w-5 mr-2" />
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;