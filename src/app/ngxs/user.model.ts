export interface User {
  id: number;
  name: string;
  registered: boolean;
}

export interface Registration {
  userId: number;
  name: string;
  date: string;
}
