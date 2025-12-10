import { http } from "../api/http";

export const PrayerService = {
    getAll: async () => await http<{data: Array<any>}>("prayers").then(res => res.data),
    getById: (id: string) => http<any>(`/users/${id}`),
    create: (data: any) =>
        http<any>("/users", {
            method: "POST",
            body: JSON.stringify(data)
        }),
    update: (id: string, data: any) =>
        http<any>(`/users/${id}`, {
            method: "PUT",
            body: JSON.stringify(data)
        }),
    remove: (id: string) =>
        http<void>(`/users/${id}`, {
            method: "DELETE"
        }),
}