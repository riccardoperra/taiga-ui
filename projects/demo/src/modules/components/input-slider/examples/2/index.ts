import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-input-slider-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiInputSliderExample2 {
    readonly control = new FormControl(40);
    readonly segments = 5;
    readonly max = 100;
    readonly min = 0;

    increase() {
        this.control.patchValue(Math.min(this.control.value + 20, this.max));
    }

    decrease() {
        this.control.patchValue(Math.max(this.control.value - 20, this.min));
    }
}
