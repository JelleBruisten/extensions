import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { MtxDatetimepickerFilterType } from '@ng-matero/extensions/datetimepicker';
import { DateTime } from 'luxon';

@Component({
  selector: 'dev-datetimepicker-demo',
  templateUrl: 'datetimepicker-demo.component.html',
  styleUrls: ['datetimepicker-demo.component.scss'],
})
export class DatetimepickerDemoComponent implements OnInit, OnDestroy {
  type = 'moment';

  group: UntypedFormGroup;
  today: DateTime;
  tomorrow: DateTime;
  min: DateTime;
  max: DateTime;
  start: DateTime;
  filter: (date: DateTime | null, type: MtxDatetimepickerFilterType) => boolean;

  translateSubscription!: Subscription;

  constructor(
    fb: UntypedFormBuilder,
    private dateAdapter: DateAdapter<any>,
    private translate: TranslateService
  ) {
    this.today = DateTime.now();
    this.tomorrow = this.today.plus({ day: 1 });
    this.min = this.today.set({ year: 2018, month: 10, day: 3, hour: 11, minute: 10 });
    this.max = this.min.set({
      day: 4,
      minute: 45,
    });
    this.start = this.today.set({ year: 1930, month: 9, day: 28 });
    this.filter = (date: DateTime | null, type: MtxDatetimepickerFilterType) => {
      if (date === null) {
        return true;
      }
      switch (type) {
        case MtxDatetimepickerFilterType.DATE:
          return date.year % 2 === 0 && date.month % 2 === 0 && date.day % 2 === 0;
        case MtxDatetimepickerFilterType.HOUR:
          return date.hour % 2 === 0;
        case MtxDatetimepickerFilterType.MINUTE:
          return date.minute % 2 === 0;
      }
    };

    this.group = fb.group({
      dateTime: [DateTime.now(), Validators.required],
      dateTimeYear: [null, Validators.required],
      date: [null, Validators.required],
      time: [null, Validators.required],
      timeAMPM: [null, Validators.required],
      month: [null, Validators.required],
      year: [null, Validators.required],
      mintest: [this.today, Validators.required],
      filtertest: [this.today, Validators.required],
      touch: [null, Validators.required],
    });
  }

  selectedDate: Date | null = null;
  selectedTime: Date | null = null;

  ngOnInit() {
    this.translateSubscription = this.translate.onLangChange.subscribe((res: { lang: any }) => {
      this.dateAdapter.setLocale(res.lang);
    });
  }

  ngOnDestroy() {
    this.translateSubscription.unsubscribe();
  }
}
