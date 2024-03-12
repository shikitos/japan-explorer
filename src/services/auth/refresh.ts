import { AxiosInstance } from "axios";

export const refresh = async (axios: AxiosInstance) => {
    const response = await axios.post("/auth/refresh");
    return response.data;
};
