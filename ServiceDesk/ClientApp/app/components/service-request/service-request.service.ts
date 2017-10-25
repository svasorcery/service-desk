import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HubConnection } from '@aspnet/signalr-client';
import { Store } from '@ngrx/store';

import { ServiceRequest } from './service-request.models';
import { ServiceRequestState } from './store/service-request.state';
import * as ServiceRequestActions from './store/service-request.actions';

@Injectable()
export class ServiceRequestService {

    private _hubConnection: HubConnection;

    constructor(private store: Store<any>) {
        this.init();
    }

    public send(sr: ServiceRequest): ServiceRequest {
        this._hubConnection.invoke('Send', sr);
        return sr;
    }

    public joinGroup(group: string): void {
        this._hubConnection.invoke('JoinGroup', group);
    }

    public leaveGroup(group: string): void {
        this._hubConnection.invoke('LeaveGroup', group);
    }

    private init() {

        this._hubConnection = new HubConnection('/requests');

        this._hubConnection.on('Send', (sr: ServiceRequest) => {
            this.store.dispatch(new ServiceRequestActions.ReceivedServiceRequestAction(sr));
        });

        this._hubConnection.on('JoinGroup', (data: string) => {
            this.store.dispatch(new ServiceRequestActions.ReceivedGroupJoinedAction(data));
        });

        this._hubConnection.on('LeaveGroup', (data: string) => {
            this.store.dispatch(new ServiceRequestActions.ReceivedGroupLeftAction(data));
        });

        this._hubConnection.start()
            .then(() => console.log('Hub connection started'))
            .catch(error => console.log('Error while establishing connection'));
    }

}
