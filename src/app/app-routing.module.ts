import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HelpRequestsComponent } from './help-requests/help-requests.component';

const routes: Routes = [
  { path: 'help-requests', component: HelpRequestsComponent },
  { path: 'help-requests/:id', component: HelpRequestsComponent },
  { path: '**', redirectTo: '/help-requests', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
