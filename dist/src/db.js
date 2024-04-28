"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const initialState = {
    videos: [],
};
class Database {
    constructor(dataset) {
        this.state = initialState;
        if (Database.instance) {
            return Database.instance;
        }
        if (dataset) {
            this.state = dataset;
        }
    }
    getAllVideos() {
        return this.state.videos;
    }
    getVideo(id) {
        const requestedVideo = this.state.videos.find((video) => video.id === id);
        return requestedVideo ? requestedVideo : null;
    }
    createVideo(newVideoData) {
        this.state.videos.push(newVideoData);
    }
    updateVideo(id, updateVideoData) {
        const requestedVideoIndex = this.state.videos.findIndex((video) => video.id === id);
        if (requestedVideoIndex === -1)
            return false;
        this.state.videos[requestedVideoIndex] = Object.assign(Object.assign({}, this.state.videos[requestedVideoIndex]), updateVideoData);
        return true;
    }
    deleteVideo(id) {
        const requestedVideoIndex = this.state.videos.findIndex((video) => video.id === id);
        if (requestedVideoIndex === -1)
            return false;
        this.state.videos.splice(requestedVideoIndex, 1);
        return true;
    }
    clearDatabase() {
        this.state.videos = [];
    }
}
exports.Database = Database;
Database.instance = null;
