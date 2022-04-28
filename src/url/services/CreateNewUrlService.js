import { AppError } from "../../errors/AppError.js"
import Url from "../models/Url.js"

export const CreateNewUrlService = async (url) => {
  try{
    const urlAlreadyExists = await Url.find({ url: url })

    if(urlAlreadyExists.length > 0){
      throw new AppError('Url already exists!')
    }

    const NUMCARACTERSNEWURL = 7
    const code = randomString(NUMCARACTERSNEWURL)

    const createNewUrl = await Url.create({
      url,
      newUrl: `${process.env.BASEURL}${code}`
    })

    return createNewUrl.newUrl
  }catch(err){
    console.log(err)
  }
}

const randomString = (length) => {
  var randomString = ''
  var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (var i = 0; i < length; i++) {
      randomString += caracteres.charAt(Math.floor(Math.random() * caracteres.length))
  }
  return randomString
}