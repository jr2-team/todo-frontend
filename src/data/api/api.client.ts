import { RestClient } from 'typed-rest-client'

const initClient = () => {
    const client = new RestClient(
        'TODO API Client',
        'http://127.0.0.1:8080/api/v1',
    )
    return client
}

class ApiClientImpl {
    private restClient: RestClient

    constructor() {
        this.restClient = initClient()
    }

    public get = async <T>(resource: string) => {
        return this.restClient.get<T>(resource)
    }

    public create = async <T>(resource: string, resources: any) => {
        return this.restClient.create<T>(resource, resources)
    }

    public update = async <T>(resource: string, resources: any) => {
        return this.restClient.create<T>(resource, resources)
    }

    public delete = async (resource: string) => {
        return this.restClient.del(resource)
    }
}

const ApiClient = new ApiClientImpl()

export default ApiClient