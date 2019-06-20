import { RxHR } from '@akanass/rx-http-request'

const options = {
    headers: {
        'User-Agent': 'Rx-Http-Request',
    },
    json: true,
}

const baseUrl = 'http://127.0.0.1:8080/api/v1'

class ApiClientImpl {
    public get = <T>(resource: string) =>
        RxHR.get<T>(`${baseUrl}/${resource}`, options)
}

const ApiClient = new ApiClientImpl()

export default ApiClient