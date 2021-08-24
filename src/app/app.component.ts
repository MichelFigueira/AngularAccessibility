import { ModalService } from './shared/services/modal.service';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalRef } from './shared/components/modal/models/modal-ref';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('modal') public modalTemplateRef: TemplateRef<any>;

  title = 'Angular Accessibility Test';
  public form: FormGroup = null;
  public firstName = 'Michel';
  public modalRef: ModalRef;

  constructor(formBuilder: FormBuilder, private modalService: ModalService) {
    this.form = formBuilder.group({
      yesNoAnswer: [{
        value: null,
        disabled: false
      }]
    });
  }

  public submit(): void {
    this.form.get('yesNoAnswer').disable();
    console.log(this.form.value);
  }

  public show(): void {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User Details'
    });
  }

}
