import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MultipleWinnersResolver as MultipleWinnersResolver } from "./card-winners-multiple/shared/multiple-winners.resolver";
import { TopWinnersResolver } from "./card-winners-top/shared/top-winners.resolve";
import { IntervalWinnersResolver } from "./card-interval/shared/interval-winners.resolver";

const routes: Route[] = [
    {
        path: '',
        component: DashboardComponent,
        resolve: {
            multipleWinners: MultipleWinnersResolver,
            topWinners: TopWinnersResolver,
            IntervalWinners: IntervalWinnersResolver
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {}