import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {DynamicFormsCoreModule} from '@ng2-dynamic-forms/core';
import {DynamicFormsBootstrapUIModule} from '@ng2-dynamic-forms/ui-bootstrap';
import {DragulaModule} from 'ng2-dragula';

import {NgaModule} from '../../../theme/nga.module';
import {EntityModule} from '../../common/entity/entity.module';

import {DatasetAddComponent} from './datasets/dataset-add/';
import {DatasetDeleteComponent} from './datasets/dataset-delete/';
import {DiskComponent, ManagerComponent, VdevComponent} from './manager/';
// import { VolumesEditComponent } from './volumes-edit/';
import {VolumeDeleteComponent} from './volume-delete/';
import {VolumesListComponent} from './volumes-list/';
import {routing} from './volumes.routing';
import {ZvolAddComponent} from './zvol/zvol-add/';
import {ZvolDeleteComponent} from './zvol/zvol-delete/';
import {ZvolEditComponent} from './zvol/zvol-edit/';

@NgModule({
  imports : [
    RouterModule, DragulaModule, EntityModule, DynamicFormsCoreModule.forRoot(),
    DynamicFormsBootstrapUIModule, CommonModule, FormsModule,
    ReactiveFormsModule, NgaModule, routing
  ],
  declarations : [
    VolumesListComponent,
    ManagerComponent,
    DiskComponent,
    VdevComponent,
    DatasetAddComponent,
    DatasetDeleteComponent,
    // VolumesEditComponent,
    VolumeDeleteComponent,
    ZvolAddComponent,
    ZvolDeleteComponent,
    ZvolEditComponent,
  ],
  providers : []
})
export class VolumesModule {
}
