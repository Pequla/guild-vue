import axios from "axios"

const client = axios.create({
    baseURL: 'https://api.pequla.com/guildcache',
    headers: {
        'Accept': 'application/json'
    }
})

export class MainService {
    static async retrieveAll() {
        return await client.get('/data')
    }

    static async retrieveById(id: number) {
        return await client.get('/data/' + id)
    }

    static async retrieveStats() {
        return await client.get('/data/stats')
    }

    static async updatePlayer(uuid: string) {
        return await client.post('/sync/player/' + uuid)
    }

    static async updateAll() {
        return await client.post('/sync/all');
    }
}