import useService from "../hooks/useService";
import { processMembers } from "../logic/memberLogic";

export const getAllMembers = async () => {
  return await useService('get', '/members');
};

export const getCellOptions = async () => {
  return await useService('get', '/members/cell-options');
};

export const getAreaOptions = async () => {
  return await useService('get', '/members/area-options');
};

export const getLastAddedMembers = async () => {
  return await useService('get', '/members/last-added')
}

export const setMembers = async (members) => {
  return await useService('post', '/members/list', processMembers(members));
};

export const setMember = async (member) => {
  return await useService('post', '/members', member);
};