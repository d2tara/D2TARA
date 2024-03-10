import { EventEmitter, Injectable } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { BehaviorSubject } from 'rxjs';
import { capabilities, Capability, CapabilityLevel, capabilityLevels, MaturityLevel, maturityLevels } from './strings';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public data: number[] = [];
  public maturityLevel = MaturityLevel.None;
  public maturity = maturityLevels[this.maturityLevel].name;
  public capabilities = capabilities;
  public levels = capabilityLevels;
  public dataChange = new BehaviorSubject(this.data);
  public maturityLevels = maturityLevels;

  constructor() {
    this.capabilities.forEach((capability, i) => {
      this.data[i] = 0;
    });
  }

  public dataUpdated(): void {
    this.dataChange.next(this.data);
    this.maturityLevel = this.calculateMaturity(this.data);
    this.maturity = maturityLevels[Math.round(this.maturityLevel)].name;
  }

  private calculateMaturity(data: number[]): MaturityLevel {
    let maturityLevel: MaturityLevel = MaturityLevel.None;
    if (data[Capability.DAMAGE] >= CapabilityLevel.Adhoc &&
      data[Capability.ATTACK] >= CapabilityLevel.Adhoc &&
      data[Capability.FEASIB] >= CapabilityLevel.Adhoc){
        maturityLevel = MaturityLevel.Initial;
      }
    if (data[Capability.DAMAGE] >= CapabilityLevel.Completeness &&
      data[Capability.IMPACT] >= CapabilityLevel.Completeness &&
      data[Capability.ATTACK] >= CapabilityLevel.Completeness &&
      data[Capability.FEASIB] >= CapabilityLevel.Completeness &&
      data[Capability.RISKTREAT] >= CapabilityLevel.Completeness){
        maturityLevel = MaturityLevel.Core;
    }
    if (data[Capability.DAMAGE] >= CapabilityLevel.Integration &&
      data[Capability.IMPACT] >= CapabilityLevel.Integration &&
      data[Capability.ATTACK] >= CapabilityLevel.Integration &&
      data[Capability.FEASIB] >= CapabilityLevel.Integration &&
      data[Capability.RISKTREAT] >= CapabilityLevel.Integration){
        maturityLevel = MaturityLevel.Extended;
    }
    if (data[Capability.DAMAGE] >= CapabilityLevel.Augmentation &&
      data[Capability.IMPACT] >= CapabilityLevel.Augmentation &&
      data[Capability.ATTACK] >= CapabilityLevel.Augmentation &&
      data[Capability.FEASIB] >= CapabilityLevel.Augmentation &&
      data[Capability.RISKTREAT] >= CapabilityLevel.Augmentation){
        maturityLevel = MaturityLevel.Visionary;
    }
    return maturityLevel;
  }
}

