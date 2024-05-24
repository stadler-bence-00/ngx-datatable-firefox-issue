import { Component, NgModule, VERSION } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-root',
  template: `
     <div>
      <h1>Angular version: {{ name }}</h1>
      <ngx-datatable
        id="table"
        [rows]="rows"
        [columnMode]="'force'"
        [scrollbarH]="true"
      >
        <ng-container *ngFor="let col of displayedColumns; trackBy: trackByFn">
          <ngx-datatable-column
            [prop]="col.prop"
            [frozenLeft]="col.frozenLeft"
            [frozenRight]="col.frozenRight"
            [width]="col.width"
          >
            <ng-template ngx-datatable-header-template>
              {{ col.name }}
            </ng-template>

            <ng-template ngx-datatable-cell-template let-value="value" let-row="row">
              {{ value }}
            </ng-template>
          </ngx-datatable-column>
        </ng-container>
      </ngx-datatable>
    </div>
  `,
})
export class App {
  displayedColumns = [
    {
      prop: 'frozenLeftColumn',
      name: 'Frozen left header',
      frozenLeft: true,
      width: 300,
    },
    {
      prop: 'centralColumn1',
      name: 'Central header 1',
      width: 300,
    },
    {
      prop: 'centralColumn2',
      name: 'Central header 2',
      width: 300,
    },
    {
      prop: 'centralColumn3',
      name: 'Central header 3',
      width: 300,
    },
    {
      prop: 'centralColumn4',
      name: 'Central header 4',
      width: 300,
    },
    {
      prop: 'centralColumn5',
      name: 'Central header 5',
      width: 300,
    },
    {
      prop: 'centralColumn6',
      name: 'Central header 6',
      width: 300,
    },
  ];

  rows = [
    {
      frozenLeftColumn: 'Should be frozen left',
      centralColumn1: 'Placeholder to trigger scrollbar',
      centralColumn2: 'Placeholder to trigger scrollbar',
      centralColumn3: 'Placeholder to trigger scrollbar',
      centralColumn4: 'Placeholder to trigger scrollbar',
      centralColumn5: 'Placeholder to trigger scrollbar',
      centralColumn6: 'Placeholder to trigger scrollbar',
    },
  ];

  name: string;
  constructor() {
    this.name = `Angular! v${VERSION.full}`;
  }

  trackByFn(ind: number): number {
    return ind;
  }
}

@NgModule({
  imports: [BrowserModule, NgxDatatableModule],
  declarations: [App],
  bootstrap: [App],
})
export class AppModule {}
