import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextEditorModule } from './features/text-editor/text-editor.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TextEditorModule,
    ReactiveFormsModule,
    RichTextEditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
