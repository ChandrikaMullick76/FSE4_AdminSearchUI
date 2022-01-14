import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchSkillComponent } from './search-skill/search-skill.component';
import { TestComponent } from './test/test.component';
import { SearchAdminService } from './shared/search-admin.service';
@NgModule({
  declarations: [
    AppComponent,
    SearchSkillComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SearchAdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
