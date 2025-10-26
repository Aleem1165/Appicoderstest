import axios from "axios";
import { GetUsersResponse } from "../../../types/Api.types";

const headers = {
    'Content-Type': 'application/json',
};

export const handleGetAllUsers = async (): Promise<GetUsersResponse> => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users', {
        headers: {
            ...headers,
        },
    });
    return response;
};