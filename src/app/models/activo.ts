export interface Activo {
    id_activo?: number;  // Opcional porque es AUTO_INCREMENT
    nombre: string;
    id_tag: number;
    Disponibilidad: boolean;
    labelTag: number;
    numero_existencia: number;
    numero_real: number;
  }