import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  myDateValue: Date;

  ngOnInit() {
    this.myDateValue = new Date();
  }

  onDateChange(newDate: Date) {
    console.log(newDate);
  }

  datePickerConfig: Record<string, any> = {
    adaptivePosition: true,
    containerClass: 'theme-default',
    dateInputFormat: 'MM/DD/YYYY',
    showTodayButton: true,
    todayPosition: 'left',
    showClearButton: true,
    clearPosition: 'left',
    returnFocusToInput: true,
    showWeekNumbers: false,
  };
}
