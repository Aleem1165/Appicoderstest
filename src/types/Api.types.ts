import { AxiosResponse } from "axios";
import { User } from "./User.types";

export type GetUsersResponse = AxiosResponse<User[]>;