import { IPostInputModel, IPostViewModel } from '../../../types/posts';
import { DB } from '../db/db';
import BlogRepository from './BlogRepository';

export default {
  getAll() {
    return DB.posts;
  },
  findById(id: string): IPostViewModel | null {
    const findResult = DB.posts.find((post) => post.id === id);
    if (findResult) {
      const blogName = BlogRepository.findById(findResult.blogId)?.name;
      if (blogName)
        return {
          ...findResult,
          blogName,
        };
    }
    return null;
  },
  create(postData: IPostInputModel) {
    console.log(postData.blogId);
    if (!BlogRepository.findById(postData.blogId)) return null;
    const id = Date.now().toString();
    DB.posts.push({ id, ...postData });
    return this.findById(id);
  },
  updateById(id: string, postData: IPostInputModel) {
    const findResult = DB.posts.find((post) => post.id === id);
    if (findResult) {
      findResult.blogId = postData.blogId;
      findResult.title = postData.title;
      findResult.shortDescription = postData.shortDescription;
      findResult.content = postData.content;
      return true;
    }
    return null;
  },
  deleteById(id: string) {
    const findResult = this.findById(id);
    if (findResult) {
      DB.posts = DB.posts.filter((post) => post.id !== id);
      return true;
    }
    return null;
  },
};
