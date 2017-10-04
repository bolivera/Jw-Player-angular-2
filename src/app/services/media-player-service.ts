import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

declare var jwplayer: any;

@Injectable()
export class MediaPlayerService {

  constructor() {
  }

  loadMedia(isAutoPlay) {
    var cfg = {
        file: "http://www.youtube.com/watch?v=LC1mOEeZcNg",
        width: 640,
        height: 360
    };

    return Promise.resolve(
      jwplayer("myElement").setup(cfg))
      .then(
      playerInstance => {
        if (isAutoPlay) {
          setTimeout(() => {
            return playerInstance.play();
          }, 500);
        }
      }
    );
  }

}