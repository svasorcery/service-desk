import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './components/home/home.component';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
        HomeComponent
    ],
})
export class AppModuleShared {
}
