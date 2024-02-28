import { axios } from "libs";
import { LoginData } from "models";
import { authEndPoints } from "./config";

export const login = async (data: LoginData) => {
    const response = await axios.post(authEndPoints.login, data);
    return response.data;
};
