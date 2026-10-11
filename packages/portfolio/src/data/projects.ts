export type Project = {
  title: string
  category: string
  description: string
  tags: string[]
  number: string
  image: string
  repositoryUrl: string
}

export const projects: Project[] = [
  { title: 'DriveWise', category: 'Progressive Web Application', description: 'A Web-Based AI-Powered Eye Closure Alert and Fleet Management System with GPS Tracking', tags: ['AI', 'GPS Tracking'], number: '01', image: driveWiseLogo, repositoryUrl: 'https://github.com/Rowkiduyan/drivewise-system' },
  { title: 'QReserve', category: 'Web Application (Desktop & Mobile)', description: 'A Web-Based Reservation System with QR Code Check-in', tags: ['QR Code'], number: '02', image: qReserveLogo, repositoryUrl: 'https://github.com/jmichaelmrecio-star/QReserve' },
]
import driveWiseLogo from '../../../../resources/images/DriveWiseLogo.png'
import qReserveLogo from '../../../../resources/images/QReserveLogo.png'
