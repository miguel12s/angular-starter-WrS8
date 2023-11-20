import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,

    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('./login/login.module').then((m) => m.LoginModule),
      },
      {
        path: 'registro',
        loadChildren: () =>
          import('./registro/registro.module').then((m) => m.RegistroModule),
      },{
        path: 'recuperar',
        loadChildren: () =>
          import('./recuperar/recuperar.module').then((m) => m.RecuperarModule),
      },{
        path: 'chat-bot',
        loadChildren: () =>
          import('./chat-bot/chat-bot.module').then((m) => m.ChatBotModule),
      },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
