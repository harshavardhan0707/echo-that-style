
import { useState, useEffect } from "react";
import DataGrid from "@/components/DataGrid";
import Header from "@/components/Header";
import ControlPanel from "@/components/ControlPanel";
import { mockEmployeeData } from "@/data/mockData";
import { toast } from "sonner";

// Mock API URL - replace with your actual API endpoint
const API_URL = "https://api.example.com/employees";

const Index = () => {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Function to fetch employees data from API
  const fetchEmployeesData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const result = await response.json();
      
      if (result.success) {
        setEmployees(result.data);
        toast.success("Data loaded successfully");
      } else {
        toast.error(result.message || "Failed to load data");
        // Fallback to mock data if API fails
        setEmployees(mockEmployeeData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to load data. Using mock data instead.");
      // Fallback to mock data if API fails
      setEmployees(mockEmployeeData);
    } finally {
      setIsLoading(false);
    }
  };

  // Load data when component mounts
  useEffect(() => {
    fetchEmployeesData();
  }, []);

  const handleGeneralGrid = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const result = await response.json();
      
      if (result.success) {
        setEmployees(result.data);
        toast.success("General grid data loaded successfully");
      } else {
        toast.error(result.message || "Failed to load general grid data");
      }
    } catch (error) {
      console.error("Error fetching general grid data:", error);
      toast.error("Failed to load general grid data");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRefreshGrid = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}/refresh`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const result = await response.json();
      
      if (result.success) {
        setEmployees(result.data);
        toast.success("Grid data refreshed successfully");
      } else {
        toast.error(result.message || "Failed to refresh grid data");
      }
    } catch (error) {
      console.error("Error refreshing grid data:", error);
      toast.error("Failed to refresh grid data");
      // Simulate refresh with mock data for demo purposes
      setTimeout(() => {
        setEmployees([...mockEmployeeData]);
        setIsLoading(false);
      }, 800);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRefreshDatabase = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}/database`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const result = await response.json();
      
      if (result.success) {
        toast.success("Database refreshed successfully");
      } else {
        toast.error(result.message || "Failed to refresh database");
      }
    } catch (error) {
      console.error("Error refreshing database:", error);
      toast.error("Failed to refresh database");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <ControlPanel 
          onGeneralGrid={handleGeneralGrid}
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
