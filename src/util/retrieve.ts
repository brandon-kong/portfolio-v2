/* For Blogs */

import axios from 'axios';

import { BLOG_URL } from './variables';

import type { EntryCollection, EntrySkeletonType } from 'contentful';

export const getPublishedEntries = async () => {
    const res = await axios.get<EntryCollection<EntrySkeletonType, undefined, string>>(`${BLOG_URL}/api/blogs`);
    return res.data;
};