// lib/plans.ts
import { collections, getDocs } from 'firebase/firestore'
import { db } from './firebase'

export const fetchPlans = async () => {
  const snapshot = await getDocs(collections(db, 'plans'))
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }))
}
