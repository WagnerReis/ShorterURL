import mongoose from 'mongoose'
const Schema = mongoose.Schema

const urlSchema = new Schema(
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

urlSchema.index({ newUrl: 1 })

const model = mongoose.model('Url', urlSchema)

export const schema = model.schema
export default model