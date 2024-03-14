import { Activity } from '../../types'

import laser from '../../assets/laser.svg'
import cafe from '../../assets/cafe.svg'
import quest from '../../assets/quest.svg'
import mask from '../../assets/mask.svg'
import party from '../../assets/party.svg'

export const activities: Activity[] = [
  { icon: laser, label: 'Laser tag' },
  { icon: mask, label: 'Master classes' },
  { icon: quest, label: 'Quest rooms' },
  { icon: party, label: "Children's studios" },
  { icon: cafe, label: "Cafes and restaurants with a children's room" },
  { icon: party, label: 'Party' },
]
