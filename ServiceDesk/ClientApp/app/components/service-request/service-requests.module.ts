import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { ServiceRequestRoutingModule, serviceRequestComponents } from './service-request.routing';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ServiceRequestRoutingModule,
    ],
    declarations: [
        ...serviceRequestComponents
    ],
    providers: [
    ],
    exports: [
        
    ],
})
export class ServiceRequestModule { }
