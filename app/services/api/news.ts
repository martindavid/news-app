import { ApiResponse } from "apisauce";
import { Api } from "./api";
import * as Types from "./api.types";
import { getGeneralApiProblem } from "./api-problem";

export class NewsApi extends Api {
  /**
   * Get news headline
   */
  async getHeadlineNews(): Promise<Types.GetNewsResult> {
    const response: ApiResponse<any> = await this.apisauce.get(
      "/top-headlines",
      { country: "au" }
    );

    if (!response.ok) {
      const problem = getGeneralApiProblem(response);
      if (problem) return problem;
    }

    const transformNews = raw => {
      return {
        source: {
          id: raw.source.id,
          name: raw.source.name
        },
        author: raw.author,
        title: raw.title,
        description: raw.description,
        url: raw.url,
        urlToImage: raw.urlToImage,
        publishedAt: raw.publishedAt,
        content: raw.content
      };
    };

    // transform the data into the format we are expecting
    try {
      const rawData = response.data;
      const news: Types.News[] = rawData.articles.map(transformNews);
      const searchResults: Types.SearchResult = {
        status: rawData.status,
        totalResults: rawData.totalResults,
        articles: news
      };
      return { kind: "ok", results: searchResults };
    } catch {
      return { kind: "bad-data" };
    }
  }
}
