import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chars-gallery',
  templateUrl: './chars-gallery.component.html',
  styleUrls: ['./chars-gallery.component.scss']
})
export class CharsGalleryComponent {
 @Input() list! : any;
}
