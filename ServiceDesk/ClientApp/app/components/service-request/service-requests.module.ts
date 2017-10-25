import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { ServiceRequestRoutingModule, serviceRequestComponents } from './service-request.routing';
import { ServiceRequestService } from './service-request.service';
import { serviceRequestReducer } from './store/service-request.reducer';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ServiceRequestRoutingModule,
        StoreModule.forFeature('serviceDesk', {
            serviceRequests: serviceRequestReducer,
        }),
    ],
    declarations: [
        ...serviceRequestComponents
    ],
    providers: [
        ServiceRequestService
    ],
    exports: [
        
    ],
})
export class ServiceRequestModule { }
