import React, { useEffect } from 'react';
import NavigationBar from '@/components/NavigationBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { GraduationCap, Users, MessageCircle, Calendar, Bell, Briefcase, BookOpen, User, Search } from 'lucide-react';
import ConnectedMentors from '@/components/student/ConnectedMentors';
import MentorSearch from '@/components/student/MentorSearch';
import MentorChat from '@/components/student/MentorChat';
import StudentDashboard from '@/components/student/Students-Dashboard';
import { Link } from 'react-router-dom';


const StudentPortal = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavigationBar />
      
      <main className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          {/* Welcome Header - Matching Alumni Portal */}
          <div className="mb-8 p-6 glass-card rounded-xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold mb-2">Welcome Back, Alex</h1>
                <p className="text-muted-foreground">Computer Science | Year 2</p>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="outline" className="flex items-center gap-2 focus-ring">
                  <Bell className="h-4 w-4" />
                  <span className="hidden sm:inline">Notifications</span>
                  <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-primary rounded-full">2</span>
                </Button>
                <Button className="flex items-center gap-2 button-transition button-hover focus-ring">
                  <MessageCircle className="h-4 w-4" />
                  <span className="hidden sm:inline">Messages</span>
                </Button>
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2 focus-ring"
                  asChild
                >
                  <Link to="/student-profile">
                    <User className="h-4 w-4" />
                    <span className="hidden sm:inline">My Profile</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Main Tabs Navigation - Matching Alumni Portal Style */}
          <Tabs defaultValue="dashboard" className="w-full">
            <TabsList className="w-full mb-8 grid grid-cols-2 md:grid-cols-4 h-auto bg-muted/50 p-1 rounded-lg">
            <TabsTrigger value="dashboard" className="py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                <span>Dashboard</span>
              </TabsTrigger>
              <TabsTrigger value="mentors" className="py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>My Mentors</span>
              </TabsTrigger>
              <TabsTrigger value="search" className="py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm flex items-center gap-2">
                <Search className="h-4 w-4" />
                <span>Find Mentors</span>
              </TabsTrigger>
              <TabsTrigger value="chat" className="py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                <span>Chat</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="dashboard" className="mt-0">
              <StudentDashboard />
            </TabsContent>

            <TabsContent value="mentors" className="mt-0">
              <div className="grid gap-6">
                <div className="glass-card p-6 rounded-xl">
                  <ConnectedMentors />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="search" className="mt-0">
              <div className="glass-card p-6 rounded-xl">
                <MentorSearch />
              </div>
            </TabsContent>
            
            <TabsContent value="chat" className="mt-0">
              <div className="glass-card p-6 rounded-xl">
                <MentorChat />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StudentPortal;