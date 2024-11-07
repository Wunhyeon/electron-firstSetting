import { HOME_PAGES } from '@shared/constants'
import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar: React.FC = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl" href={HOME_PAGES}>
          PomoLog
        </a>
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal bg-base-200 rounded-box">
          <li>
            <details>
              <summary>Parent item</summary>
              <ul className="bg-base-200 rounded-box p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
                <li>
                  <details>
                    <summary>Parent</summary>
                    <ul className="bg-base-200 rounded-box p-2">
                      <li>
                        <a>item 1</a>
                      </li>
                      <li>
                        <a>item 2</a>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
