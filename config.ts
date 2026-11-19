const isLocal = false;

export default {
  app_local: isLocal,
  app_api_deploy_url: "https://backend.ange.tg/api",
  app_api_dev_url: "http://127.0.0.1:8000/api",

  app_back_url_img: isLocal
    ? "http://127.0.0.1:8000/storage"
    : "https://backend.ange.tg/public/storage",
} as const;
