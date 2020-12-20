import { get } from './Api';

class RelieveApi{
    getActivities(params){
        return get("/activities", params);
    }

    getActivity(activityId){
        return get(`/activities/${activityId}`);
    }

    getActivitiesByUser(params){
        return get(`/profiles/${userId}/activities`, params);
    }

    getFavouriteActivities(userId){
        return get(`/profiles/${userId}/favourites`);
    }

    getTopCategories(){
        return get("/categories/top");
    }

    getUserProfile(userId){
        return get(`/profiles/${userId}`);
    }

    login(){
        this.requestOptions["method"] = "GET";
        return this._request("/login");
    }
}

export default new RelieveApi();