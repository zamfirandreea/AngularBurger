import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BurgerComponent } from './burger/burger.component';
import { TopBreadComponent } from './top-bread/top-bread.component';
import { BottomBreadComponent } from './bottom-bread/bottom-bread.component';
import { SaladComponent } from './salad/salad.component';
import { CheeseComponent } from './cheese/cheese.component';
import { MeatComponent } from './meat/meat.component';

@NgModule({
  declarations: [
    AppComponent,
    BurgerComponent,
    TopBreadComponent,
    BottomBreadComponent,
    SaladComponent,
    CheeseComponent,
    MeatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
