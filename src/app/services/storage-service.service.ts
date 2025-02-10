import { Injectable } from '@angular/core';
import { Result } from '@zxing/library';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  private historyResultArray: Result[] = [];
  private historyLogArray: String[] = [];

  appendHistoryItem(item: Result): void {
    if (!item) return;
    this.historyResultArray.unshift(item);
  }

  getHistoryResultArray(): Result[] {
    return this.historyResultArray;
  }

  appendHistoryLog(text: String): void {
    if (!text) return;

    this.historyLogArray.unshift(text);
  }

  getHistoryLogArray(): String[] {
    return this.historyLogArray;
  }
}
