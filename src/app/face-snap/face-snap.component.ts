import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent{
//On ajoute l'input pour pouvoir initialiser la class depuis l'extérieur (appcomponent)
// C'est pour rendre possible l'injection
@Input() faceSnap! : FaceSnap;



  //buttonText!: string;

  // ngOnInit() {
  //   this.buttonText = 'Oh Snap!';
  // }

  constructor(private faceSnapsService: FaceSnapsService,
              private router: Router){}

  onViewFaceSnap(){
    this.router.navigateByUrl('facesnaps/' + this.faceSnap.id);
  }

  // onSnap() {
  //   if (this.buttonText === 'Oh Snap!') {
  //     this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap')
  //     this.buttonText = 'Oops, unSnap!';
  //   } else {
  //     this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap')
  //     this.buttonText = 'Oh Snap!';
  //   }
  //}
}
