// the syntax "component: () => import(MyComponent)" enables lazy loading
// the component will be loaded only if the root is trigered

const routes = [
  { path: "/", name: "homepage", component: () => import("@/views/HomePage") },
  { path: "/test", name: "homepage", component: () => import("@/views/Test") },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginPage")
  }
];

export default routes;
