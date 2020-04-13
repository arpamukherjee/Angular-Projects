import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { TransformToSpacesPipe } from 'src/app/util/transform-to-space.pipe';
import { StarComponent } from 'src/app/shared/star.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { WelcomeComponent } from 'src/app/home/welcome.component';
import { ProductDetailGuard } from 'src/app/product-detail/product-detail.guard';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    TransformToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path : 'products', component : ProductListComponent},
      {path : 'product/:id', canActivate : [ProductDetailGuard], component : ProductDetailComponent},
      {path : 'welcome', component : WelcomeComponent},
      {path : '', redirectTo : 'welcome', pathMatch: 'full'},
      {path : '**', redirectTo : 'welcome', pathMatch: 'full'}
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
