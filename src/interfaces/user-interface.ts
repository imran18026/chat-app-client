export interface UserType {
  _id: string;
  clerkUserId: string;
  name: string;
  userName: string;
  imageUrl: string;
  bio?: string;
  createdAt: Date;
  updatedAt: Date;
}
