import axios from 'axios';

export default class RestService {
    private dummyApiData = JSON.parse('@/services/dummy-data/data.json');

    public retrieve(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            axios
                .get(this.dummyApiData)
                .then((res: any) => {
                    resolve(res);
                })
                .catch((err: any) => {
                    reject(err);
                });
        });
    }

    public delete(row: any): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            axios
                .delete(`${this.dummyApiData}/${row}`)
                .then((res: any) => {
                    resolve(res);
                })
                .catch((err: any) => {
                    reject(err);
                });
        });
    }

    public create(entity: any): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            axios
                .post(`${this.dummyApiData}`, entity)
                .then((res: any) => {
                    resolve(res);
                })
                .catch((err: any) => {
                    reject(err);
                });
        });
    }

    public update(entity: any): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            axios
                .put(`${this.dummyApiData}`, entity)
                .then((res: any) => {
                    resolve(res);
                })
                .catch((err: any) => {
                    reject(err);
                });
        });
    }
}
