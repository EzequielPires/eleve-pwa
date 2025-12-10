export interface Ministry {
    "id": number,
    "name": string,
    "description": string,
    "image"?: string,
    "active": boolean,
    "createdAt": string,
    "updatedAt": string,
    "responsible": {
        "id": number,
        "name": string,
        "phone": string,
        "email": string,
        "role": any
    },
    "church": {
        "id": number,
        "name": string,
        "email": string
    }

}