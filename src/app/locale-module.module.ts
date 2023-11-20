import { NgModule } from '@angular/core';
import { es_ES, NZ_I18N } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en';

registerLocaleData(localeEn);

@NgModule({
  providers: [{ provide: NZ_I18N, useValue: es_ES}],
})
export class LocaleModule { }
