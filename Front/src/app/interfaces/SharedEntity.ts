import { User } from "./User";

export interface SharedEntity {
    user: User;
    isOnline: boolean;
}