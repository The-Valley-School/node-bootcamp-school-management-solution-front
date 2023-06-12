import { ClassroomResponse } from "./Classroom";

export enum ROL {
  "STUDENT" = "STUDENT",
  "TEACHER" = "TEACHER",
  "PARENT" = "PARENT",
  "ADMIN" = "ADMIN",
}

export interface UserCreate {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  classroom?: string;
  children: string[];
  rol: ROL;
}

export interface UserResponse {
  _id: string;
  classroom?: ClassroomResponse;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  children: UserResponse[];
  rol: ROL;
}
