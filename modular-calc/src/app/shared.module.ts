import { NgModule } from '@angular/core';
import { DxTextBoxModule, DxNumberBoxModule, DxButtonModule } from 'devextreme-angular';

const modules = [
    DxTextBoxModule,
    DxNumberBoxModule,
    DxButtonModule
];

@NgModule({
    imports: [
        ...modules
    ],
    exports: [
        ...modules
    ]
})
export class SharedModule
{

}
