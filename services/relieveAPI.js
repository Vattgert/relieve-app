import { get } from './Api';

class RelieveApi{
    getActivities(params){
        return get("/activities", params);
    }

    getActivity(activityId){
        return get(`/activities/${activityId}`);
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