export interface StatusModel {
    description: {
        text: string
    },
    players: {
        max: number,
        online: number,
        sample:
            {
                name: string,
                uuid: string
            }[] | null
    },
    version: {
        name: string,
        protocol: number
    },
    favicon: string,
    time: number
}