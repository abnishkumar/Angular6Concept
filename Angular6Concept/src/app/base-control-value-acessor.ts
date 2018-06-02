import { ControlValueAccessor } from '@angular/forms';
import { Input, Output, EventEmitter } from '@angular/core';



// A ControlValueAccessor acts as a bridge between the Angular forms API and a native element in the DOM.
// Implement this interface if you want to create a custom form control directive that integrates with Angular forms
// ** ControlValueAccessor always interacts with a form control created explicitly
// (reactive forms) or implicitly (template driven).
// https://blog.angularindepth.com/never-again-be-confused-when-implementing-controlvalueaccessor-in-angular-forms-93b9eee9ee83
export class BaseControlValueAcessor implements ControlValueAccessor {

    _onChange;
    _onTouched;
    value;
    // The writeValue method is used by formControl to set value to the native form control.

    writeValue(value): void {
        this.value = value;
    }

    // The registerOnChange method is used by formControl to register a callback that is expected to be
    //  triggered every time the native form control is updated. Your responsibility
    // to pass the updated value to this callback so that the value of respective Angular form control is updated.
    registerOnChange(fn: any): void {
        this._onChange = fn;
    }

    // Registers a callback function that should be called when the control receives a blur event.
    // The registerOnTouched method is used to indicate that a user interacted with a control.
    registerOnTouched(fn: any): void {
        this._onTouched = fn;
    }
    // This function is called by the forms API when the control status changes to or from "DISABLED".
    //  Depending on the value, it should enable or disable the appropriate DOM element.
    setDisabledState?(isDisabled: boolean): void {
        // this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    }
}
