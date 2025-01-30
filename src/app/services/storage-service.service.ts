import { Injectable } from '@angular/core';
import { Result } from '@zxing/library';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  private historyResultArray: Result[] = [];

  appendHistoryItem(item: Result) {
    if (!item) return;
    this.historyResultArray.unshift(item);
  }

  getHistoryResultArray() {
    return this.historyResultArray;
  }
}
