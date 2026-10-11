export type SkillGroup = {
  title: string
  items: string[]
}

export const skills: SkillGroup[] = [
  { title: 'Systems & Hardware', items: ['PC Assembly', 'Hardware Diagnostics', 'BIOS / UEFI Configuration', 'Software and Hardware Troubleshooting'] },
  { title: 'Networking', items: ['IP Addressing', 'TCP/IP', 'Subnetting', 'VLAN', 'Network Topology', 'Routing Protocols'] },
  { title: 'Operating Systems', items: ['Windows Administration', 'Windows Installation','Kali Linux CLI Basics', 'PowerShell', 'Command Prompt'] },
  { title: 'Databases', items: ['MS SQL', 'MySQL', 'PostgreSQL', 'MongoDB', 'Database Management Concepts'] },
  { title: 'Cloud & Virtualization', items: [ 'Virtual Machines', 'Cloud Computing Fundamentals (Alibaba Cloud, Microsoft Azure, AWS)'] },
  { title: 'Software Tools', items: ['Cisco Packet Tracer', 'GitHub', 'Visual Studio Code', 'Microsoft 365', 'Google Workspace', 'VirtualBox'] },
]
