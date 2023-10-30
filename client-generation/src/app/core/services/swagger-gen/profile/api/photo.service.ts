/**
 * Profile.API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { DeletePhotoDTO } from '../model/deletePhotoDTO';
import { Response } from '../model/response';
import { SubjectUpdate } from '../model/subjectUpdate';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class PhotoService {

    protected basePath = '/';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Add photo
     * 
     * @param accountId 
     * @param file 
     * @param entityType 
     * @param subjectUpdate 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addPhotoForm(accountId?: string, file?: Blob, entityType?: number, subjectUpdate?: SubjectUpdate, observe?: 'body', reportProgress?: boolean): Observable<number>;
    public addPhotoForm(accountId?: string, file?: Blob, entityType?: number, subjectUpdate?: SubjectUpdate, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<number>>;
    public addPhotoForm(accountId?: string, file?: Blob, entityType?: number, subjectUpdate?: SubjectUpdate, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<number>>;
    public addPhotoForm(accountId?: string, file?: Blob, entityType?: number, subjectUpdate?: SubjectUpdate, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {





        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'multipart/form-data'
        ];

        const canConsumeForm = this.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): void; };
        let useForm = false;
        let convertFormParamsToString = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        // see https://stackoverflow.com/questions/4007969/application-x-www-form-urlencoded-or-multipart-form-data
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        }

        if (accountId !== undefined) {
            formParams = formParams.append('AccountId', <any>accountId) as any || formParams;
        }
        if (file !== undefined) {
            formParams = formParams.append('File', <any>file) as any || formParams;
        }
        if (entityType !== undefined) {
            formParams = formParams.append('EntityType', <any>entityType) as any || formParams;
        }
        if (subjectUpdate !== undefined) {
            formParams = formParams.append('SubjectUpdate', <any>subjectUpdate) as any || formParams;
        }

        return this.httpClient.request<number>('post',`${this.basePath}/api/Photo`,
            {
                body: convertFormParamsToString ? formParams.toString() : formParams,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Delete photo 
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deletePhoto(body?: DeletePhotoDTO, observe?: 'body', reportProgress?: boolean): Observable<Response>;
    public deletePhoto(body?: DeletePhotoDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Response>>;
    public deletePhoto(body?: DeletePhotoDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Response>>;
    public deletePhoto(body?: DeletePhotoDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<Response>('delete',`${this.basePath}/api/Photo`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Update photo 
     * 
     * @param accountId 
     * @param file 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updatePhotoForm(accountId?: string, file?: Blob, observe?: 'body', reportProgress?: boolean): Observable<Response>;
    public updatePhotoForm(accountId?: string, file?: Blob, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Response>>;
    public updatePhotoForm(accountId?: string, file?: Blob, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Response>>;
    public updatePhotoForm(accountId?: string, file?: Blob, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'multipart/form-data'
        ];

        const canConsumeForm = this.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): void; };
        let useForm = false;
        let convertFormParamsToString = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        // see https://stackoverflow.com/questions/4007969/application-x-www-form-urlencoded-or-multipart-form-data
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        }

        if (accountId !== undefined) {
            formParams = formParams.append('AccountId', <any>accountId) as any || formParams;
        }
        if (file !== undefined) {
            formParams = formParams.append('File', <any>file) as any || formParams;
        }

        return this.httpClient.request<Response>('patch',`${this.basePath}/api/Photo`,
            {
                body: convertFormParamsToString ? formParams.toString() : formParams,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
