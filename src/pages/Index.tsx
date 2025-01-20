import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-gradient-to-r from-purple-600 to-orange-500">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white font-serif">
            AudioBook Premium
          </h1>
          <div className="space-x-4">
            <Button variant="secondary" className="hover:bg-white/90">
              Sign In
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
            Premium AudioBooks with Indian Soul
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Access our curated collection of premium audiobooks, carefully enhanced with AI for the best listening experience.
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600"
          >
            Subscribe Now - $100/year
          </Button>
        </div>

        {/* Books Grid */}
        <div>
          <h2 className="text-3xl font-serif mb-8 text-center bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
            Featured AudioBooks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Empty State */}
            <Card className="p-8 border-2 border-orange-100 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <p className="text-lg font-medium text-primary">Coming Soon</p>
                <p className="text-sm text-muted-foreground">
                  Our team is preparing amazing audiobooks for you
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-serif mb-12 text-center">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>AI Enhanced Audio</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Crystal clear audio enhanced by cutting-edge AI technology
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Indian Literature</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Exclusive access to premium Indian literature and stories
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Regular Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  New audiobooks added regularly to our growing collection
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;