import {
  ICreateVideoInputModel,
  IUpdateVideoInputModel,
  IVideo,
} from '../types/videos';

interface IDbState {
  videos: IVideo[];
}

const initialState: IDbState = {
  videos: [],
};

interface IDatabase {
  getAllVideos(): IVideo[];
  getVideo(id: number): IVideo | null;
  createVideo(newVideoData: IVideo): void;
  updateVideo(id: number, updateVideoData: IUpdateVideoInputModel): boolean;
  deleteVideo(id: number): boolean;
  clearDatabase(): void;
}

export class Database implements IDatabase {
  private static instance: Database | null = null;
  private state: IDbState = initialState;
  constructor(dataset?: IDbState) {
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
  getVideo(id: number) {
    const requestedVideo = this.state.videos.find((video) => video.id === id);
    return requestedVideo ? requestedVideo : null;
  }
  createVideo(newVideoData: IVideo) {
    this.state.videos.push(newVideoData);
  }
  updateVideo(id: number, updateVideoData: IUpdateVideoInputModel) {
    const requestedVideoIndex = this.state.videos.findIndex(
      (video) => video.id === id
    );
    if (requestedVideoIndex === -1) return false;
    this.state.videos[requestedVideoIndex] = {
      ...this.state.videos[requestedVideoIndex],
      ...updateVideoData,
    };
    return true;
  }
  deleteVideo(id: number) {
    const requestedVideoIndex = this.state.videos.findIndex(
      (video) => video.id === id
    );
    if (requestedVideoIndex === -1) return false;
    this.state.videos.splice(requestedVideoIndex, 1);
    return true;
  }
  clearDatabase() {
    this.state.videos = [];
  }
}
