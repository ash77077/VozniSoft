import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRouteSnapshot, Router} from "@angular/router";
import {ModalService} from "./services/modal.service";
import {FormsService} from "./shared/modal/dynamic-forms/forms.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FormsService]
})
export class AppComponent {
  title = 'VozniSoft';
  isDark = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private _modalSvc: ModalService,
    private _formService: FormsService

  ) {
    const channel = new BroadcastChannel('change-theme');
    channel.addEventListener('message', (event) => {
      document.body.classList.toggle('dark-theme')
      this.isDark = !this.isDark;
    });
  }

  changeTheme() {
    const channel = new BroadcastChannel('change-theme');
    channel.postMessage(null);
  }

  addNew() {
    let type = this.router.url.split('/')[1];
    this._formService.getFields(type).subscribe((d: any) => {
      this._modalSvc.modal.next({type, data: d});

    });
  }
}
