import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ServiceRequestComponent } from './components/service-request.component';
import { ServiceRequestListComponent } from './components/list.component';

export const serviceRequestRoutes: Routes = [
    {
        path: 'service-requests',
        component: ServiceRequestComponent,        
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: ServiceRequestListComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(serviceRequestRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        
    ]
})
export class ServiceRequestRoutingModule { }

export const serviceRequestComponents = [
    ServiceRequestComponent,
    ServiceRequestListComponent
];
