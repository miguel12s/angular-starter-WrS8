import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppModule } from '../app.module';
import { HeroComponent } from '../components/hero/hero.component';
import { ServiciosComponent } from '../components/servicios/servicios.component';
import { ContactComponent } from '../components/contact/contact.component';
import { HeaderComponent } from '../shared/header/header.component';
import { RecuperarComponent } from './recuperar/recuperar.component';
import { ChatBotComponent } from './chat-bot/chat-bot.component';


@NgModule({
    declarations: [
        PagesComponent,
        WelcomeComponent, HeroComponent,ServiciosComponent,ContactComponent, ChatBotComponent, 
    ],
    imports: [
        CommonModule,
        PagesRoutingModule,SharedModule
        ,FormsModule,ReactiveFormsModule
    ]
})
export class PagesModule { }
