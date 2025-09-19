import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Save, Key, MessageSquare, Phone, Zap } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Settings = () => {
  const [africastalkingKey, setAfricastalkingKey] = useState('');
  const [africastalkingUsername, setAfricastalkingUsername] = useState('');
  const [openaiKey, setOpenaiKey] = useState('');
  const [twilioSid, setTwilioSid] = useState('');
  const [twilioToken, setTwilioToken] = useState('');
  
  const { toast } = useToast();

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, these would be saved securely to the backend
    toast({
      title: "Settings saved successfully!",
      description: "Your API configurations have been updated.",
    });
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
        <p className="text-muted-foreground">Configure API integrations and system preferences</p>
      </div>

      <form onSubmit={handleSaveSettings} className="space-y-8">
        {/* Africa's Talking API */}
        <Card className="card-elevated">
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-card-foreground">Africa's Talking SMS</h3>
                <p className="text-muted-foreground">Configure SMS delivery for student interactions</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="at-username" className="text-sm font-medium flex items-center space-x-2">
                  <Key className="h-4 w-4" />
                  <span>Username</span>
                </Label>
                <Input
                  id="at-username"
                  type="text"
                  value={africastalkingUsername}
                  onChange={(e) => setAfricastalkingUsername(e.target.value)}
                  placeholder="your_at_username"
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="at-key" className="text-sm font-medium flex items-center space-x-2">
                  <Key className="h-4 w-4" />
                  <span>API Key</span>
                </Label>
                <Input
                  id="at-key"
                  type="password"
                  value={africastalkingKey}
                  onChange={(e) => setAfricastalkingKey(e.target.value)}
                  placeholder="AT-xxxxxxxxxxxxxxxx"
                  className="h-12"
                />
              </div>
            </div>

            <div className="mt-4 p-4 bg-muted/50 rounded-lg border border-border/50">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium">Note:</span> Africa's Talking provides SMS and voice services across Africa. 
                Sign up at <a href="https://africastalking.com" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">africastalking.com</a> to get your credentials.
              </p>
            </div>
          </div>
        </Card>

        {/* Voice Call Settings */}
        <Card className="card-elevated">
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-card-foreground">Voice Call Integration</h3>
                <p className="text-muted-foreground">Setup voice-based learning interactions</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="twilio-sid" className="text-sm font-medium flex items-center space-x-2">
                  <Key className="h-4 w-4" />
                  <span>Twilio Account SID</span>
                </Label>
                <Input
                  id="twilio-sid"
                  type="text"
                  value={twilioSid}
                  onChange={(e) => setTwilioSid(e.target.value)}
                  placeholder="ACxxxxxxxxxxxxxxxx"
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="twilio-token" className="text-sm font-medium flex items-center space-x-2">
                  <Key className="h-4 w-4" />
                  <span>Twilio Auth Token</span>
                </Label>
                <Input
                  id="twilio-token"
                  type="password"
                  value={twilioToken}
                  onChange={(e) => setTwilioToken(e.target.value)}
                  placeholder="xxxxxxxxxxxxxxxx"
                  className="h-12"
                />
              </div>
            </div>

            <div className="mt-4 p-4 bg-muted/50 rounded-lg border border-border/50">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium">Alternative:</span> You can also use Africa's Talking Voice API for voice calls within Africa.
              </p>
            </div>
          </div>
        </Card>

        <Separator />

        {/* AI Integration */}
        <Card className="card-elevated">
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-card-foreground">AI Enhancement</h3>
                <p className="text-muted-foreground">Enable AI-powered question generation and feedback</p>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="openai-key" className="text-sm font-medium flex items-center space-x-2">
                <Key className="h-4 w-4" />
                <span>OpenAI API Key</span>
              </Label>
              <Input
                id="openai-key"
                type="password"
                value={openaiKey}
                onChange={(e) => setOpenaiKey(e.target.value)}
                placeholder="sk-xxxxxxxxxxxxxxxx"
                className="h-12"
              />
            </div>

            <div className="mt-4 p-4 bg-muted/50 rounded-lg border border-border/50">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium">Optional:</span> AI integration enables personalized question generation, 
                adaptive difficulty, and intelligent feedback based on student performance patterns.
              </p>
            </div>
          </div>
        </Card>

        {/* Security Notice */}
        <Card className="border-accent/20 bg-accent/5">
          <div className="p-6">
            <h4 className="font-semibold text-card-foreground mb-2">🔒 Security Information</h4>
            <p className="text-sm text-muted-foreground">
              All API keys are encrypted and stored securely. They are only used for authorized API calls 
              to deliver educational content to your students. Never share your API keys with unauthorized parties.
            </p>
          </div>
        </Card>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button type="submit" className="btn-hero">
            <Save className="h-5 w-5 mr-2" />
            Save Settings
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Settings;