import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { InformacionComponent } from './informacion/informacion.component';
import { ReporteUsuarioComponent } from './reporte-usuario/reporte-usuario.component';
import { ReporteComponent } from './reporte/reporte.component';

const routes: Routes = [
  {path: '', component:InformacionComponent},
  {path:'informacion', component:GaleriaComponent},
  {path:'registro', component:FormularioComponent},
  {path:'reporte', component:ReporteComponent},
  {path:'reporte_usuario', component:ReporteUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
