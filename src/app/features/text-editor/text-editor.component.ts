import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  HtmlEditorService,
  ImageService,
  LinkService,
  TableService,
  ToolbarService,
} from '@syncfusion/ej2-angular-richtexteditor';
import { L10n } from '@syncfusion/ej2-base';

// Loading italian translations
L10n.load({
  it: {
    richtexteditor: {
      // Working
      bold: 'Grassetto',
      italic: 'Corsivo',
      underline: 'Sottolineato',
      strikethrough: 'Barrato',
      undo: 'Annulla ultima modifica',
      redo: 'Riapplica ultima modifica',
      fontSize: 'Dimensione testo',
      fontColor: 'Colore testo',
      backgroundColor: 'Sfondo testo',
      subscript: 'Pedice',
      superscript: 'Apice',
      lowerCase: 'Minuscolo',
      upperCase: 'Maiuscolo',
      formats: 'Stile paragrafo',
      alignments: 'Allinea',
      createTable: 'Crea tabella',
      clearFormat: 'Cancella formattazione',
      // Not working
      alignmentAlignLeft: 'A sinistra', // this is not working either, how to set dropdown element translation?
      numberedList: 'Elenco numerato',
      bulletedList: 'Elenco puntato',
      increaseIndent: 'Aumenta il rientro',
      decreaseIndent: 'Diminuisci il rientro',
      insertLink: 'Aggiungi collegamento',
      insertImage: 'Aggiungi immagine',
      codeView: 'Mostra codice HTML',
      maximize: 'Tutto schermo',
      minimize: 'Chiudi tutto schermo'
    },
  },
});

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss'],
  providers: [
    ToolbarService,
    LinkService,
    ImageService,
    HtmlEditorService,
    TableService,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextEditorComponent),
      multi: true,
    },
  ],
})
export class TextEditorComponent implements ControlValueAccessor {
  value: string = '';

  tools: object = {
    items: [
      'Undo',
      'Redo',
      '|',
      'Bold',
      'Italic',
      'Underline',
      'StrikeThrough',
      '|',
      'FontName',
      'FontSize',
      'FontColor',
      'BackgroundColor',
      '|',
      'SubScript',
      'SuperScript',
      '|',
      'LowerCase',
      'UpperCase',
      '|',
      'Formats',
      'Alignments',
      '|',
      'OrderedList',
      'UnorderedList',
      '|',
      'Indent',
      'Outdent',
      '|',
      'CreateTable',
      'CreateLink',
      'Image',
      '|',
      'ClearFormat',
      'SourceCode',
      '|',
      'FullScreen',
    ],
  };

  onChange: any = (value: any) => {};
  onTouch: any = () => {};

  isDisabled: boolean = false;

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

  setDisabledState(val: boolean): void {
    this.isDisabled = val;
  }

  onEditorChange(change: { value: string, name: string}): void {
    console.info('Value change', change);
    this.onChange(change.value ?? `<p><br/></p>`);
    this.onTouch();
  }
}
