import nc from 'next-connect'
import dbConnect from 'util/dbConnect'
import Course from 'models/Course'

dbConnect()

const handler = nc().get(async (req, res) => {
  const courses = await Course.find({}).exec()
  res.statusCode = 200
  res.json({ courses })
})

export default handler
