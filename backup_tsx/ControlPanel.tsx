
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

interface ControlPanelProps {
  onGeneralGrid: () => void;
  onRefreshGrid: () => void;
  onRefreshDatabase: () => void;
  isLoading: boolean;
}

const ControlPanel = ({ 
  onGeneralGrid, 
  onRefreshGrid, 
  onRefreshDatabase, 
  isLoading 
}: ControlPanelProps) => {
  return (
    <div className="flex flex-wrap gap-4 mb-4">
      <Button 
        variant="outline" 
        className="bg-slate-200 hover:bg-slate-300 text-slate-800 border-slate-300 h-12 px-6"
        onClick={onGeneralGrid}
        disabled={isLoading}
      >
        {isLoading ? (
          <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
        ) : null}
        General Grid
      </Button>
      
      <Button 
        variant="outline" 
        className="bg-slate-200 hover:bg-slate-300 text-slate-800 border-slate-300 h-12 px-6"
        onClick={onRefreshGrid}
        disabled={isLoading}
      >
        {isLoading ? (
          <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
        ) : null}
        Refresh Grid
      </Button>
      
      <Button 
        variant="outline" 
        className="bg-slate-200 hover:bg-slate-300 text-slate-800 border-slate-300 h-12 px-6"
        onClick={onRefreshDatabase}
        disabled={isLoading}
      >
        {isLoading ? (
          <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
        ) : null}
        Refresh Database
      </Button>
    </div>
  );
};

export default ControlPanel;
