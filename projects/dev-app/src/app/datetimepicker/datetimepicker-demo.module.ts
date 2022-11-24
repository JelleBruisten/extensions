import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';

import { MtxDatetimepickerModule } from '@ng-matero/extensions/datetimepicker';

import { DatetimepickerDemoComponent } from './datetimepicker-demo.component';
import { DateAdapter } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DatetimeAdapter, MTX_DATETIME_FORMATS } from '@ng-matero/extensions/core';
import {
  LuxonDatetimeAdapter,
  MtxLuxonDatetimeModule,
  MTX_LUXON_DATETIME_FORMATS,
} from '@ng-matero/extensions-luxon-adapter';
import { LuxonDateAdapter } from '@angular/material-luxon-adapter';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: DatetimepickerDemoComponent }]),
    MtxDatetimepickerModule,
  ],
  declarations: [DatetimepickerDemoComponent],
  providers: [
    {
      provide: DateAdapter,
      useClass: LuxonDateAdapter,
    },
    {
      provide: DatetimeAdapter,
      useClass: LuxonDatetimeAdapter,
    },
    {
      provide: MTX_DATETIME_FORMATS,
      useValue: MTX_LUXON_DATETIME_FORMATS,
    },
  ],
})
export class DatetimepickerDemoModule {}
