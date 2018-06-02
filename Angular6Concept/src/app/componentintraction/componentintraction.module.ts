import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ChildComponent],
  exports: [ChildComponent]
})
export class ComponentintractionModule { }
