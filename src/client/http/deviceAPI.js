import {$authHost, $host} from "./index";

export const createType = async (type) => {
  const { data } = await $authHost.post('api/type', type);

  return data;
}

export const fetchTypes = async () => {
  const { data } = await $host.get('api/type');

  return data;
}

export const createDevice = async (device) => {
  const { data } = await $authHost.post('api/device', device);

  return data;
}

export const fetchDevices = async () => {
  const { data } = await $host.get('api/device');

  return data;
}

export const fetchOneDevice = async (id) => {
  const { data } = await $host.get('api/device/' + id)

  return data;
}
