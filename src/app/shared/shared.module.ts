import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { SharedScannerComponent } from './components/scanner/scanner.component';

@NgModule({
  declarations: [SharedScannerComponent],
  exports: [SharedScannerComponent],
  imports: [CommonModule,ZXingScannerModule],
})
export class SharedModule {}
