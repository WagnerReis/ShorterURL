import mongoose from 'mongoose'
const Schema = mongoose.Schema

const url = new Schema(
  {
    url: String,
    newUrl: String
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (obj, ret) => {
        delete ret._id
      }
    }
  }
)

const model = mongoose.model('Url', url)

export const schema = model.schema
export default model