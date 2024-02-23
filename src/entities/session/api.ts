import { requestURL } from "@entities/session/config";
import { api } from "@shared/api";

export const login = async (email: string, password: string) => {
    return api.post(requestURL.login, { email, password });
};
