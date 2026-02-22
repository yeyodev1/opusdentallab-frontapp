import StoryblokClient, { type ISbStoryData } from 'storyblok-js-client';

export interface StoryblokAsset {
  id: number;
  alt: string;
  name: string;
  focus: string;
  title: string;
  source: string;
  filename: string;
  copyright: string;
  fieldtype: string;
  meta_data: any;
}

export interface BusinessCaseContent {
  _uid: string;
  fecha: string;
  title: string;
  component: 'business case';
  fotos: StoryblokAsset[];
}

export type BusinessCaseStory = ISbStoryData<BusinessCaseContent>;

class StoryblokService {
  private client: StoryblokClient;

  constructor() {
    this.client = new StoryblokClient({
      accessToken: 'ES7Yu9A5gqv4Gg4zvp1iBwtt',
      cache: {
        clear: 'auto',
        type: 'memory'
      },
      endpoint: 'https://api.storyblok.com/v2'
    });
  }

  /**
   * Fetches the list of latest cases (blog posts) from Storyblok.
   * Filters by the 'blog/' folder and orders by date ascending (or descending as needed).
   */
  async getLatestCases(): Promise<BusinessCaseStory[]> {
    try {
      const response = await this.client.get('cdn/stories', {
        version: 'published',
        starts_with: 'blog/',
        sort_by: 'content.fecha:desc', // Using descending to get latest first
      });
      return response.data.stories;
    } catch (error) {
      console.error('StoryblokService: Error fetching cases', error);
      throw error;
    }
  }

  /**
   * Fetches a specific case by its UUID
   * @param uuid Unique identifier of the case
   */
  async getCaseById(uuid: string): Promise<BusinessCaseStory | null> {
    try {
      const response = await this.client.get('cdn/stories', {
        version: 'published',
        by_uuids: uuid,
      });

      if (response.data.stories && response.data.stories.length > 0) {
        return response.data.stories[0];
      }
      return null;
    } catch (error) {
      console.error(`StoryblokService: Error fetching case by ID ${uuid}`, error);
      throw error;
    }
  }

  /**
   * Fetches a specific case by its Slug
   * @param slug The case slug (e.g., 'case-1')
   */
  async getCaseBySlug(slug: string): Promise<BusinessCaseStory | null> {
    try {
      const response = await this.client.get('cdn/stories', {
        version: 'published',
        by_slugs: `blog/${slug}`
      });

      if (response.data.stories && response.data.stories.length > 0) {
        return response.data.stories[0];
      }
      return null;
    } catch (error) {
      console.error(`StoryblokService: Error fetching case by slug ${slug}`, error);
      throw error;
    }
  }
}

export default new StoryblokService();
