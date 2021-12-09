import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';
import { TextEditorComponent } from './text-editor.component';

@NgModule({
  declarations: [TextEditorComponent],
  imports: [RichTextEditorModule, CommonModule],
  exports: [TextEditorComponent],
})
export class TextEditorModule {}
