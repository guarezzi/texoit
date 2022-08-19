import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";

const route: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardModule )
    },
    {
        path: 'list',
        loadChildren: () => import('./list/list.module').then( m => m.ListModule )
    }
];

@NgModule({
    imports: [RouterModule.forRoot(route)],
    exports: [RouterModule]
})
export class AppRoutingModule {}