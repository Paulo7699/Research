import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class ThemeService {
  theme: Theme = 'light-theme';
  private renderer: Renderer2;


  constructor(
    @Inject(DOCUMENT) private document: Document,
    rendererFactory: RendererFactory2) {
      this.renderer = rendererFactory.createRenderer(null, null);
    }

  switchTheme() {
    this.document.body.classList.replace(
      this.theme,
      this.theme === 'light-theme'
        ? (this.theme = 'dark-theme')
        : (this.theme = 'light-theme')
    );
  }

  initializeTheme = (): void =>
    this.renderer.addClass(this.document.body, this.theme);

}


export type Theme = 'light-theme' | 'dark-theme';