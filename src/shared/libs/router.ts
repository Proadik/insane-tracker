import { Routes } from '@/shared';
// eslint-disable-next-line import/no-extraneous-dependencies
const { varEx } = require('varex');

export const getRoute = (route: Routes, obj) => varEx(route, obj);
