import {genSaltSync, hashSync, compareSync} from 'bcrypt'

const salt = genSaltSync(15)

export const encrypt = (password: string) => {
  return hashSync(password, salt)
}
export const decrypt = (stored:string, incoming:string) => {
  return compareSync(incoming, stored)
}
