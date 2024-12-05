/** @format */

const endPoints = {
  auth: {
    login: "api/v1/admin/login",
    forgetPassword: "api/v1/admin/forgetPassword",
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
    getAll: "api/v1/admin/City/All",
    remove: (id) => `api/v1/admin/City/${id}`,
  },
  skill: {
    create: "api/v1/admin/addSkill",
    getAll: "api/v1/admin/SkillAll/All",
    update: (id) => `api/v1/admin/Skill/${id}`,
    remove: (id) => `api/v1/admin/Skill/${id}`,
  },
  siteMap: {
    create: "api/v1/admin/addSiteMap",
    getAll: ({ page = 1, limit = 5 }) =>
      `api/v1/admin/SiteMapAll/SiteMap?page=${page}&limit=${limit}`,
  },
  users: {
    getAll: ({ search = "" }) => `api/v1/admin/user/ForAdmin?search=${search}`,
    remove: (id) => `api/v1/admin/user/${id}`,
    updateUser: (id) => `api/v1/admin/editUserProfile/${id}`,
  },
  menuList: {
    getAll: "api/v1/admin/Menu/getMenu",
    create: "api/v1/admin/Menu/createMenu",
    update: (id) => `api/v1/admin/Menu/updateMenu/${id}`,
    remove: (id) => `api/v1/admin/Menu/deleteMenu/${id}`,
  },
  subscriberPost: {
    create: "api/v1/admin/SubscriptionPost/createSubscriptionPost",
    getAll: ({ page = 1, limit = 10 }) =>
      `api/v1/admin/SubscriptionPost/getSubscriptionPost?page=${page}&limit=${limit}`,
    update: (id) =>
      `api/v1/admin/SubscriptionPost/updateSubscriptionPost/${id}`,
    remove: (id) =>
      `api/v1/admin/SubscriptionPost/deleteSubscriptionPost/${id}`,
  },
  events: {
    create: "api/v1/admin/Event/createEvent",
  },
};

export default endPoints;
