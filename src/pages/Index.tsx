
import { useState, useEffect } from "react";
import DataGrid from "@/components/DataGrid";
import Header from "@/components/Header";
import ControlPanel from "@/components/ControlPanel";
import { mockEmployeeData } from "@/data/mockData";
import { toast } from "sonner";

const Index = () => {
  const [employees, setEmployees] = useState(mockEmployeeData);
  const [isLoading, setIsLoading] = useState(false);

  const handleRefreshGrid = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setEmployees([...mockEmployeeData]);
      setIsLoading(false);
      toast.success("Grid data refreshed successfully");
    }, 800);
  };

  const handleRefreshDatabase = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Database refreshed successfully");
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <ControlPanel 
          onRefreshGrid={handleRefreshGrid} 
          onRefreshDatabase={handleRefreshDatabase}
          isLoading={isLoading}
        />
        
        <div className="mt-6 bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
          <DataGrid data={employees} isLoading={isLoading} />
        </div>
      </main>
    </div>
  );
};

export default Index;
