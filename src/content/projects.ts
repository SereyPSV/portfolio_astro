import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "hardwareStore",
    title: "Строительный магазин",
    link: "http://147.45.102.26/",
    colors: "color: var(--mainLight); background: var(--mainDark);",
    techniques: [
      "sprite.svg#react",
      "sprite.svg#redux",
      "sprite.svg#nodeJs",
      "sprite.svg#express",
      "sprite.svg#docker",
    ],
    projectsImgUrl: [
      "https://firebasestorage.googleapis.com/v0/b/hardware-store-70047.appspot.com/o/portfolio%2F1-start-page.webp?alt=media&token=4697fa08-727a-4dfc-bd7c-d9d11f1ba33f",
      "https://firebasestorage.googleapis.com/v0/b/hardware-store-70047.appspot.com/o/portfolio%2F2-user-authentication.webp?alt=media&token=1a0211a0-d4c6-4066-bca7-2a4a24a48a88",
      "https://firebasestorage.googleapis.com/v0/b/hardware-store-70047.appspot.com/o/portfolio%2F3-user-registration.webp?alt=media&token=b66e195c-0ccd-4e06-ab29-132d28e4d115",
      "https://firebasestorage.googleapis.com/v0/b/hardware-store-70047.appspot.com/o/portfolio%2F4-user-management-page.webp?alt=media&token=43096342-7682-4118-a5b6-876fac0ee6a5",
      "https://firebasestorage.googleapis.com/v0/b/hardware-store-70047.appspot.com/o/portfolio%2F5-product-page.webp?alt=media&token=148aff63-7e0e-411c-9d1d-a0f7604962c0",
      "https://firebasestorage.googleapis.com/v0/b/hardware-store-70047.appspot.com/o/portfolio%2F6-shopping-cart.webp?alt=media&token=b2d65345-2c34-49aa-823a-009b45a0abe4",
      "https://firebasestorage.googleapis.com/v0/b/hardware-store-70047.appspot.com/o/portfolio%2F7-add-edit-product.webp?alt=media&token=939e4f91-bcf6-47db-8907-5c7e66de2680",
    ],
    description: "",
    github: "https://github.com/SereyPSV/RSj_Hardware-store_graduate.git",
  },
  {
    id: "portfolio",
    title: "Портфолио",
    link: "http://147.45.102.26/",
    colors: "color: var(--mainLight); background: var(--mainDark);",
    techniques: [
      "sprite.svg#astro",
      "sprite.svg#html5",
      "sprite.svg#css3",
      "sprite.svg#typeScript",
    ],
    projectsImgUrl: [],
    description: "",
    github: "https://github.com/SereyPSV/portfolio_astro.git",
  },
  {
    id: "tic-tac-toe",
    title: "Tic-Tac-toe",
    link: "http://147.45.102.26/",
    colors: "color: var(--mainLight); background: var(--mainDark);",
    techniques: [
      "sprite.svg#html5",
      "sprite.svg#css3",
      "sprite.svg#javaScript",
    ],
    projectsImgUrl: [],
    description: "",
    github: "https://github.com/SereyPSV/tic-tac-toe.git",
  },
];
