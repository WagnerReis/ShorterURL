import Url from '../models/Url.js'
import { AppError } from '../../errors/AppError.js'

export const ShowNewUrlService = async (code) => {
  try {
    const urlShorter = `${process.env.BASEURL}${code}`
    const url = await Url.findOne({ newUrl: urlShorter })

    if (!url) {
      throw new AppError('Url not found!')
    }

    return url.url
  } catch (err) {
    console.log(err)
  }
}