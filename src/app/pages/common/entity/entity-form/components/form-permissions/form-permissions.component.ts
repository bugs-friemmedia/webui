import {Component, ViewContainerRef} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {FieldConfig} from '../../models/field-config.interface';
import {Field} from '../../models/field.interface';
import {TooltipComponent} from '../tooltip/tooltip.component';

@Component({
  selector : 'form-permissions',
  styleUrls : [ '../dynamic-field/dynamic-field.css' ],
  templateUrl : './form-permissions.component.html',
})
export class FormPermissionsComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
  fieldShow: string;

  private ownerRead: boolean = false;
  private ownerWrite: boolean = false;
  private ownerExec: boolean = false;
  private groupRead: boolean = false;
  private groupWrite: boolean = false;
  private groupExec: boolean = false;
  private otherRead: boolean = false;
  private otherWrite: boolean = false;
  private otherExec: boolean = false;

  private owner: number = 0;
  private grp: number = 0;
  private other: number = 0;

  private formatRe = new RegExp('^[0-7][0-7][0-7]$');

  toggleOwnerRead() {
    if (this.ownerRead) {
      this.ownerRead = false;
      this.owner -= 4;
    } else {
      this.ownerRead = true;
      this.owner += 4;
    }
    this.refreshPermissions();
  }

  toggleOwnerWrite() {
    if (this.ownerWrite) {
      this.ownerWrite = false;
      this.owner -= 2;
    } else {
      this.ownerWrite = true;
      this.owner += 2;
    }
    this.refreshPermissions();
  }

  toggleOwnerExec() {
    if (this.ownerExec) {
      this.ownerExec = false;
      this.owner -= 1;
    } else {
      this.ownerExec = true;
      this.owner += 1;
    }
    this.refreshPermissions();
  }

  toggleGroupRead() {
    if (this.groupRead) {
      this.groupRead = false;
      this.grp -= 4;
    } else {
      this.groupRead = true;
      this.grp += 4;
    }
    this.refreshPermissions();
  }

  toggleGroupWrite() {
    if (this.groupWrite) {
      this.groupWrite = false;
      this.grp -= 2;
    } else {
      this.groupWrite = true;
      this.grp += 2;
    }
    this.refreshPermissions();
  }

  toggleGroupExec() {
    if (this.groupExec) {
      this.groupExec = false;
      this.grp -= 1;
    } else {
      this.groupExec = true;
      this.grp += 1;
    }
    this.refreshPermissions();
  }

  toggleOtherRead() {
    if (this.otherRead) {
      this.otherRead = false;
      this.other -= 4;
    } else {
      this.otherRead = true;
      this.other += 4;
    }
    this.refreshPermissions();
  }

  toggleOtherWrite() {
    if (this.otherWrite) {
      this.otherWrite = false;
      this.other -= 2;
    } else {
      this.otherWrite = true;
      this.other += 2;
    }
    this.refreshPermissions();
  }

  toggleOtherExec() {
    if (this.otherExec) {
      this.otherExec = false;
      this.other -= 1;
    } else {
      this.otherExec = true;
      this.other += 1;
    }
    this.refreshPermissions();
  }

  refreshPermissions() {
    this.config.value =
        this.owner.toString() + this.grp.toString() + this.other.toString();
  }

  setValue() {
    if (this.config.value && this.formatRe.test(this.config.value)) {
      let owner = parseInt(this.config.value[0]);
      this.owner = owner;
      let grp = parseInt(this.config.value[1]);
      this.grp = grp
      let other = parseInt(this.config.value[2]);
      this.other = other;

      if (owner - 4 >= 0) {
        owner -= 4;
        this.ownerRead = true;
      }
      if (owner - 2 >= 0) {
        owner -= 2;
        this.ownerWrite = true;
      }
      if (owner - 1 >= 0) {
        owner -= 1;
        this.ownerExec = true;
      }

      if (grp - 4 >= 0) {
        grp -= 4;
        this.groupRead = true;
      }
      if (grp - 2 >= 0) {
        grp -= 2;
        this.groupWrite = true;
      }
      if (grp - 1 >= 0) {
        grp -= 1;
        this.groupExec = true;
      }

      if (other - 4 >= 0) {
        other -= 4;
        this.otherRead = true;
      }
      if (other - 2 >= 0) {
        other -= 2;
        this.ownerWrite = true;
      }
      if (other - 1 >= 0) {
        other -= 1;
        this.otherExec = true;
      }
    }
  }
}
