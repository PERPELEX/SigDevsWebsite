// pages/api/getService.js
import { services } from '@/data/serviceData'

export default function handler(req, res) {
    const { name } = req.query
    const service = services.find(service => service.name.toLowerCase() === name.toLowerCase())

    if (service) {
        res.status(200).json(service)
    } else {
        res.status(404).json({ message: 'Service not found' })
    }
}