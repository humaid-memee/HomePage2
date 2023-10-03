import express from 'express'
import { getLocationById } from '../db/db.ts'

const router = express.Router()

router.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const user = await getLocationById(id)
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ message: 'Unable to retrieve location' })
  }
})
export default router
