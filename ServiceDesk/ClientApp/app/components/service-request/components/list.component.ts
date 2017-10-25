import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { ServiceRequest } from '../service-request.models';
import { ServiceRequestService } from '../service-request.service';
import { ServiceRequestState } from '../store/service-request.state';
import * as ServiceRequestActions from '../store/service-request.actions';
 
@Component({
    selector: 'sr-list',
    templateUrl: './list.component.html'
})
 
export class ServiceRequestListComponent implements OnInit {
    serviceRequest: ServiceRequest;
    group = 'group';
    serviceRequestState$: Observable<ServiceRequestState>;
 
    constructor(private store: Store<any>, private service: ServiceRequestService) {
        this.serviceRequestState$ = this.store.select<ServiceRequestState>(state => state.serviceDesk.serviceRequests);
        this.serviceRequest = new ServiceRequest('', '', 'me', this.group);
    }
 
    public sendServiceRequest(): void {
        this.serviceRequest.category = this.group;
        this.service.send(this.serviceRequest);
        this.store.dispatch(new ServiceRequestActions.SendServiceRequestAction(this.serviceRequest));
    }
 
    public join(): void {
        this.service.joinGroup(this.group);
        this.store.dispatch(new ServiceRequestActions.JoinGroupAction(this.group));
    }
 
    public leave(): void {
        this.service.leaveGroup(this.group);
        this.store.dispatch(new ServiceRequestActions.LeaveGroupAction(this.group));
    }
 
    ngOnInit() {
    }
}
