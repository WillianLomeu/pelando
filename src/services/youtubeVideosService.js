import request from './request';
import * as env from '../.env.json';

const getInfoVideo = () => request.get(env.youtubeApiUrl+`/videos?${env.options}&id=youtube&key=[${env.youtubeApiKey}]`);

export { getInfoVideo };