import { Component, Input } from '@angular/core';

import { IEmployee } from '@oasisdigital/app-schema';

@Component({
  selector: 'employee-detail-view',
  templateUrl: './employee-detail-view.component.html'
})
export class EmployeeDetailViewComponent {
  @Input() employee: IEmployee;
}
