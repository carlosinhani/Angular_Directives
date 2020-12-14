import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { DiretivaNgswitchComponent } from './diretiva-ngswitch/diretiva-ngswitch.component';
import { DiretivaNgforComponent } from './diretiva-ngfor/diretiva-ngfor.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { DiretivaNgstyleComponent } from './diretiva-ngstyle/diretiva-ngstyle.component';
import { OperadorElvisComponent } from './operador-elvis/operador-elvis.component';
import { ContentComponent } from './ngcontent/content.component';
import { FundoAmareloDirective } from './shared/fundo-amarelo.directive';
import { DiretivasCustmizadasComponent } from './diretivas-custmizadas/diretivas-custmizadas.component';
import { HighlightMouseDirective } from './shared/highlight-mouse.directive';
import { HeighlightDirective } from './shared/heighlight.directive';
import { NgElseDirective } from './shared/ng-else.directive';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgifComponent,
    DiretivaNgswitchComponent,
    DiretivaNgforComponent,
    NgClassComponent,
    DiretivaNgstyleComponent,
    OperadorElvisComponent,
    ContentComponent,
    FundoAmareloDirective,
    DiretivasCustmizadasComponent,
    HighlightMouseDirective,
    HeighlightDirective,
    NgElseDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
