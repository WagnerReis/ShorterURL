import mongoose from 'mongoose'
import app from './src/url/routes/url.routes.js'

mongoose.connect("mongodb://localhost:27017/shoterUrl", { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT}`)
})
