export interface Cultural {
  id: string;
  nombre: string;
  descripcion: string;
  direccion: string;
  accesibilidad: string;
  servicio: string;
  contacto: string;
  costo: string;
  alt_img?: string;
  selected?: boolean; // Propiedad opcional para manejar la selección
}
