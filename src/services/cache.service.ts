import axios from "axios"
import {DataModel} from "@/models/data.model";
import {StatsModel} from "@/models/stats.model";
import {StatusModel} from "@/models/status.model";

const client = axios.create({
    baseURL: 'https://api.beocraft.net',
    headers: {
        'Accept': 'application/json'
    },
    validateStatus: function (status: number) {
        return status === 200
    }
})

export class CacheService {
    static async retrieveAll() {
        return await client.get<DataModel[]>('/data')
    }

    static async retrieveByUuid(uuid: string) {
        return await client.get<DataModel>('/data/uuid/' + uuid)
    }

    static async retrieveStats() {
        return await client.get<StatsModel>('/data/stats')
    }

    static async updatePlayer(uuid: string) {
        return await client.post('/sync/player/' + uuid)
    }

    static async retrieveServerStatus() {
        return await client.get<StatusModel>('/status/winterland.pequla.com')
    }
}