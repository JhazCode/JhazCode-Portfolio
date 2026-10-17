import alibabaLogo from '../../../../resources/images/alibaba.png'
import ciscoLogo from '../../../../resources/images/cisco.jpg'
import trailheadLogo from '../../../../resources/images/trailhead.png'

export type Certification = {
  name: string
  providers: string[]
  image: string
  actions: Array<{
    label: string
    href: string
  }>
}

export const certifications: Certification[] = [
  {
    name: 'Salesforce Trailhead',
    providers: ['Salesforce Trailhead'],
    image: trailheadLogo,
    actions: [
      {
        label: 'VIEW IN SALESFORCE TRAILHEAD',
        href: 'https://www.salesforce.com/trailblazer/us5y1grl858yj0qyju',
      },
    ],
  },
  {
    name: 'Cloud Fundamentals',
    providers: ['Alibaba Cloud', 'LinkedIn Learning'],
    image: alibabaLogo,
    actions: [
      {
        label: 'VIEW IN GOOGLE DRIVE',
        href: 'https://drive.google.com/drive/folders/1a-XNVjInxxLbmhwaw0nhMwWbiMZnQkiX?usp=sharing',
      },
    ],
  },
  {
    name: 'Software, Hardware, & Networking',
    providers: ['Cisco Networking Academy', 'LinkedIn Learning'],
    image: ciscoLogo,
    actions: [
      {
        label: 'VIEW IN CREDLY',
        href: 'https://www.credly.com/users/jhazel-john-apuli/badges/credly',
      },
      {
        label: 'VIEW IN GOOGLE DRIVE',
        href: 'https://drive.google.com/drive/folders/1R2OCjI1JUkaYXyMJK-oSnQJuQVdSPRly?usp=sharing',
      },
    ],
  },
]
