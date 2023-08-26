import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { FamososComponent } from './famosos/famosos.component';
import { EntrevistasComponent } from './entrevistas/entrevistas.component';
import { PremiacoesComponent } from './premiacoes/premiacoes.component';

const routes: Routes = [
  {path: "principal" , component: PrincipalComponent},
  {path: "famosos" , component: FamososComponent},
  {path: "entrevistas" , component: EntrevistasComponent},
  {path: "premiacoes" , component: PremiacoesComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
