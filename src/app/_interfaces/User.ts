import { Role } from './Role'
export interface User {
    userId: string,
    password: string,
    role: Role
}