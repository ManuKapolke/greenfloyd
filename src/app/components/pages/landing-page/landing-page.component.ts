import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  images = [
    'greenfloyd_elbershallen (1).JPG',
    'greenfloyd_elbershallen (2).JPG',
    'greenfloyd_elbershallen (3).JPG',
    'greenfloyd_elbershallen (4).JPG',
    'greenfloyd_elbershallen (5).JPG',
    'greenfloyd_elbershallen (6).JPG',
    'greenfloyd_elbershallen (7).JPG',
    'greenfloyd_elbershallen (8).JPG',
    'greenfloyd_elbershallen (9).JPG',
    'greenfloyd_elbershallen (10).JPG'
  ];
  headlines = [
    'Pink Floyd im großen Klanggewand',
    'So klingt Zukunftsmusik',
    'Ganz viele Gänsehautmomente',
    'Ein grandioses Finale',
    'Die große Überwältigung',
    'Pink Floyd im großen Klanggewand',
    'So klingt Zukunftsmusik',
    'Ganz viele Gänsehautmomente',
    'Ein grandioses Finale',
    'Die große Überwältigung'
  ];
  currentImage = 0;
  showImage = true;
  showButton = false;

  private hideTimeout: any;

  @HostListener('mousemove')
  onMouseMove() {
    this.showButton = true;

    clearTimeout(this.hideTimeout);
    this.hideTimeout = setTimeout(() => {
      this.showButton = false;
    }, 2000);
  }


  ngOnInit() {
    this.updateImage();
  }

  updateImage() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
      }, 10);
    }, 8000);
  }
}
