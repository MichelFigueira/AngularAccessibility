import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, Injector } from '@angular/core';
import { BodyInjectorService } from './body-injector.service';
import { ModalRef } from '../components/modal/models/modal-ref';
import { ModalConfig } from '../interfaces/modal-config';
import { ModalComponent } from '../components/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private componentFactory: ComponentFactory<ModalComponent>;

  constructor(componentFactoryResolver: ComponentFactoryResolver, private injector: Injector, private bodyInjector: BodyInjectorService) {
    this.componentFactory = componentFactoryResolver.resolveComponentFactory(ModalComponent);
  }

  public open(config: ModalConfig): ModalRef {
    const componentRef = this.createComponentRef();
    componentRef.instance.config = config;
    this.bodyInjector.stackBeforeAppRoot(componentRef);
    const modalRef = new ModalRef(componentRef);
    componentRef.instance.modalRef = modalRef;
    return modalRef;
  }

  public createComponentRef(): ComponentRef<ModalComponent> {
    return this.componentFactory.create(this.injector);
  }
}
