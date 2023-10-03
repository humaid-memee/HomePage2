import express from 'express'
import { getLocationById, saveLocationById } from '../db/db.ts'

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

router.post('/', async (req, res) => {
  const coord = req.body
  try {
    const user = await saveLocationById(coord)
    res.status(201).json(user)
  } catch (error) {
    res.status(500).json({ message: 'Unable to save location' })
  }
})
export default router
