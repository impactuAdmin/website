import { useState } from 'react'
import Link from 'next/link'
import styles from './Dropdown.module.css'

const Dropdown = ({ title, navLinkClassName }) => {
  const [isHovered, setIsHovered] = useState(false)

  const navLinks = [
    {
      title: 'Quem somos?',
      href: '/QuemSomos',
      dropdownLinks: [
        { title: 'Pilares', href: '/QuemSomos#pilares' },
        { title: 'Onde?', href: '/QuemSomos#onde' },
        { title: 'História', href: '/QuemSomos#historia' },
      ],
    },
    {
      title: 'Impacto Social',
      href: '/ImpactoSocial',
      dropdownLinks: [
        { title: 'Social', href: '/ImpactoSocial#social' },
        { title: 'Projetos', href: '/ImpactoSocial#projetos' },
      ],
    },
  ]

  const navLink = navLinks.find((link) => link.title === title)

  if (!navLink) return null

  return (
    <li
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={styles['nav-links-item']}
    >
      <Link href={navLink.href}>
        <a className={navLinkClassName}>{navLink.title}</a>
      </Link>

      {isHovered && (
        <div className={styles['dropdown-wrapper']}>
          <ul>
            {navLink.dropdownLinks.map((dropdownLink) => (
              <li key={dropdownLink.title}>
                <Link href={dropdownLink.href}>
                  <a className={styles['dropdown-link']}>{dropdownLink.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  )
}

export default Dropdown
