import { GeneralApiProblem } from "./api-problem"

// NOTE: this should be defined here only if not using a store
export interface User {
  id: number
  name: string
  phone: string
  username: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

export type GetUsersResult = { kind: "ok"; users: User[] } | GeneralApiProblem
export type GetUserResult = { kind: "ok"; user: User } | GeneralApiProblem
