import { Component, OnInit, Input } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  hide: boolean = false;
  @Input() title: string;
  @Input() message: string;

  constructor(
    private _communication: CommunicationService,
    private localStorageService: LocalStorageService
  ) {
    // 1) Initiale  a event listener/subscriber
    // 2) Triggering the event to let the consuming component should continue or not
  }

  ngOnInit() {
    this._communication.currentMessage.subscribe(title => this.title = title);

  }

  handleYes(taskUUId: string) {
    this.localStorageService.deleteTodo(taskUUId);
  }

  handleNo() {
    let hide = true;
  }

  dismissAlert() {
    let hide = true;
  }
}
