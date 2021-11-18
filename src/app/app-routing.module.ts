import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LargeComponentExampleComponent } from './large-component-example/large-component-example.component';
import { MainPageComponent } from './main-page-component/main-page-component.component';
import { MediumComponentExampleComponent } from './medium-component-example/medium-component-example.component';

const routes: Routes = [
  { path: 'large-component', component: LargeComponentExampleComponent },
  { path: 'medium-component', component: MediumComponentExampleComponent },
  { path: '', component: MainPageComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
