import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export default class HttpUtils{
    constructor(private http: Http) { }
    get(url){
        console.log("start get"+url)
        return this.http.get(url)
            .map(response => response["_body"])
            .catch(this.handleErrors);
    }
    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}
