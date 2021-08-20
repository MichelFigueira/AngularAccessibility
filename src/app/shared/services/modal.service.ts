import { Injectable } from '@angular/core';
import { ModalConfig } from '../interfaces/modal-config';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  public open(config: ModalConfig): ModalRef {
    console.log('open called');
    return new ModalRef();
  }
}

export class ModalRef {

  public close(): void {
    console.log('close called');
  }

}