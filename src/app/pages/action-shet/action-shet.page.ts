import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-shet',
  templateUrl: './action-shet.page.html',
  styleUrls: ['./action-shet.page.scss'],
})
export class ActionShetPage implements OnInit {

  constructor(private actionSheetCtrl: ActionSheetController) { }

  onClick(){
    this.presentActionSheet();
  }
  
  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Acciones',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          cssClass: 'rojo',
          data: {
            action: 'delete',
          },
          handler: () => {
            console.log('Delete clicked')
          },
        },
        {
          text: 'Share',
          data: {
            action: 'share',
          },
          handler: () => {
            console.log('Share clicked')
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
          handler: () => {
            console.log('Cancel clicked')
          },
        },
      ],
    });

    await actionSheet.present();
  }

  ngOnInit() {
  }

}
