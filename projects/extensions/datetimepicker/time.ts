import {
  AfterContentInit,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { DatetimeAdapter } from '@ng-matero/extensions/core';
import { isObservable } from 'rxjs';
import { MtxAmPm } from './calendar';
import { MtxClock, MtxClockView } from './clock';
import { MtxDatetimepickerFilterType } from './datetimepicker-filtertype';

@Component({
  selector: 'mtx-time',
  templateUrl: 'time.html',
  styleUrls: ['time.scss'],
  host: {
    '[class.mtx-time]': 'true',
    'role': 'clock',
  },
  exportAs: 'mtxTime',
  encapsulation: ViewEncapsulation.None,
})
export class MtxTime<D> {
  /** A function used to filter which dates are selectable. */
  @Input() dateFilter!: (date: D, type: MtxDatetimepickerFilterType) => boolean;

  /** Step over minutes. */
  @Input() interval: number = 1;

  /** Whether the clock uses 12 hour format. */
  @Input() twelvehour: boolean = false;

  /** Emits when the currently selected date changes. */
  @Output() hourChange = new EventEmitter<D>();
  @Output() minuteChange = new EventEmitter<D>();
  @Output() viewChanged = new EventEmitter<MtxClockView>();

  @Output() confirm = new EventEmitter<D | null | void>();

  @Output() clockViewChanged = new EventEmitter<MtxClockView>();

  @ContentChild(MtxClock<D>) clock: undefined | MtxClock<D>;
  constructor(private _adapter: DatetimeAdapter<D>) {}

  @Input()
  get activeDate(): D {
    return this._activeDate;
  }
  set activeDate(value: D) {
    this._activeDate = this._adapter.clampDate(value, this.minDate, this.maxDate);
  }
  private _activeDate!: D;

  /** The currently selected date. */
  @Input()
  get selected(): D | null {
    return this._selected;
  }
  set selected(value: D | null) {
    this._selected = this._adapter.getValidDateOrNull(this._adapter.deserialize(value));
    if (this._selected) {
      this.activeDate = this._selected;
    }
  }
  private _selected!: D | null;

  /** The minimum selectable date. */
  @Input()
  get minDate(): D | null {
    return this._minDate;
  }

  set minDate(value: D | null) {
    this._minDate = this._adapter.getValidDateOrNull(this._adapter.deserialize(value));
  }
  private _minDate!: D | null;

  /** The maximum selectable date. */
  @Input()
  get maxDate(): D | null {
    return this._maxDate;
  }
  set maxDate(value: D | null) {
    this._maxDate = this._adapter.getValidDateOrNull(this._adapter.deserialize(value));
  }
  private _maxDate!: D | null;

  _ampm: MtxAmPm = '';
  @Input()
  set ampm(value: MtxAmPm) {
    this._ampm = value;
  }
  get ampm() {
    return this._ampm;
  }

  private _startView: MtxClockView = 'hour';
  @Input()
  set startView(value: MtxClockView) {
    this._startView = value;
  }
  get startView() {
    return this._startView;
  }

  get hour() {
    if (this.activeDate) {
      let hour = Number(this.prefixWithZero(this._adapter.getHour(this.activeDate)));

      if (this.twelvehour) {
        if (hour === 0) {
          hour = 24;
        }
        return hour > 12 ? hour - 12 : hour;
      }
      return hour;
    }

    return '00';
  }

  get minute() {
    if (this.activeDate) {
      return this.prefixWithZero(this._adapter.getMinute(this.activeDate));
    }

    return '00';
  }

  prefixWithZero(value: number) {
    if (value < 10) {
      return '0' + String(value);
    }

    return value;
  }

  validateNumberInput(e: KeyboardEvent) {
    const key = e?.key ?? null;
    if (isNaN(Number(key)) && key !== 'Enter') {
      e.preventDefault();
    }
  }

  validateNumberWithinBounds(e: KeyboardEvent) {
    const input = e.currentTarget as HTMLInputElement;
    const max = input?.max ?? Infinity;
    const value = input?.value ?? null;

    if (max && value) {
      if (Number(value) > Number(max)) {
        input.value = max;
      }
    }
  }

  handleHourChange(e: Event) {
    const input = e.currentTarget as HTMLInputElement;
    const value = Number(input.value);
    this._handleHourChange(value);
  }

  _handleHourChange(value: number) {
    if ((value || value === 0) && !isNaN(value) && this.selected) {
      const newValue = this._adapter.createDatetime(
        this._adapter.getYear(this.activeDate),
        this._adapter.getMonth(this.activeDate),
        this._adapter.getDate(this.activeDate),
        this.updateHourForAmPm(value),
        this._adapter.getMinute(this.activeDate)
      );

      this.hourChange.emit(newValue);
    }
  }

  updateHourForAmPm(value: number) {
    if (this.twelvehour && this.ampm === 'PM') {
      const newValue = value + 12;

      if (newValue > 23) {
        return 0;
      }
      return newValue;
    }

    return value;
  }

  handleMinuteChange(e: Event) {
    const input = e.currentTarget as HTMLInputElement;
    const value = Number(input.value);
    this._handleMinuteChange(value);
  }

  _handleMinuteChange(value: number) {
    if ((value || value === 0) && !isNaN(value) && this.selected) {
      const newValue = this._adapter.createDatetime(
        this._adapter.getYear(this.activeDate),
        this._adapter.getMonth(this.activeDate),
        this._adapter.getDate(this.activeDate),
        this._adapter.getHour(this._activeDate),
        value
      );
      this.minuteChange.emit(newValue);
    }
  }

  handleConfirmation() {
    this.confirm.emit(this.selected);
  }

  handleActiveDateChange(value: D) {
    this.activeDate = value;
  }

  handleSelectedChange(value: D) {
    if (this.startView === 'hour') {
      this.startView = 'minute';
      this._handleHourChange(this._adapter.getHour(value));
    } else {
      this._handleMinuteChange(this._adapter.getMinute(value));
    }
    this.activeDate = value;
  }

  focusHour() {
    this._startView = 'hour';
    this.clockViewChanged.emit('hour');
  }

  focusMinute() {
    this._startView = 'minute';
    this.clockViewChanged.emit('minute');
  }
}
