import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { HelpSectionComponent } from './components/home/help-section/help-section.component';

@NgModule({
    declarations: [ HomeComponent, HelpSectionComponent],
    exports: [HomeComponent]
})

export class FeatureModule {}