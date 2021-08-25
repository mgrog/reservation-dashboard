import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-tab-selector',
  templateUrl: './tab-selector.component.html',
  styleUrls: ['./tab-selector.component.scss'],
})
export class TabSelectorComponent implements OnInit {
  @Input() tabSelected: number;
  @Output() selectTab = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  select(selected: number): void {
    this.tabSelected = selected;
    this.selectTab.emit(selected);
  }
}
