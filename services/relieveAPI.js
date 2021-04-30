import { get, post } from './Api';

class RelieveApi {
  getActivities(params) {
    return get('/activities', params);
  }

  getActivity(activityId) {
    return get(`/activities/${activityId}`);
  }

  getTopCategories() {
    return get('/categories/top');
  }

  getUserProfile(userId) {
    return get(`/profiles/${userId}`);
  }

  login(credentials = { emal: 'vattgert@gmail.com', password: '228lol' }) {
    console.log(credentials);
    return post('/login', credentials).then(console.log);
  }
}

export default new RelieveApi();
