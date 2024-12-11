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

// memberLogic.js
export const processMembers = (data) => {
  return data.map(member => {
      // Modifica solo los valores 'value' de cell y area
      return {
          ...member,
          area: member.area.value,  // Extrae solo el valor de 'value' de 'area'
          cell: member.cell.value   // Extrae solo el valor de 'value' de 'cell'
      };
  });
}