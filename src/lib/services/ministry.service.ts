import { http } from "../api/http";
import { Ministry } from "../models/ministry";

export const MinistryService = {
    getAll: async () => await http<{data: Ministry[]}>("ministries").then(res => res.data),
    getOneById: async (id: number) => await http<{data: Ministry}>(`ministries/${id}`).then(res => res.data),
}