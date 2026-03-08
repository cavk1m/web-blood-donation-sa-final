// Sample types and interfaces
export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Donation {
  id: string;
  userId: string;
  date: Date;
  type: string;
}