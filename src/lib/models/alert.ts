export interface Alert {
    "id": number,
    "title": string,
    "content": string,
    "priority": string,
    "status": string,
    "start": string,
    "end": string,
    "local": string,
    "time": string,
    "notifications": boolean,
    "permanent": boolean,
    "createdAt": string,
    "updatedAt": string,
    "ministries": Array<any>
}