import { ChatComponent } from './pages/chat/chat.component';
import { LoginPage } from './pages/login/login';

export const routes = [
    { path: "", component: LoginPage },
    { path: "chat", component: ChatComponent }
];

export const navigatableComponents = [
    LoginPage,ChatComponent
];