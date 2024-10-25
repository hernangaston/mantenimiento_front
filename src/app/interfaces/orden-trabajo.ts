export interface OrdenTrabajo {
    id_ot?: number;
    fecha_impresion?: Date;
    observacion?: string;
    fecha_terminacion?: Date;
    realizada?: boolean;
    id_operario?: number;
    tiempo?: string;
    id_edificio?: number;
    id_piso?: number;
    id_sector?: number;
    id_ubicacion?: number;
    id_activo?: number;
    fecha_creacion?: Date;
    nombre_edificio?: string;
    direccion_edificio?: string;
    nombre_piso?: string;
    nombre_sector?: string;
    nombre_ubicacion?: string;
    nombre_activo?: string;
    diminutivo?: string;
    nombre_tag?: string;
    id_tarea?: Array<any>;
  }
  