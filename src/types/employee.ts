
export interface Employee {
  id: string;
  name: string;
  timestamp: string;
  status: 'Active' | 'Inactive';
  slackId: string;
}
