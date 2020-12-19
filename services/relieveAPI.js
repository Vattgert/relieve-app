class RelieveApi{
    constructor(){
        this.host = "http://api.relieve.com:3000";
        this.apiVersion = '/v1';
        this.requestOptions = {
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
        }
    }

    _getBaseUrl(){
        return `${this.host}${this.apiVersion}`;
    }

    _request(route){
        const url = `${this._getBaseUrl()}${route}`;
        return fetch(url, this.requestOptions)
                .then(response => response.json())
    }

    getActivities(){
        this.requestOptions["method"] = "GET";
        return this._request("/activities");
    }

    getActivity(activityId){
        this.requestOptions["method"] = "GET"
        return this._request(`/activities/${activityId}`);
    }

    getActivitiesByUser(userId){
        this.requestOptions["method"] = "GET";
        return this._request(`/profiles/${userId}/activities`);
    }

    getFavouriteActivities(userId){
        this.requestOptions["method"] = "GET";
        return this._request(`/profiles/${userId}/favourites`);
    }

    getTopCategories(){
        this.requestOptions["method"] = "GET";
        return this._request("/categories/top");
    }

    login(){
        this.requestOptions["method"] = "GET";
        return this._request("/login");
    }
}

export default new RelieveApi();