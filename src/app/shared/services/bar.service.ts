import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { BarModel } from '../models/bar.model';

@Injectable()
export class BarService {
    private _barsUrl = '/api/bar.json';

    constructor(private http: Http) {}

    get(): Promise<BarModel[]> {
        return this.http.get(this._barsUrl)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}