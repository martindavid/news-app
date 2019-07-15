import { ApiResponse } from "apisauce";
import { Api } from "./api";
import * as Types from "./api.types";
import { getGeneralApiProblem } from "./api-problem";

export class UserApi extends Api {
  /**
   * Gets a list of users.
   */
  async getUsers(): Promise<Types.GetUsersResult> {
    // make the api call
    const response: ApiResponse<any> = await this.apisauce.get(`/users`);

    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem = getGeneralApiProblem(response);
      if (problem) return problem;
    }

    const convertUser = raw => {
      return {
        id: raw.id,
        name: raw.name,
        phone: raw.phone,
        username: raw.username,
        company: { ...raw.company }
      };
    };

    // transform the data into the format we are expecting
    try {
      const rawUsers = response.data;
      const resultUsers: Types.User[] = rawUsers.map(convertUser);
      return { kind: "ok", users: resultUsers };
    } catch {
      return { kind: "bad-data" };
    }
  }

  /**
   * Gets a single user by ID
   */

  async getUser(id: string): Promise<Types.GetUserResult> {
    // make the api call
    const response: ApiResponse<any> = await this.apisauce.get(`/users/${id}`);

    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem = getGeneralApiProblem(response);
      if (problem) return problem;
    }

    // transform the data into the format we are expecting
    try {
      const resultUser: Types.User = {
        id: response.data.id,
        name: response.data.name,
        phone: response.data.phone,
        username: response.data.username,
        company: { ...response.data.company }
      };
      return { kind: "ok", user: resultUser };
    } catch {
      return { kind: "bad-data" };
    }
  }
}
