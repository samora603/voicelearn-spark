import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, BookOpen } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/20 to-primary/5 px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <BookOpen className="h-20 w-20 text-primary mx-auto mb-4" />
          <h1 className="text-6xl font-bold gradient-text mb-4">404</h1>
          <h2 className="text-2xl font-bold text-foreground mb-2">Page Not Found</h2>
          <p className="text-muted-foreground">
            Oops! The page you're looking for doesn't exist. Let's get you back to learning!
          </p>
        </div>

        <div className="space-y-4">
          <Link to="/">
            <Button className="btn-hero w-full">
              <Home className="h-5 w-5 mr-2" />
              Go Home
            </Button>
          </Link>
          
          <Link to="/dashboard">
            <Button variant="outline" className="w-full hover:bg-primary/5">
              View Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
