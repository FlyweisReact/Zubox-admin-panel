/** @format */

const endPoints = {
  auth: {
    login: "api/v1/admin/login",
  },
  logo: {
    getLogo: "api/v1/admin/Logo/ForAdmin",
    createLogo: "api/v1/admin/addLogo",
    removeLogo: (id) => `api/v1/admin/Logo/${id}`,
  },
  cell: {
    getAll: ({ limit = 10, page = 1 }) =>
      `api/v1/admin/CellAll/Cell?limit=${limit}&page=${page}`,
    create: "api/v1/admin/addCell",
    update: (id) => `api/v1/admin/Cell/${id}`,
    remove: (id) => `api/v1/admin/Cell/${id}`,
  },
  places: {
    getAll: "api/v1/admin/PlaceAll/Place",
    create: "api/v1/admin/addPlace",
    remove: (id) => `api/v1/admin/Place/${id}`,
    update: (id) => `api/v1/admin/Place/${id}`,
  },
  city: {
    create: "api/v1/admin/addCity",
  },
};

export default endPoints;
