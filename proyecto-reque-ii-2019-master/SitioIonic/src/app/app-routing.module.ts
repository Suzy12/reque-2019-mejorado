import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';





const routes: Routes = [
  { path: '', redirectTo: 'informacion', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'menu/paciente', loadChildren: './menu-paciente/menu-paciente.module#MenuPacientePageModule' },
  { path: 'menu/medico', loadChildren: './menu-medico/menu-medico.module#MenuMedicoPageModule' },
  { path: 'menu/familiar', loadChildren: './menu-familiar/menu-familiar.module#MenuFamiliarPageModule' },
  { path: 'informacion', loadChildren: './informacion/informacion.module#InformacionPageModule' },
  { path: 'bitacora-familiar', loadChildren: './bitacora-familiar/bitacora-familiar.module#BitacoraFamiliarPageModule' },
  { path: 'paciente/perfil', loadChildren: './perfil-paciente/perfil-paciente.module#PerfilPacientePageModule' },
  { path: 'medico/perfil', loadChildren: './perfil-medico/perfil-medico.module#PerfilMedicoPageModule' },
  { path: 'familiar/perfil', loadChildren: './perfil-familiar/perfil-familiar.module#PerfilFamiliarPageModule' },
  { path: 'informacion-alzheimer', loadChildren: './informacion/informacion-alzheimer/informacion-alzheimer.module#InformacionAlzheimerPageModule' },
  { path: 'pagina-parkinson', loadChildren: './informacion/pagina-parkinson/pagina-parkinson.module#PaginaParkinsonPageModule' },
  { path: 'pagina-lewy', loadChildren: './informacion/pagina-lewy/pagina-lewy.module#PaginaLewyPageModule' },
  { path: 'pagina-pick', loadChildren: './informacion/pagina-pick/pagina-pick.module#PaginaPickPageModule' },
  { path: 'pagina-binswanger', loadChildren: './informacion/pagina-binswanger/pagina-binswanger.module#PaginaBinswangerPageModule' },
  { path: 'pagina-vascular', loadChildren: './informacion/pagina-vascular/pagina-vascular.module#PaginaVascularPageModule' },
  { path: 'historial-paciente', loadChildren: './historial-paciente/historial-paciente.module#HistorialPacientePageModule' },
  { path: 'historial-familiar', loadChildren: './historial-familiar/historial-familiar.module#HistorialFamiliarPageModule' },
  { path: 'ver-historial-familiar', loadChildren: './ver-historial-familiar/ver-historial-familiar.module#VerHistorialFamiliarPageModule' },
  { path: 'ver-historial-medico', loadChildren: './ver-historial-medico/ver-historial-medico.module#VerHistorialMedicoPageModule' },
  { path: 'medico/medicamentos/insertar', loadChildren: './insertar-medicinas/insertar-medicinas.module#InsertarMedicinasPageModule' },
  { path: 'ver-medicinas', loadChildren: './ver-medicinas/ver-medicinas.module#VerMedicinasPageModule' },
  { path: 'pagina-terapia', loadChildren: './pagina-terapia/pagina-terapia.module#PaginaTerapiaPageModule' },
  { path: 'infoayuda', loadChildren: './infoayuda/infoayuda.module#InfoayudaPageModule' },
  { path: 'nosotros', loadChildren: './nosotros/nosotros.module#NosotrosPageModule' },
  { path: 'donacion', loadChildren: './donacion/donacion.module#DonacionPageModule' },
  { path: 'recordatorios/tabs', loadChildren: './recordatorios/pages/tabs-page/tabs-page.module#TabsModule' },
  { path: 'agregar', loadChildren: './recordatorios/pages/agregar-recordatorio/agregar-recordatorio.module#AgregarRecordatorioPageModule' },
  { path: 'ver-calendario', loadChildren: './recordatorios/pages/ver-calendario/ver-calendario.module#VerCalendarioPageModule' },
  { path: 'schedule', loadChildren: './recordatorios/pages/schedule/schedule.module#ScheduleModule' },
  { path: 'schedule/session/:sessionId', loadChildren: './recordatorios/pages/session-detail/session-detail.module#SessionDetailModule' },
  { path: 'medico/terapia', loadChildren: './pagina-terapia/pagina-terapia.module#PaginaTerapiaPageModule' },
  { path: 'tareas', loadChildren: './pagina-terapia/tareas/tareas.module#TareasPageModule' },
  { path: 'crear', loadChildren: './pagina-terapia/crear/crear.module#CrearPageModule' },
  { path: 'medico/terapia/icap', loadChildren: './pagina-terapia/icap/icap.module#IcapPageModule' },
  { path: 'faqs', loadChildren: './faqs/faqs.module#FaqsPageModule' },
  { path: 'medico/medicamentos', loadChildren: './menu-medicinas-medico/menu-medicinas-medico.module#MenuMedicinasMedicoPageModule' },
  { path: 'medico/medicamentos/observar', loadChildren: './ver-medicamentos-medico/ver-medicamentos-medico.module#VerMedicamentosMedicoPageModule' },
  { path: 'medico/terapia/icap/p1',  loadChildren: './pagina-terapia/icap/p1/p1.module#P1PageModule'    },
  { path: 'medico/terapia/icap/p2',  loadChildren: './pagina-terapia/icap/p2/p2.module#P2PageModule'    },
  { path: 'medico/terapia/icap/p3',  loadChildren: './pagina-terapia/icap/p3/p3.module#P3PageModule'    },
  { path: 'medico/terapia/icap/p4',  loadChildren: './pagina-terapia/icap/p4/p4.module#P4PageModule'    },
  { path: 'medico/terapia/icap/p5',  loadChildren: './pagina-terapia/icap/p5/p5.module#P5PageModule'    },
  { path: 'medico/terapia/icap/p6',  loadChildren: './pagina-terapia/icap/p6/p6.module#P6PageModule'    },
  { path: 'medico/terapia/icap/p7',  loadChildren: './pagina-terapia/icap/p7/p7.module#P7PageModule'    },
  { path: 'medico/terapia/icap/p8',  loadChildren: './pagina-terapia/icap/p8/p8.module#P8PageModule'    },
  { path: 'medico/terapia/icap/p9',  loadChildren: './pagina-terapia/icap/p9/p9.module#P9PageModule'    },
  { path: 'medico/terapia/icap/p10', loadChildren: './pagina-terapia/icap/p10/p10.module#P10PageModule' },
  { path: 'medico/terapia/icap/p11', loadChildren: './pagina-terapia/icap/p11/p11.module#P11PageModule' },
  { path: 'medico/terapia/icap/p13', loadChildren: './pagina-terapia/icap/p13/p13.module#P13PageModule' },
  { path: 'medico/terapia/icap/p14', loadChildren: './pagina-terapia/icap/p14/p14.module#P14PageModule' },
  { path: 'medico/terapia/icap/p15', loadChildren: './pagina-terapia/icap/p15/p15.module#P15PageModule' },
  { path: 'medico/terapia/icap/p16', loadChildren: './pagina-terapia/icap/p16/p16.module#P16PageModule' },
  { path: 'menu-bitacora', loadChildren: './menu-bitacora/menu-bitacora.module#MenuBitacoraPageModule' },
  { path: 'menu-bitacora-agregar', loadChildren: './menu-bitacora-agregar/menu-bitacora-agregar.module#MenuBitacoraAgregarPageModule' },
  { path: 'menu-bitacora-ver', loadChildren: './menu-bitacora-ver/menu-bitacora-ver.module#MenuBitacoraVerPageModule' },
  { path: 'menu-bitacora-ver-paciente', loadChildren: './menu-bitacora-ver-paciente/menu-bitacora-ver-paciente.module#MenuBitacoraVerPacientePageModule' },
  { path: 'menu-bitacora-familiar2', loadChildren: './menu-bitacora-familiar2/menu-bitacora-familiar2.module#MenuBitacoraFamiliar2PageModule' },
  { path: 'menu-bitacora-familiar-agregar2', loadChildren: './menu-bitacora-familiar-agregar2/menu-bitacora-familiar-agregar2.module#MenuBitacoraFamiliarAgregar2PageModule' },
  { path: 'menu-bitacora-familiar-ver2', loadChildren: './menu-bitacora-familiar-ver2/menu-bitacora-familiar-ver2.module#MenuBitacoraFamiliarVer2PageModule' },
  { path: 'medicamentos-familiar-ver', loadChildren: './medicamentos-familiar-ver/medicamentos-familiar-ver.module#MedicamentosFamiliarVerPageModule' },
  { path: 'medico-consultar-paciente', loadChildren: './medico-consultar-paciente/medico-consultar-paciente.module#MedicoConsultarPacientePageModule' },
  { path: 'familiar-consultar-paciente', loadChildren: './familiar-consultar-paciente/familiar-consultar-paciente.module#FamiliarConsultarPacientePageModule' },
  { path: 'emergencia-paciente', loadChildren: './emergencia-paciente/emergencia-paciente.module#EmergenciaPacientePageModule' },
  { path: 'monitoreo-familiar', loadChildren: './monitoreo-familiar/monitoreo-familiar.module#MonitoreoFamiliarPageModule' },
  { path: 'info-ayuda-familiar', loadChildren: './info-ayuda-familiar/info-ayuda-familiar.module#InfoAyudaFamiliarPageModule' },
  { path: 'info-ayuda-alzheimer', loadChildren: './info-ayuda-familiar/info-ayuda-alzheimer/info-ayuda-alzheimer.module#InfoAyudaAlzheimerPageModule' },
  { path: 'info-ayuda-binswanger', loadChildren: './info-ayuda-familiar/info-ayuda-binswanger/info-ayuda-binswanger.module#InfoAyudaBinswangerPageModule' },
  { path: 'info-ayuda-lewy', loadChildren: './info-ayuda-familiar/info-ayuda-lewy/info-ayuda-lewy.module#InfoAyudaLewyPageModule' },
  { path: 'info-ayuda-parkinson', loadChildren: './info-ayuda-familiar/info-ayuda-parkinson/info-ayuda-parkinson.module#InfoAyudaParkinsonPageModule' },
  { path: 'info-ayuda-pick', loadChildren: './info-ayuda-familiar/info-ayuda-pick/info-ayuda-pick.module#InfoAyudaPickPageModule' },
  { path: 'info-ayuda-vascular', loadChildren: './info-ayuda-familiar/info-ayuda-vascular/info-ayuda-vascular.module#InfoAyudaVascularPageModule' },
  { path: 'paciente/terapia', loadChildren: './paciente-terapias/paciente-terapias.module#PacienteTerapiasPageModule' },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
