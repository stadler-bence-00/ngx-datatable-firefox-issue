import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {
  displayedColumns: ITableColumnDef[] = [
    {
      prop: "frozenLeftColumn",
      name: "Frozen left header",
      frozenLeft: true,
      width: 300,
    },
    {
      prop: "centralColumn1",
      name: "Central header 1",
      width: 300,
    },
    {
      prop: "centralColumn2",
      name: "Central header 2",
      width: 300,
    },
    {
      prop: "centralColumn3",
      name: "Central header 3",
      width: 300,
    },
    {
      prop: "centralColumn4",
      name: "Central header 4",
      width: 300,
    },
    {
      prop: "centralColumn5",
      name: "Central header 5",
      width: 300,
    },
    {
      prop: "centralColumn6",
      name: "Central header 6",
      width: 300,
    },
  ];

  rows = [
    {
      frozenLeftColumn: "Column should be frozen",
      centralColumn1: "Placeholder to trigger scrollbar",
      centralColumn2: "Placeholder to trigger scrollbar",
      centralColumn3: "Placeholder to trigger scrollbar",
      centralColumn4: "Placeholder to trigger scrollbar",
      centralColumn5: "Placeholder to trigger scrollbar",
      centralColumn6: "Placeholder to trigger scrollbar",
    },
  ];

  trackByFn(ind: number): number {
    return ind;
  }
}

interface ITableColumnDef {
  prop: string;
  name: string;
  frozenLeft?: boolean;
  frozenRight?: boolean;
  width: number;
}
