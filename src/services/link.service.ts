import axios from "axios"

const client = axios.create({
    baseURL: 'https://link.samifying.com/api',
    headers: {
        'Accept': 'application/json'
    }
})

export class LinkService {
    static async retrieveStatus(addr: string) {
        return client.get('/status/' + addr)
    }
}