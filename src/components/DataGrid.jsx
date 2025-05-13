
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

const DataGrid = ({ data, isLoading }) => {
  return (
    <div className="overflow-x-auto">
      <Table className="border-collapse w-full">
        <TableHeader>
          <TableRow className="bg-slate-100 dark:bg-slate-700">
            <TableHead className="px-4 py-3 text-left border border-slate-200 dark:border-slate-600">Time Stamp</TableHead>
            <TableHead className="px-4 py-3 text-left border border-slate-200 dark:border-slate-600">Employee Name</TableHead>
            <TableHead className="px-4 py-3 text-left border border-slate-200 dark:border-slate-600">Employee ID</TableHead>
            <TableHead className="px-4 py-3 text-left border border-slate-200 dark:border-slate-600">Employee Status</TableHead>
            <TableHead className="px-4 py-3 text-left border border-slate-200 dark:border-slate-600">Slack ID</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            // Loading state
            Array(5).fill(0).map((_, index) => (
              <TableRow key={`loading-${index}`}>
                {Array(5).fill(0).map((_, cellIndex) => (
                  <TableCell key={`cell-${index}-${cellIndex}`} className="p-4 border border-slate-200 dark:border-slate-600">
                    <Skeleton className="h-5 w-full" />
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : data.length > 0 ? (
            // Data rows
            data.map((employee) => (
              <TableRow key={employee.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                <TableCell className="px-4 py-3 border border-slate-200 dark:border-slate-600">{employee.timestamp}</TableCell>
                <TableCell className="px-4 py-3 border border-slate-200 dark:border-slate-600">{employee.name}</TableCell>
                <TableCell className="px-4 py-3 border border-slate-200 dark:border-slate-600">{employee.id}</TableCell>
                <TableCell className="px-4 py-3 border border-slate-200 dark:border-slate-600">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    employee.status === 'Active' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100' 
                      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100'
                  }`}>
                    {employee.status}
                  </span>
                </TableCell>
                <TableCell className="px-4 py-3 border border-slate-200 dark:border-slate-600">{employee.slackId}</TableCell>
              </TableRow>
            ))
          ) : (
            // Empty state
            <TableRow>
              <TableCell colSpan={5} className="text-center py-8 text-slate-500 dark:text-slate-400">
                No employee data available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default DataGrid;
