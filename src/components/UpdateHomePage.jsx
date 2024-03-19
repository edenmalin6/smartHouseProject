import React, { useState } from 'react'
import { storageService } from '../services/storageService'

export const UpdateHomePage = () => {
    const [rooms, setRooms] = useState(storageService.getRooms())

  return (
    <div>UpdateHomePage</div>
  )
}
