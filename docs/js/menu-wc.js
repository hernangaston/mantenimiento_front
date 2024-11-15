'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">mantenimiento-front documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-f715d7b9fee09b337199879f825ecd2186d3fc7475353e071ee85be49ef94dc0b324c2649e86eb7dff066a785c06561b292d7cdf34f379901d16793a261530f8"' : 'data-bs-target="#xs-components-links-module-AppModule-f715d7b9fee09b337199879f825ecd2186d3fc7475353e071ee85be49ef94dc0b324c2649e86eb7dff066a785c06561b292d7cdf34f379901d16793a261530f8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-f715d7b9fee09b337199879f825ecd2186d3fc7475353e071ee85be49ef94dc0b324c2649e86eb7dff066a785c06561b292d7cdf34f379901d16793a261530f8"' :
                                            'id="xs-components-links-module-AppModule-f715d7b9fee09b337199879f825ecd2186d3fc7475353e071ee85be49ef94dc0b324c2649e86eb7dff066a785c06561b292d7cdf34f379901d16793a261530f8"' }>
                                            <li class="link">
                                                <a href="components/ActivoFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActivoFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BotonDashComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BotonDashComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EdificioFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EdificioFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InicioComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InicioComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NumberinputComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NumberinputComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrdenTrabajoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrdenTrabajoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrdenTrabajoFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrdenTrabajoFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrdenTrabajoVistaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrdenTrabajoVistaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PisoFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PisoFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegistroComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegistroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SectorFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SectorFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TagFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TareaFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TareaFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TextinputComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TextinputComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TipoTareaFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TipoTareaFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UbicacionFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UbicacionFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsuarioFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsuarioFormComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ActivoService.html" data-type="entity-link" >ActivoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DescripcionService.html" data-type="entity-link" >DescripcionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EdificioService.html" data-type="entity-link" >EdificioService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OperarioService.html" data-type="entity-link" >OperarioService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrdenTrabajoService.html" data-type="entity-link" >OrdenTrabajoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PisoService.html" data-type="entity-link" >PisoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SectorService.html" data-type="entity-link" >SectorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TagService.html" data-type="entity-link" >TagService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TareaService.html" data-type="entity-link" >TareaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TipoTareaService.html" data-type="entity-link" >TipoTareaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UbicacionService.html" data-type="entity-link" >UbicacionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthorizationGuard.html" data-type="entity-link" >AuthorizationGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Activo.html" data-type="entity-link" >Activo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Descripcion.html" data-type="entity-link" >Descripcion</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Edificio.html" data-type="entity-link" >Edificio</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OrdenTrabajo.html" data-type="entity-link" >OrdenTrabajo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Piso.html" data-type="entity-link" >Piso</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Sector.html" data-type="entity-link" >Sector</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Tag.html" data-type="entity-link" >Tag</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Tarea.html" data-type="entity-link" >Tarea</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TipoTarea.html" data-type="entity-link" >TipoTarea</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Ubicacion.html" data-type="entity-link" >Ubicacion</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Usuario.html" data-type="entity-link" >Usuario</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});