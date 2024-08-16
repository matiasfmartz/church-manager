import useService from "../hooks/useService";

export const getAllMembers = async () => {
  return await useService('get', '/members');
};

export const getCellOptions = async () => {
  return await useService('get', '/members/cell-options');
};

export const getAreaOptions = async () => {
  return await useService('get', '/members/area-options');
};