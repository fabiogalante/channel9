
import { Component } from '@angular/core';

@Component({
    selector: 'shared-name',
    templateUrl: './galante.component.html'    
    
})
export class GalanteComponent {


    name: string;

    constructor() {
        this.name = 'Sam';
    }
}
