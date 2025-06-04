import { sanityClient } from './sanity';
import { Thought } from '@/types/thought';

export async function getLatestThought(): Promise<Thought> {
  const query = `*[_type == "thought"] | order(date desc)[0] {
    _id,
    title,
    excerpt,
    content,
    date,
    tags,
    category
  }`;

  return sanityClient.fetch(query);
}

export async function getAllThoughts(): Promise<Thought[]> {
  const query = `*[_type == "thought"] | order(date desc) {
    _id,
    title,
    excerpt,
    content,
    date,
    tags,
    category
  }`;

  return sanityClient.fetch(query);
} 