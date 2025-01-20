import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Upload, BookOpen, Users, DollarSign } from "lucide-react";
import { useState } from "react";

const Admin = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    // TODO: Implement file upload logic when Supabase is connected
    console.log("Uploading:", selectedFile.name);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-gradient-to-r from-purple-600 to-orange-500">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-white font-serif">Admin Dashboard</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Books</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$0</div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Upload New Book</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Input 
                type="file" 
                accept=".pdf"
                onChange={handleFileChange}
                className="cursor-pointer"
              />
            </div>
            <Button 
              onClick={handleUpload}
              disabled={!selectedFile}
              className="bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600"
            >
              <Upload className="mr-2 h-4 w-4" />
              Upload Book
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Uploaded Books</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center text-muted-foreground py-8">
              No books uploaded yet
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Admin;