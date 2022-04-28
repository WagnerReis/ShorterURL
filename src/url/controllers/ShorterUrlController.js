import { CreateNewUrlService } from "../services/CreateNewUrlService.js"
import { ShowNewUrlService } from "../services/ShowNewUrlService.js"

export const create = async (req, res) => {
  const { url } = req.body
  const newUrl = await CreateNewUrlService(url)

  return res.status(200).json(newUrl)
}

export const show = async (req, res) => {
  const { code } = req.params
  const newUrl = await ShowNewUrlService(code)
  
  res.redirect(newUrl)
}