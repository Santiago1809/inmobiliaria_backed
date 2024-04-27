import {genSalt, hash, compare} from 'bcrypt'

const salt = await genSalt(15)

export const encrypt = (password: string) => {
  return hash(password, salt)
}
export const decrypt = (stored:string, incoming:string) => {
  return compare(incoming, stored)
}
