import { RxHR } from '@akanass/rx-http-request'

const commonOptions = {
    headers: {
        'User-Agent': 'Rx-Http-Request',
    },
    json: true,
}

const baseUrl = 'http://127.0.0.1:8080/api/v1'

class ApiClientImpl {
    public get = <T>(resource: string) =>
        RxHR.get<T>(`${baseUrl}/${resource}`, commonOptions)

    public create = <T>(resource: string, resources: T) => {
        const postOptions = {
            ...commonOptions,
            body: resources,
        }
        return RxHR.post<T>(`${baseUrl}/${resource}`, postOptions)
    }

    public update = <T>(resource: string, resources: T) => {
        const updateOptions = {
            ...commonOptions,
            body: resources,
        }
        return RxHR.put<T>(`${baseUrl}/${resource}`, updateOptions)
    }

    public delete = (resource: string) => {
        return RxHR.delete(`${baseUrl}/${resource}`)
    }
}

const ApiClient = new ApiClientImpl()

export default ApiClient