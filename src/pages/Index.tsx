import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-gradient-to-r from-purple-600 to-orange-500">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white font-serif">
            AudioBook Creator
          </h1>
          <Button variant="secondary" className="hover:bg-white/90">
            Sign In
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Upload Section */}
        <Card className="mb-12 border-2 border-orange-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="space-y-2">
            <CardTitle className="text-2xl text-center font-serif bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
              Upload Your PDF
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-orange-200 rounded-xl p-12 text-center hover:border-primary/50 transition-colors bg-secondary/50">
              <Upload className="mx-auto h-16 w-16 text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-3 text-primary">
                Drop your PDF here
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                or click to browse files
              </p>
              <Button 
                variant="default"
                className="bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 transition-all duration-300"
              >
                Select PDF
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Books Grid */}
        <div>
          <h2 className="text-3xl font-serif mb-8 text-center bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
            Your Audiobook Library
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Empty State */}
            <Card className="p-8 border-2 border-orange-100 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                  <Upload className="h-8 w-8 text-primary" />
                </div>
                <p className="text-lg font-medium text-primary">No books uploaded yet</p>
                <p className="text-sm text-muted-foreground">
                  Upload a PDF to begin your audiobook journey
                </p>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;