import { useState } from 'react';
import { ArrowLeft, Calendar, Heart, MessageSquare, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Link } from 'react-router-dom';

const Organizer = () => {
  const [suggestions, setSuggestions] = useState([
    "Plan a virtual movie night this Friday",
    "Send her favorite morning playlist",
    "Schedule a cooking session together over video call",
    "Write a sweet good morning message",
    "Plan a surprise virtual date"
  ]);
  
  const [newSuggestion, setNewSuggestion] = useState('');
  const [upcomingPlans, setUpcomingPlans] = useState([
    { id: 1, title: "Movie Night: The Princess Bride", date: "Friday 8 PM", type: "date" },
    { id: 2, title: "Morning Coffee Chat", date: "Every Day 7 AM", type: "routine" },
    { id: 3, title: "Weekend Virtual Cooking", date: "Saturday 3 PM", type: "activity" }
  ]);

  const addSuggestion = () => {
    if (newSuggestion.trim()) {
      setSuggestions([...suggestions, newSuggestion.trim()]);
      setNewSuggestion('');
    }
  };

  const ldrTips = [
    "Send random photos of your day",
    "Watch movies together online",
    "Play online games together",
    "Share your daily routines",
    "Plan surprise deliveries",
    "Create shared playlists"
  ];

  return (
    <div className="min-h-screen bg-space pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="aurora-text text-4xl font-bold mb-2">LDR Organizer</h1>
            <p className="text-muted-foreground">Planning our love across the distance</p>
          </div>
          <Link to="/">
            <Button variant="outline" className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Aurora</span>
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Suggestion Box */}
          <Card className="bg-card/80 backdrop-blur-sm border-border">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                <span>Sweet Suggestions</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex space-x-2">
                <Input
                  placeholder="Add a sweet idea..."
                  value={newSuggestion}
                  onChange={(e) => setNewSuggestion(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addSuggestion()}
                />
                <Button onClick={addSuggestion} size="sm">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {suggestions.map((suggestion, index) => (
                  <div key={index} className="p-3 bg-muted/50 rounded-lg text-sm">
                    {suggestion}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Plans */}
          <Card className="bg-card/80 backdrop-blur-sm border-border">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-accent" />
                <span>Upcoming Plans</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingPlans.map((plan) => (
                <div key={plan.id} className="p-4 bg-muted/30 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground">{plan.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{plan.date}</p>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs mt-2 ${
                    plan.type === 'date' ? 'bg-accent/20 text-accent' :
                    plan.type === 'routine' ? 'bg-primary/20 text-primary' :
                    'bg-secondary/20 text-secondary'
                  }`}>
                    {plan.type}
                  </span>
                </div>
              ))}
              
              <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
                Connect Google Calendar
              </Button>
            </CardContent>
          </Card>

          {/* LDR Tips */}
          <Card className="bg-card/80 backdrop-blur-sm border-border lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-accent" />
                <span>LDR Love Tips</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {ldrTips.map((tip, index) => (
                  <div key={index} className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border border-primary/20">
                    <p className="text-sm text-foreground">{tip}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Notes */}
          <Card className="bg-card/80 backdrop-blur-sm border-border lg:col-span-2">
            <CardHeader>
              <CardTitle>Love Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea 
                placeholder="Write something sweet for later..."
                className="min-h-32 bg-muted/30 border-border"
              />
              <Button className="mt-4 bg-accent hover:bg-accent/90">
                Save Note
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Distance Quote */}
        <div className="text-center mt-12 p-8 bg-card/30 backdrop-blur-sm rounded-2xl border border-border">
          <h2 className="aurora-text text-2xl font-bold mb-4">
            "Distance means nothing when someone means everything"
          </h2>
          <p className="text-muted-foreground">
            Every mile between us is a mile closer to our forever together ✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default Organizer;