import { ArticleListComponent } from './pages/articleList/articleList';
import { ListComponent } from './pages/list/list.component';
import { LoginPage } from './pages/login/login';

export const routes = [
    { path: "", component: LoginPage },
    { path: "list", component: ListComponent }
];

export const navigatableComponents = [
    LoginPage,ListComponent,ArticleListComponent
];