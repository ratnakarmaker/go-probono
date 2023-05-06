import {
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-menu-holder',
  templateUrl: './menu-holder.component.html',
  styleUrls: ['./menu-holder.component.scss'],
})
export class MenuHolderComponent {
  @Input() persistant: boolean = false;

  @ViewChild('menu_switch') menu_switch: ElementRef | null = null;
  @ViewChild('menu_content') menu_content: ElementRef | null = null;
  @HostListener('document:click', ['$event'])
  onGlobalClick(event: any): void {
    if (this.menu_switch?.nativeElement?.contains(event?.target)) {
      this.menu_shower = !this.menu_shower;
      return;
    }
    if (this.menu_content?.nativeElement?.contains(event?.target)) {
      this.menu_shower = this.persistant;
      return;
    }
    this.menu_shower = false;
    return;
  }
  protected menu_shower: boolean = false;
}
