import { http } from "../api/http";
import { Alert } from "../models/alert";

export const AlertService = {
    getAll: async () => await http<{data: Alert[]}>("alerts").then(res => res.data),
    getById: async (id: string) => await http<any>(`/alerts/${id}`),
    create: (data: any) =>
        http<any>("/alerts", {
            method: "POST",
            body: JSON.stringify(data)
        }),
    update: (id: string, data: any) =>
        http<any>(`/alerts/${id}`, {
            method: "PUT",
            body: JSON.stringify(data)
        }),
    remove: (id: string) =>
        http<void>(`/alerts/${id}`, {
            method: "DELETE"
        }),
}