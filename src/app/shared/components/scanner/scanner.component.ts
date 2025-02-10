import { Component, OnInit } from '@angular/core';
import { BarcodeFormat, Result } from '@zxing/library';
import { StorageService } from '../../../services/storage-service.service';
import { BackendService } from '../../../services/backend.service';

@Component({
  selector: 'shared-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css'],
})
export class SharedScannerComponent implements OnInit {
  public dataResult?: Result;

  scanStatus: boolean = false;

  public historyResult: Result[] = [];

  barcodeEnumDescription: string[] = [];

  constructor(
    private storageService: StorageService,
    private backendService: BackendService
  ) {}

  ngOnInit() {
    this.historyResult = this.storageService.getHistoryResultArray();
    console.log('ObjectKeys');
  }

  public allowedFormats = [
    BarcodeFormat.AZTEC,
    BarcodeFormat.CODABAR,
    BarcodeFormat.CODE_128,
    BarcodeFormat.CODE_39,
    BarcodeFormat.CODE_93,
    BarcodeFormat.DATA_MATRIX,
    BarcodeFormat.EAN_13,
    BarcodeFormat.EAN_8,
    BarcodeFormat.ITF,
    BarcodeFormat.MAXICODE,
    BarcodeFormat.PDF_417,
    BarcodeFormat.QR_CODE,
    BarcodeFormat.RSS_14,
    BarcodeFormat.RSS_EXPANDED,
    BarcodeFormat.UPC_A,
    BarcodeFormat.UPC_E,
    BarcodeFormat.UPC_EAN_EXTENSION,
  ];

  scanProcess(dataScan: Result) {
    this.dataResult = dataScan;
    if (!dataScan) return;
    this.storageService.appendHistoryItem(dataScan);
    //  this.backendService.getData();
  }

  toggleScanStatus(): void {
    this.scanStatus = !this.scanStatus;
    this.checkCameraPermissions();
    this.storageService.appendHistoryLog(`CameraStatus: ${this.scanStatus}`);
    //    this.backendService.getData();
  }

  getScanHistory(): Result[] {
    return this.storageService.getHistoryResultArray();
  }

  getBarcodeDescription(code: BarcodeFormat): string {
    return typeof code;
  }

  getProtocolType() {
    if (window.location.protocol !== 'https:') {
      console.warn(
        'Camera access requires HTTPS. Please serve the app over HTTPS.'
      );
      this.storageService.appendHistoryLog(
        `ProtocolTypeCameraStatus: ${window.location.protocol}`
      );
    }
  }

  async checkCameraPermissions() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      stream.getTracks().forEach((track) => track.stop()); // Stop the stream immediately
      this.scanStatus = true;
    } catch (error) {
      this.storageService.appendHistoryLog(`Error: ${error}`);
      console.error('Camera access denied or not available:', error);
      this.scanStatus = false;
    }
  }
}
