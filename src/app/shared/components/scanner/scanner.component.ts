import { Component, OnInit } from '@angular/core';
import { BarcodeFormat, Result } from '@zxing/library';
import { StorageService } from '../../../services/storage-service.service';

@Component({
  selector: 'shared-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css'],
})
export class SharedScannerComponent implements OnInit {
  constructor(private storageService: StorageService) {}

  ngOnInit() {}

  public dataResult?: Result;

  scanStatus: boolean = false;

  historyResult: Result[] = [];

  public allowedFormats = [
    BarcodeFormat.QR_CODE,
    BarcodeFormat.EAN_13,
    BarcodeFormat.CODE_128,
    BarcodeFormat.DATA_MATRIX,
  ];

  scanProcess(dataScan: Result) {
    this.dataResult = dataScan;
    if (!dataScan) return;
    this.storageService.appendHistoryItem(dataScan);
  }

  toggleScanStatus(): void {
    this.scanStatus = !this.scanStatus;
  }

  getScanHistory(): Result[] {
    return this.storageService.getHistoryResultArray();
  }
}
