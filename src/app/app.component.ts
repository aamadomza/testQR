import { Component } from '@angular/core';
import { StorageService } from './services/storage-service.service';
import { Result } from '@zxing/library';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(public storageService: StorageService) {}

  getHistory(): Result[] {
    return this.storageService.getHistoryResultArray();
  }
}
