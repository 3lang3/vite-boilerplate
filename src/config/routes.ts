import React from 'react';
import { RouteProps } from 'react-router-dom'

type RouteItem = {
  title?: string;
  path: string;
  element?: string;
  wrappers?: string[];
  routes?: RouteItem[];
  lazy?: boolean;
}

// <Route path="/" element={<Home />} />
// <Route path="/profile" element={<Profile />} />

const routes = [
  { path: '/', element: '@/pages/Home' },
  { path: '/profile', element: '@/pages/Profile', lazy: true },
] as RouteItem[]

export default routes