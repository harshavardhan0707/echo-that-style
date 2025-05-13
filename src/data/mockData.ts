
import { Employee } from "@/types/employee";

export const mockEmployeeData: Employee[] = [
  {
    id: "EMP001",
    name: "John Smith",
    timestamp: "2023-05-13 09:23:12",
    status: "Active",
    slackId: "@johnsmith"
  },
  {
    id: "EMP002",
    name: "Jane Doe",
    timestamp: "2023-05-13 08:45:30",
    status: "Active",
    slackId: "@janedoe"
  },
  {
    id: "EMP003",
    name: "Michael Johnson",
    timestamp: "2023-05-12 14:22:45",
    status: "Inactive",
    slackId: "@mjohnson"
  },
  {
    id: "EMP004",
    name: "Emily Wilson",
    timestamp: "2023-05-12 10:11:08",
    status: "Active",
    slackId: "@ewilson"
  },
  {
    id: "EMP005",
    name: "Robert Brown",
    timestamp: "2023-05-11 16:05:22",
    status: "Active",
    slackId: "@rbrown"
  },
  {
    id: "EMP006",
    name: "Sarah Miller",
    timestamp: "2023-05-11 11:30:17",
    status: "Inactive",
    slackId: "@smiller"
  }
];
