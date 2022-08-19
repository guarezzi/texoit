import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { ListComponent } from "./list/list.component";
import { MovieResolver } from "./shared/movie-list.resolver";

const routes: Route[] = [
    {
        path: '',
        component: ListComponent,
        resolve: {
            movieList: MovieResolver
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListRoutingModule {}