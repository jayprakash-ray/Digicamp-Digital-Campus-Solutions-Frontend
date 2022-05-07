import { Role } from './Role'
export interface User {
    userId: string,
    mobile1: number,
    mobile2: number,
    rollNumber: string,
    name: string,
    password: string,
    role: Role
}