import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './components/app/app.component';
import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './components/home/home.component';
import { ServiceRequestModule } from './components/service-request/service-requests.module';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ServiceRequestModule,
        AppRoutingModule,
        StoreModule.forRoot({}),
        StoreDevtoolsModule.instrument({
            maxAge: 25 //  Retains last 25 states
        }),
    ],
    declarations: [
        AppComponent,
        HomeComponent
    ],
})
export class AppModuleShared {
}
