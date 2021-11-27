import { Injectable } from '@angular/core';
import { MatSnackBar,MatSnackBarConfig} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public snackBar: MatSnackBar) { }

  config : MatSnackBarConfig = {
    duration:2500,
    horizontalPosition: 'right',
    verticalPosition: 'top'
  }

  success(msg: string){
    this.config['panelClass'] = ['notification','success'];
    this.snackBar.open(msg,'',this.config);
  }

  warn(msg: string){
    this.config['panelClass'] = ['notification','warn'];
    this.snackBar.open(msg,'',this.config);
  }
}
