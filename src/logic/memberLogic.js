import { getAllMembers } from "../services/membersService";

export const getAllProcessMembers = async () => {
    try {
      // Espera a que la llamada al servicio obtenga los datos
      const data = await getAllMembers();
    
      // Procesa los datos obtenidos
      const processedData = {
        ...data,
        additionalField: 'some value'
      };
    
      return processedData;
    } catch (error) {
      console.error("Error processing data", error);
      throw error; // Propaga el error para que sea manejado en la capa superior
    }
}

function processMembers(data){
    data.forEach(e => {
        e.id_area
    });
}