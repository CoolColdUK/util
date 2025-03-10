import {AxiosResponse} from 'axios';

export type GDriveResponse<T> = Promise<AxiosResponse<T>>;
